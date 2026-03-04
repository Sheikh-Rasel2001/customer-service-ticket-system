import React, { Suspense, use } from 'react';
import Service from '../Service/Service';

const Services = ({servicesPromise}) => {
    const services = use(servicesPromise);
    // console.log(services);
    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <h1 className='px-5 lg:px-0 md:px-5 text-2xl font-bold text-gray-900 mb-4'>Customer Tickets </h1>
            <div className='flex gap-4 flex-col-reverse lg:grid lg:grid-cols-3 px-5 lg:px-0 md:px-5'>
                {/* service single card */}
                <div className='col-span-2'>
                <div className='grid grid-cols-1 lg:grid lg:grid-cols-2 gap-6 '>
                    <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                        {
                            services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </Suspense>
                </div>
                </div>
                {/* status check section */}
                <div className='border h-64'>

                </div>
            </div>
        </div>
    );
};

export default Services;