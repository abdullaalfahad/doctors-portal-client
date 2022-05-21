import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1vJzFmLMx6FYCyJpODU7S4VPQl4qpxH1GGJLdagNsoSdoxk9uAsmc3xQ3Va7uIS7c4Y3H1FEptpQr04pTuhBXq00yKCLkpC6');

const Payment = () => {
    const { id } = useParams();

    const { data: appointment, isLoading, refetch } = useQuery(['book', id], () => fetch(`http://localhost:5000/booking/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='ml-16 my-8'>
            <div class="card w-50 max-w-md shadow-2xl bg-base-100 mb-5">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello {appointment?.patientName}, </p>
                    <h2 class="card-title">Please pay for {appointment?.treatment}</h2>
                    <p>Your appointment on {appointment?.date} at {appointment?.slot}</p>
                    <div class="card-actions justify-end">
                        <p>Pay: ${appointment?.price}</p>
                    </div>
                </div>
            </div>
            <div class="card w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;