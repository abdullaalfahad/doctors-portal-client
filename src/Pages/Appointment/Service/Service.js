import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card bg-base-100 shadow-xl text-center">
            <div className="card-body text-center">
                <h2 className="text-secondary text-xl font-bold">{name}</h2>
                <p>{slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>No slots available today</span>}</p>
                <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-secondary text-white mt-2 btn-sm" onClick={() => setTreatment(service)}>Book Appointment</label>
                </div>

            </div>
        </div>
    );
};

export default Service;