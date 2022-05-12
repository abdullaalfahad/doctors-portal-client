import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';

const Appointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center '>
            <div className='flex-1'>
                <img className='mt-[-100px] w-full h-full hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='lg:mr-20 flex-auto lg:flex-1 p-8 lg:p-0'>
                <h4 className='text-xl text-secondary font-bold'>Appointment</h4>
                <h3 className='text-xl lg:text-4xl text-white mb-5'>Make an appointment Today</h3>
                <p className='text-white mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default Appointment;