import React from 'react';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import DentalCare from './DentalCare/DentalCare';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;