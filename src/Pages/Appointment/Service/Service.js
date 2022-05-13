import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div class="card bg-base-100 shadow-xl text-center">
            <div class="card-body text-center">
                <h2 class="card-title justify-center">{name}</h2>
                <p>{slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>No slots available today</span>}</p>
                <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <label disabled={slots.length === 0} for="booking-modal" class="btn btn-secondary text-white mt-2" onClick={() => setTreatment(service)}>Book Appointment</label>
                </div>

            </div>
        </div>
    );
};

export default Service;