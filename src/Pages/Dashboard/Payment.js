import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    return (
        <div>
            <h1 className='lg:text-3xl underline my-5'>Your appointment id: {id}</h1>
        </div>
    );
};

export default Payment;