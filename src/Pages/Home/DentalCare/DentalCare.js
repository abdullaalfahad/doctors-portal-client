import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const DentalCare = () => {
    return (
        <div class="hero min-h-screen px-4 md:px-8 lg:px-28 mb-12 md:mb-16 lg:mb-44">
            <div class="hero-content flex-col md:flex-row px-0">
                <img src={treatment} class="max-w-sm rounded-lg shadow-2xl w-full object-cover" />
                <div className='lg:mx-12 mt-5 md:mt-0'>
                    <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;