import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GiPlagueDoctorProfile } from "react-icons/gi";

const Navbar = () => {
    return (
        <nav className="bg-white border border-gray-300 shadow-md sticky top-0 left-0 w-full z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                <div className="flex items-center space-x-5 rtl:space-x-reverse">
                    <a href="/Dash" className="flex items-center space-x-3">
                        <p className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">Floop</p>
                    </a>
                    <input type="text" placeholder="Search the Floop.." className="w-80 p-2 rounded border border-gray-400 bg-white text-gray-800"/>
                </div>
                <div className="hidden w-full md:block font-Roboto md:w-auto">
                    <ul className="flex flex-col font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <a href="/" className="block py-2 px-3 md:p-0 text-gray-800 rounded md:bg-transparent hover:text-gray-900">Home</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 px-3 md:p-0 text-gray-800 rounded hover:bg-gray-200 hover:text-blue-500">Feed</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 px-3 md:p-0 text-gray-800 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 hover:text-blue-500">Sites</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 px-3 md:p-0 text-gray-800 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 hover:text-blue-500">People</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 px-3 md:p-0 text-gray-800 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 hover:text-blue-500">Apps</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center text-sm space-x-4">
                    <button className="text-gray-600 hover:text-gray-900">
                        <IoIosNotificationsOutline className='h-6 w-6'/>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                        {/* <CgProfile className='h-6 w-6' /> */}
                        <GiPlagueDoctorProfile className='h-6 w-6' />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
