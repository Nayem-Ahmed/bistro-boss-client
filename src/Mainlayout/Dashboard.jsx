import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CiShoppingCart ,CiHome } from "react-icons/ci";
import { IoFilm , IoMenuSharp } from "react-icons/io5";
import { MdOutlinePayment , MdEmail } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import useAdmin from '../Hooks/useAdmin';



const Dashboard = () => {
    // TODO
    const [isAdmin] = useAdmin();
 
    return (
        <div className="max-w-screen-xl mx-auto flex">
            <div className='w-64 bg-amber-400 min-h-full text-white'>
                <ul className='p-5   '>
                    {
                        isAdmin ? <>
                        <li className='flex mb-4'>
                        <CiHome  className='text-3xl mr-3'></CiHome >
                        <NavLink to='/dashboard/adminhome'>Admin Home</NavLink>
                    </li>

                    <li className='flex mb-4'>
                        <IoFilm className='text-3xl mr-4'></IoFilm>
                        <NavLink to='/dashboard/additems'>Add Items</NavLink>
                    </li>

                    <li className='flex mb-4'>
                        <MdOutlinePayment className='text-3xl mr-3'></MdOutlinePayment>
                        <NavLink to='/dashboard/manage'>Manage Items</NavLink>
                    </li>
                    <li className='flex mb-4'>
                        <CiShoppingCart className='text-3xl mr-3'></CiShoppingCart>
                        <NavLink to='/dashboard/allusers'>All Users</NavLink>
                    </li>


                        </>
                        :
                        <>
                        <li className='flex mb-4'>
                        <CiHome  className='text-3xl mr-3'></CiHome >
                        <NavLink to='/dashboard/userhome'>UserHome</NavLink>
                    </li>

                    <li className='flex mb-4'>
                        <IoFilm className='text-3xl mr-4'></IoFilm>
                        <NavLink to='/dashboard/payment'>Reservation</NavLink>
                    </li>

                    <li className='flex mb-4'>
                        <MdOutlinePayment className='text-3xl mr-3'></MdOutlinePayment>
                        <NavLink to='/dashboard/payment'>payment history</NavLink>
                    </li>
                    <li className='flex mb-4'>
                        <CiShoppingCart className='text-3xl mr-3'></CiShoppingCart>
                        <NavLink to='/dashboard/cart'>My Cart</NavLink>
                    </li>
                    <li className='flex mb-4'>
                        <CiShoppingCart className='text-3xl mr-3'></CiShoppingCart>
                        <NavLink to='/dashboard/review'>add review</NavLink>
                    </li>
                    <li className='flex mb-4'>
                        <CiShoppingCart className='text-3xl mr-3'></CiShoppingCart>
                        <NavLink to='/dashboard/booking'>My booking</NavLink>
                    </li>

                         
                        </>
                    }

                    <div className="divider divider-start"></div>

                    <li className='flex mb-4'>
                        <CiHome  className='text-3xl mr-3'></CiHome >
                        <NavLink to='/'>Go Home</NavLink>
                    </li>
                    <li className='flex mb-4'>
                        <IoMenuSharp   className='text-3xl mr-3'></IoMenuSharp  >
                        <NavLink to='/shop/salad'>Menu</NavLink>
                    </li>
                    <li className='flex mb-4'>
                        < FaShoppingBag className='text-3xl mr-3'></FaShoppingBag >
                        <NavLink to='/'>Shop</NavLink>
                       
                    </li>
                    <li className='flex mb-4'>
                        <MdEmail  className='text-3xl mr-3'></MdEmail  >
                        <NavLink to='/'>Contact</NavLink>
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