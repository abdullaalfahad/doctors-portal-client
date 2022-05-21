import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots, price } = treatment;
    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const formattedDate = format(date, 'PP');

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            price,
            slot,
            patientEmail: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('https://fierce-anchorage-70163.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    refetch();
                    toast(`Appointment booking on ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
            })

        // to close the modal
        setTreatment(null);

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl text-secondary mb-4">{name}</h3>
                    <form onSubmit={handleSubmit}>
                        <input name='date' type="text" value={format(date, 'PP')} className="input input-bordered w-full mb-2" readOnly />
                        <select name='slot' className="select select-bordered w-full mb-2">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='fullName' type="text" value={user.displayName} className="input input-bordered w-full mb-2" readOnly />
                        <input name='email' type="email" value={user.email} className="input input-bordered w-full mb-2" readOnly />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full mb-2" />
                        <input type="submit" value="Submit" className='btn btn-secondary text-white' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;