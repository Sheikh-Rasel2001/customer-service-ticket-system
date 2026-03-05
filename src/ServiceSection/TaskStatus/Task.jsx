import React from 'react';
import Resolve from '../ResolvedItems/Resolve';


const Task = ({ selectTickets, handleComplete, complete}) => {
    return (
        <div>
            {/* task status */}
            <div className='mb-6'>
                <h1 className='text-2xl font-bold text-gray-700'>Task Status</h1>
                {
                    selectTickets && selectTickets.length > 0 ? (
                        selectTickets.map(ticket =>
                            <div key={ticket.id} className='px-2 py-4 bg- w-full rounded-2xl shadow-lg'>
                                <h2 className='text-xl text-gray-900 font-bold mb-4'>{ticket.title}</h2>
                                <button onClick={() => 
                                    handleComplete(ticket.id)
                                    
                                    } className='btn bg-green-600 text-gray-50 w-full'>Complete</button>
                            </div>
                        )
                    ) : (<p className='text-gray-500'>Select a ticket add to Task Status</p>)
                }

            </div>
            {/* resolved items */}
            <div>
                <Resolve complete={complete}></Resolve>
            </div>
           
        </div>
    );
};

export default Task;