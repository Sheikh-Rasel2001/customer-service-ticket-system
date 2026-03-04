import React from 'react';
import { CgMail } from 'react-icons/cg';
import { FaFacebookF, FaLinkedin, FaRegCopyright, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='w-full bg-black'>
            <div className='max--w-7xl mx-auto px-6 pt-8 text-gray-50'>
                {/* parent */}
                <div className='grid grid-cols-1 lg:grid lg:grid-cols-3 gap-4 border-b border-gray-400 pb-5'>
                    {/* cs title */}
                    <div>
                        <h1 className="text-2xl font-bold mb-4"><span className="text-blue-600">CS-Ticket</span> <span className='text-purple-600'>System</span></h1>
                        <p className='text-sm text-gray-400'>"Customer reports that they are unable to log into their account even after entering the correct username and password multiple times. They have tried resetting the password, clearing browser cache, and using a different device, but the issue still persists, preventing access to their dashboard and services.",
                        </p>
                    </div>
                    {/* ----------------- */}
                    <div className='grid grid-cols-2'>
                        {/* Company */}
                        <div className='space-y-3'>
                            <h1 className='text-xl text-gray-200 font-bold'>Company</h1>
                            <ul className='text-gray-400'>
                                <li className='hover:text-gray-50'><a href="#">About Us</a></li>
                                <li className='hover:text-gray-50'><a href="#">Our Mission</a></li>
                                <li className='hover:text-gray-50'><a href="#">Contact Sale</a></li>
                            </ul>
                        </div>
                        {/* service */}
                        <div className='space-y-3'>
                            <h1 className='text-xl text-gray-200 font-bold'>Services</h1>
                            <ul className='text-gray-400'>
                                <li className='hover:text-gray-50'><a href="#">Product & Services</a></li>
                                <li className='hover:text-gray-50'><a href="#">Customer Stories</a></li>
                                <li className='hover:text-gray-50'><a href="#">Download App</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* ----- */}
                    <div className='grid grid-cols-2'>
                        {/* information */}
                        <div className='space-y-3'>
                            <h1 className='text-xl text-gray-200 font-bold'>Information</h1>
                            <ul className='text-gray-400'>
                                <li className='hover:text-gray-50'><a href="#">Privacy & Policy</a></li>
                                <li className='hover:text-gray-50'><a href="#">Terms & Conditions</a></li>
                                <li className='hover:text-gray-50'><a href="#"> Join Us</a></li>
                            </ul>
                        </div>
                        {/* social link */}
                        <div className='space-y-3'>
                            <h1 className='text-xl text-gray-200 font-bold'>Social Links</h1>
                            <ul className='text-gray-400 space-y-3'>
                                {/* twitter */}
                                <li className='hover:text-gray-50'><a href="#" className='flex gap-2 items-center'><FaXTwitter className='w-6 h-6 text-lg rounded-full bg-gray-500 text-black hover:bg-gray-200' />@CS-Ticket System</a></li>
                                {/* facebook */}
                                <li className='hover:text-gray-50'><a href="#" className='flex gap-2 items-center'><FaFacebookF className='w-6 h-6 text-lg rounded-full bg-gray-500 text-black hover:bg-gray-200' />@CS-Ticket System</a></li>
                                {/* LinkdIn */}
                                <li className='hover:text-gray-50'><a href="#" className='flex gap-2 items-center'><FaLinkedin className='w-6 h-6 text-lg rounded-full bg-gray-500 text-black hover:bg-gray-200' />@CS-Ticket System</a></li>
                                {/* gmail */}
                                <li className='hover:text-gray-50'><a href="#" className='flex gap-2 items-center'><CgMail className='w-6 h-6 text-lg rounded-full bg-gray-500 text-black hover:bg-gray-200' />@ support@cst.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='flex items-center justify-center py-4 text-xs lg:text-lg'><FaRegCopyright /> {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;