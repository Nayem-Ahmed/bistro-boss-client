import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    document.addEventListener('scroll',()=>{
        const header = document.querySelector('.navbar');
        if (window.scrollY > 0) {
            header.classList.add('scrolled')
            
        }else{
            header.classList.remove('scrolled')
        }
    })
    const link = <>
     <NavLink className='nav' to='/'>Home</NavLink> 
     <NavLink className='nav' to='/contact'>Contact us</NavLink> 
     <NavLink className='nav' to='/dashboard'>Dashboard</NavLink> 
     <NavLink className='nav' to='/ourmenu'>Our menu</NavLink> 
     <NavLink className='nav' to='/ourshop'>Our shop</NavLink> 
    </>
    return (
        <div className="navbar scrolled  text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
              <Link to= "/">
                <p className="md:normal-case md:text-xl font-semibold">BISTRO BOSS</p>
                <aside className='md:tracking-[10px]'>Restaurant</aside>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Sign in</a>
            </div>
        </div>
    );
};

export default Navbar;