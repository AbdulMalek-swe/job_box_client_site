import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  getAuth, signOut } from "firebase/auth";
import { logout } from '../../features/auth/authSlice';

const Navbar = () => {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    const auth = getAuth()
   const userSignOut = () =>{
    signOut(auth).then(() => {
        console.log("successfully");
        dispatch(logout())
      }).catch((error) => {
         console.log(error.message)
      });
   }
    
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  
   { !state?.auth?.email ? <Link to="/user/login">login</Link>:
       <button type="button" class="px-2 py-1 text-xs font-medium text-center    rounded-full border border-gray-800 dark:hover:bg-black-600 "  onClick={userSignOut}>Log out</button>
   }
  </div>
</div>
</div>
      
    );
};

export default Navbar;