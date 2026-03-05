import React from 'react';
import './banner.css'

const Banner = ({selectTickets, complete}) => {
    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:px-6 lg:px-0 px-6 mb-8'>
                {/* progress card */}
                <div className='rounded-xl py-12 progress-card'>
                    <h1 className='text-2xl font-bold text-center mb-3'>In-Progress</h1>
                    <h2 className='text-4xl font-bold text-center'>{selectTickets.length}</h2>
                </div>
                {/* resolved card */}
                <div className='rounded-xl py-12 resolved-card'>
                    <h1 className='text-2xl font-bold text-center mb-3'>Resolved</h1>
                    <h2 className='text-4xl font-bold text-center'>{complete.length}</h2>
                </div>
            </div>

        </div>
    );
};

export default Banner;