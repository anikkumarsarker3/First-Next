"use client"
import useAuth from '@/hooks/useAuth';
import { link } from '@heroui/react';
import Link from 'next/link';
import React from 'react';


const Navbar = () => {
    const { user, logOut } = useAuth();
    const links = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/products'>Products</Link></li>
        <li><Link href='/about'>About</Link></li>
        {
            user && <>
                <li><Link href='/add-product'>Add Product</Link></li>
                <li><Link href='/manage-products'>Manage Products</Link></li>


            </>
        }

    </>
    const handleLogout = () => {
        logOut();
    }
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href='/' className="text-xl font-bold">Ghor Shaj</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                <div className={`bg-gray-300 rounded-2xl mr-3 ${!user ? "hidden" : ''} p-1`}>
                    {
                        user && <h2 className='flex mr justify-center items-center gap-3 font-bold'>
                            <span><img src={user?.photoURL} alt="" className='w-10 rounded-full ' />
                            </span>{user?.displayName}</h2>
                    }
                </div>
                {
                    user ? <button onClick={handleLogout} className="btn">Logout</button> : <Link href='/login' className="btn">Login</Link>
                }

            </div>
        </div >
    );
};

export default Navbar;