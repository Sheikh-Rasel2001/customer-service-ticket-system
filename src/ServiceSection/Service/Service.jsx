import React from 'react';

const Service = ({service}) => {
    const {title, description, customer, priority, status, createdAt, ticketCode} = service
    return (
        <div>
        <div className='rounded-xl px-4 py-2 space-y-2 bg-white shadow-md'>
            <div className='flex justify-between items-center '>
                <h1>{title}</h1>
                <button className='bg-green-400 rounded-xl px-2 py-1 '>{status}</button>
            </div>
            <p className='text-xs'>{description}</p>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                    <span>{ticketCode}</span>
                    <span>{priority}</span>
                </div>
                <div className='flex gap-4'>
                    <p>{customer}</p>
                    <span>{createdAt}</span>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Service;