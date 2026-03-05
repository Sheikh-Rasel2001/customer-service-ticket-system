import React from 'react';

const Resolve = ({complete}) => {
    return (
        <div>
             {/* resolved task */}
            <div>
                <h1 className='text-2xl font-bold text-gray-700 mb-6'>Resolved Task</h1>
                {
                    complete && complete.length > 0 ? 
                    (complete.map(done => 
                        <h1 key={done.id} className='px-3 py-2 bg-blue-300 text-blue-950 font-bold rounded-2xl mb-4'>{done.title}</h1>
                    )): (<p className='text-gray-500'>No Resolve Tasks Yet</p>)
                }
            </div>
        </div>
    );
};

export default Resolve;