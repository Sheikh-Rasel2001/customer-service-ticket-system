import React from 'react';

const Task = () => {
    return (
        <div>
            {/* task status */}
            <div className='mb-6'>
                <h1 className='text-2xl font-bold text-gray-700'>Task Status</h1>
                <p className='text-gray-500'>Select a ticket add to Task Status</p>
                <div className='px-2 py-4 bg- w-full rounded-2xl shadow-lg'>
                    <h2 className='text-xl text-gray-900 font-bold mb-4'>Unable to Download Invoice</h2>
                    <button className='btn bg-green-600 text-gray-50 w-full'>Complete</button>
                </div>
            </div>
            {/* resolved task */}
            <div>
                <h1 className='text-2xl font-bold text-gray-700'>Resolved Task</h1>
                <p className='text-gray-500'>No resolved task yet</p>
            </div>
        </div>
    );
};

export default Task;