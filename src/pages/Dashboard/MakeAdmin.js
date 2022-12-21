import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../shared/Loading/Loading';

const MakeAdmin = () => {

    const [users, setUsers] = useState([]);
    const [userDeleteCount, setUserDeleteCount] = useState(0);
    const [adminCreate, setAdminCreate] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://damp-brushlands-62497.herokuapp.com/allUser", {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false);
            })

    }, [userDeleteCount, adminCreate])

    const handleUserDelete = (id) => {
        fetch(`https://damp-brushlands-62497.herokuapp.com/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setUserDeleteCount(userDeleteCount + 1);
                }
            })
    }

    const handleUserAdmin = (email) => {
        fetch(`https://damp-brushlands-62497.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setAdminCreate(adminCreate + 1)
                    toast.success("Admin done");
                } else {
                    toast.error(`Not an Admin`);
                }
            })
    }

    return (loading ? <Loading loadingStatus="true"></Loading> :
        <div className='mx-4 sm:mx-0'>
            <h2 className='text-3xl font-medium py-3'>Manage Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>admin list</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((singleUser, index) => <tr key={singleUser._id}>
                            <th>{index + 1}</th>
                            <td>{singleUser.email}</td>
                            <td>
                                {singleUser.role !== "admin" ? <button onClick={() => handleUserAdmin(singleUser.email)} className='btn btn-success btn-sm'>Make Admin</button> : <span className='text-success'>Already Admin</span>}
                            </td>
                            <td>
                                <button className='btn btn-error btn-sm mr-2' onClick={() => handleUserDelete(singleUser._id)}>Remove user</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;