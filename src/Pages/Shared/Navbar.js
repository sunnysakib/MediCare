import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const navbar_type_classes = {
    banner: 'bannerNavbar',
}

const Navbar = ({navbarType, ...otherProps}) => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      };

    const menuItems = <>
        <li><Link className=" btn-outline text-bold" to="/">Home</Link></li>
        <li><Link className=" btn-outline" to="/appointment">Appointment</Link></li>
        <li><Link className=" btn-outline" to="/dashboard">Dashboard</Link></li>
        <li><Link  className=" btn-outline" to="/blood-bank">BloodBank</Link></li>
        <li><Link className=" btn-outline" to="/ambulance-service">Ambulance Service</Link></li>
        <li><Link className=" btn-outline" to="/helpline">Helpline</Link></li>
        <li><Link className=" btn-outline" to="/contact">Contact</Link></li>
        <li>{user ? <button className="btn btn-outline"  onClick={logout} >Sign Out</button> : <Link  className=" btn-outline" to="/login">Login </Link>}</li>
    </>
    return (
        <div  className={`navbar max-w-7xl mx-auto px-12 ${navbar_type_classes[navbarType]}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl">MediCare</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
                
            </div>
            {/* <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div> */}
        </div>
    );
};

export default Navbar;