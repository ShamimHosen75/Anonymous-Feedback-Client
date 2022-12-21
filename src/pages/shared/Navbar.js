import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    }

    const menuItem = <>
        <li><Link to="/home">Home</Link></li>
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}
        <li><Link to="/blog">Blog</Link></li>

    </>

    return (
        <div className="navbar bg-primary sm:px-16 text-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52 font-medium">
                        {menuItem}
                        {user ? <button onClick={handleLogOut} className="btn btn-secondary text-white border-0">Sign Out</button> : <Link to="/login" className="btn btn-secondary text-white border-0">Login</Link>}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bold px-0">Anonymous Feedback</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-medium sm:ml-10">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end hidden sm:block sm:flex">
                {user ? <button onClick={handleLogOut} className="btn btn-secondary text-white border-0">Sign Out</button> : <Link to="/login" className="btn btn-secondary text-white border-0">Login</Link>}
            </div>
            <div className="navbar-end sm:hidden">
                <label tabIndex="1" htmlFor="sidebar-open" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;