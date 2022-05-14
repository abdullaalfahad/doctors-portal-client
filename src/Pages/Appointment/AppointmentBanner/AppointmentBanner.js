import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse justify-center px-0">
                <img src={chair} className="lg:max-w-lg shadow-2xl w-full object-cover" />
                <div className='mt-5 lg:mt-0 mr-0 lg:mr-32'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;