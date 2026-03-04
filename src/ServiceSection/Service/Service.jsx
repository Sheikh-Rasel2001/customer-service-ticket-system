import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';

const Service = ({service}) => {
    const {title, description, customer, priority, status, createdAt, ticketCode} = service
    return (
        <div>
        <div className='rounded-xl px-4 py-3 space-y-2 bg-white shadow-md h-28'>
            <div className='flex justify-between items-center '>
                <h1 className='text-lg font-semibold'>{title}</h1>
                <button className={`
                    ${
                        status === 'Open' ? 'bg-green-300 text-green-800' :
                        status === 'In Progress' ? 'bg-amber-200 text-amber-600' :
                        'bg-gray-300 text-gray-600'
                    }
                    rounded-2xl px-2 py-1 flex items-center text-sm font-semibold`}><GoDotFill className='text-2xl'/>{status}</button>
            </div>
            <p title={description} className='block w-64 cursor-pointer truncate'>{description}</p>
            <div className='flex justify-between items-center text-sm font-semibold'>
                <div className='flex gap-2'>
                    <span className='text-sm text-gray-600'>{ticketCode}</span>

                    <span className={`${
                        priority === 'High priority' ? 'text-red-500' 
                        : priority === 'Medium priority' ? 'text-yellow-500'
                        : 'text-green-500'
                    }`}>{priority}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='text-blue-800'>{customer}</p>
                    <span className='flex items-center gap-1'><CiCalendar className='text-xl font-bold'/>{createdAt}</span>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Service;