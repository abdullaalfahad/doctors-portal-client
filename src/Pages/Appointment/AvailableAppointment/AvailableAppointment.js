import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='px-4 md:px-12 mt-12 lg:mt-0 pb-16 md:pb-20 lg:pb-28'>
            <h1 className='text-secondary text-center text-xl'>Available appointment on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;