import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
 const [user] = useAuthState(auth);
 const [admin] = useAdmin(user);

 return (
  <div className="drawer drawer-mobile">
   <input id="sidebar-open" type="checkbox" className="drawer-toggle" />
   <div className="drawer-content">
    <h2 className="text-2xl text-primary text-center font-bold mt-5 ml-3 sm:ml-0">
     Welcome to your Dashboard
    </h2>
    <Outlet></Outlet>
   </div>
   <div className="drawer-side">
    <label htmlFor="sidebar-open" className="drawer-overlay"></label>
    <ul className="menu py-4 pl-4 pr-10 overflow-y-auto w-54 mr-3 bg-sky-900
     text-white">
     <li>
      <Link to="/dashboard">My Profile</Link>
     </li>
     {admin === true ? (
      ""
     ) : (
      <>
       <li>
        {/* <Link to="/dashboard/user">All Users</Link> */}
       </li>
      </>
     )}
     {admin && (
      <>
       <li>
       <Link to="/dashboard/user">All Users</Link>
       </li>
      </>
     )}
    </ul>
   </div>
  </div>
 );
};

export default Dashboard;
