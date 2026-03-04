import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';

const Service = ({service, handleSelectTickets}) => {
    const {title, description, customer, priority, status, createdAt, ticketCode} = service
    return (
        <div>
        <div onClick={() => handleSelectTickets(service)} className='rounded-xl px-2 py-3 space-y-2 bg-white shadow-md h-32 cursor-pointer'>
            <div className='flex justify-between items-center '>
                <h1 className='lg:text-lg text-sm font-semibold'>{title}</h1>
                <button className={`
                    ${
                        status === 'Open' ? 'bg-green-300 text-green-800' :
                        status === 'In Progress' ? 'bg-amber-200 text-amber-600' :
                        'bg-gray-300 text-gray-600'
                    }
                    rounded-2xl px-2 py-1 flex items-center text-sm font-semibold`}><GoDotFill className='text-2xl'/>{status}</button>
            </div>
            <p title={description} className='lg:text-lg text-sm block w-64 cursor-pointer truncate'>{description}</p>
            <div className='flex justify-between items-center font-semibold'>
                <div className='flex gap-1 lg:gap-2 items-center'>
                    <span className=' text-gray-600 text-xs lg:text-sm'>{ticketCode}</span>

                    <span className={`${
                        priority === 'High priority' ? 'text-red-500 text-xs lg:text-sm' 
                        : priority === 'Medium priority' ? 'text-yellow-500 text-xs lg:text-sm'
                        : 'text-green-500 text-xs lg:text-sm'
                    }`}>{priority}</span>
                </div>
                <div className='flex gap-1 lg:gap-2 items-center'>
                    <p className='text-blue-800 text-xs lg:text-sm'>{customer}</p>
                    <span className='flex items-center'><CiCalendar className='text-xl font-bold'/>{createdAt}</span>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Service;