import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card bg-base-100 shadow-xl text-center">
            <div class="card-body text-center">
                <h2 class="card-title justify-center">{name}</h2>
                <p>{slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>No slots available today</span>}</p>
                <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-secondary text-white mt-2">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;