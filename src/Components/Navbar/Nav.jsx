import React, { useState } from 'react';
import { FaBars, FaPlus } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="w-full bg-white shadow-lg relative">
            <nav className='max-w-7xl mx-auto py-4 flex items-center justify-between md:px-6 lg:px-0 px-6 mb-8'>
                {/* logo */}
                <div>
                    <h1 className="text-xl font-bold"><span className="text-blue-600">CS-Ticket</span> <span className='text-purple-600'>System</span></h1>
                </div>
                {/* nav items */}
                <div>
                    <ul className='hidden  lg:flex items-center gap-4 font-semibold text-gray-800'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Changelog</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Download</a></li>
                        <li><a href="#">Contact</a></li>
                        <button className="bg-[#422AD5] text-white px-4 py-3 rounded-md flex items-center gap-2"><FaPlus /> New Ticket</button>
                    </ul>
                </div>
                {/* mobile toggle button */}
                <div className='lg:hidden'>
                    {
                        toggleMenu ? <ImCross className="text-2xl cursor-pointer" onClick={() => setToggleMenu(false)} /> : <FaBars className="text-2xl cursor-pointer" onClick={() => setToggleMenu(true)} />
                    }
                </div>
                
            </nav >
            {/* mobile menu Items */}
                {
                    toggleMenu && <div className='w-full bg-white shadow-lg lg:hidden z-10 absolute left-0 top-20 py-6'>
                        <ul className='flex flex-col items-center gap-6 font-semibold text-gray-800'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Changelog</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Download</a></li>
                            <li><a href="#">Contact</a></li>
                            <button className="bg-[#422AD5] text-white px-4 py-3 rounded-md flex items-center gap-2"><FaPlus /> New Ticket</button>
                        </ul>
                    </div>
                }

        </div >

    );
};

export default Nav;