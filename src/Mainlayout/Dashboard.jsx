import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CiShoppingCart ,CiHome } from "react-icons/ci";
import { IoFilm } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
 




const Dashboard = () => {
 
    return (
        <div className="max-w-screen-xl mx-auto flex">
            <div className='w-64 bg-amber-400 min-h-full text-white'>
                <ul className='p-5   '>
                    <li className='flex mb-4'>
                        <CiHome  className='text-3xl mr-3'></CiHome >
                        <NavLink to='dashboard/userhome'>UserHome</NavLink>
                    </li>

                    <li className='flex mb-4'>
                        <IoFilm className='text-3xl mr-4'></IoFilm>
                        <NavLink to='dashboard/reservation'>Reservation</NavLink>
                    </li>

                    <li className='flex mb-4'>
                        <MdOutlinePayment className='text-3xl mr-3'></MdOutlinePayment>
                        <NavLink to='dashboard/payment'>payment history</NavLink>
                    </li>
                    <li className='flex mb-4'>
                        <CiShoppingCart className='text-3xl mr-3'></CiShoppingCart>
                        <NavLink to='dashboard/cart'>My Cart</NavLink>
                    </li>
                    <li className='flex mb-4'>
                        <CiShoppingCart className='text-3xl mr-3'></CiShoppingCart>
                        <NavLink to='dashboard/review'>add review</NavLink>
                    </li>
                    <li className='flex mb-4'>
                        <CiShoppingCart className='text-3xl mr-3'></CiShoppingCart>
                        <NavLink to='dashboard/booking'>My booking</NavLink>
                    </li>
                    <div className="divider divider-start"></div>

                    <li className='flex mb-4'>
                        <CiHome  className='text-3xl mr-3'></CiHome >
                        <NavLink to='/'>Go Home</NavLink>
                    </li>


                </ul>

            </div>
            <div className='flex-1 p-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;