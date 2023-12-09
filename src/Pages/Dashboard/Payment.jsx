import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Checkoutform from './Checkoutform';



const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = () => {
    return (
        <div>
            <h1 className='text-center text-3xl'>PAYMENT</h1>
            <Elements stripe={stripePromise}>
                <Checkoutform></Checkoutform>           
            </Elements>
        </div>
    );
};

export default Payment;