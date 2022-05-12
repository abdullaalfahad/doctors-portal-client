import React from 'react';
import Appointment from './MakeAppointment/MakeAppointment';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import DentalCare from './DentalCare/DentalCare';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;