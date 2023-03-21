import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [userDeleteCount, setUserDeleteCount] = useState(0);
  const [adminCreate, setAdminCreate] = useState(0);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
   setLoading(true);
   fetch("https://anonymous-feedback-system.vercel.app/user", {
    method: "GET",
    headers: {
     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
   })
    .then((res) => res.json())
    .then((data) => {
     setUsers(data);
     setLoading(false);
    });
  }, [userDeleteCount, adminCreate]);
 
  const handleUserDelete = (email) => {
   fetch(`https://anonymous-feedback-system.vercel.app/user/${email}`, {
    method: "DELETE",
   })
    .then((res) => res.json())
    .then((data) => {
     if (data.acknowledged) {
      setUserDeleteCount(userDeleteCount + 1);
      toast.success("Remove user");
     }
    });
  };
 
  const handleUserAdmin = (email) => {
   fetch(`https://anonymous-feedback-system.vercel.app/user/admin/${email}`, {
    method: "PUT",
    headers: {
     "Content-Type": "application/json",
     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
   })
    .then((res) => res.json())
    .then((data) => {
     if (data) {
      setAdminCreate(adminCreate + 1);
      toast.success("Admin done");
     } else {
      toast.error(`Not an Admin`);
     }
    });
  };

 return (
  <div>
   <h2 className="text-3xl mt-6 font-bold py-5">All Users</h2>
   <div className="overflow-x-auto">
   <table className="table w-full text-center">
     <thead>
      <tr>
       <th>No</th>
       <th>Email</th>
       <th>admin list</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>
      {users.map((singleUser, index) => (
       <tr key={singleUser.email}>
        <th>{index + 1}</th>
        <td>{singleUser.email}</td>
        <td>
         {singleUser.role !== "admin" ? (
          <button
           onClick={() => handleUserAdmin(singleUser.email)}
           className="btn btn-success btn-sm"
          >
           Make Admin
          </button>
         ) : (
          <span className="text-success">Already Admin</span>
         )}
        </td>
        <td>
         <button
          onClick={() => handleUserDelete(singleUser.email)}
          className="btn btn-error btn-sm mr-2"
         >
          Remove user
         </button>
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>
  </div>
 );
};

export default Users;
