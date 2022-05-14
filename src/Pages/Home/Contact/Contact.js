import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="flex justify-center items-center py-16 md:py-20 lg:py-28 px-4">
            <div className='text-center'>
                <h4 className='text-xl text-secondary font-bold'>Contact Us</h4>
                <h3 className='text-xl lg:text-4xl text-white'>Stay connected with us</h3>
                <form className='mt-8 lg:mt-12'>
                    <input type="email" placeholder="Email Address" className="input input-bordered w-full mb-4" />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full mb-4" />
                    <textarea className="textarea w-full mb-4" placeholder="Message" rows={3}></textarea>
                    <div><button className='btn btn-secondary text-white px-5'>Submit</button></div>
                </form>
            </div>
        </section>
    );
};

export default Contact;