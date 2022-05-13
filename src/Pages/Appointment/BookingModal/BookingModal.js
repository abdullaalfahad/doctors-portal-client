import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;
    const handleSubmit = event => {
        event.preventDefault();
        const fullName = event.target.fullName.value;
        setTreatment(null);

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-2xl text-secondary mb-4">{name}</h3>
                    <form onSubmit={handleSubmit}>
                        <input name='date' type="text" value={format(date, 'PP')} class="input input-bordered w-full mb-2" readOnly />
                        <select name='slot' class="select select-bordered w-full mb-2">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='fullName' type="text" placeholder="Full Name" class="input input-bordered w-full mb-2" />
                        <input name='number' type="number" placeholder="Phone Number" class="input input-bordered w-full mb-2" />
                        <input name='email' type="email" placeholder="Email" class="input input-bordered w-full mb-2" />
                        <input type="submit" value="Submit" className='btn btn-secondary text-white' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;