import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import Review from '../Review/Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'Califonia',
            say: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'Califonia',
            say: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id: 3,
            name: 'Winson Herry',
            location: 'Califonia',
            say: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        }
    ]
    return (
        <div className='my-16 md:my-20 lg:my-28 px-4 md:px-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-secondary font-bold'>Testimonial</h4>
                    <h3 className='text-4xl'>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 lg:px-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;