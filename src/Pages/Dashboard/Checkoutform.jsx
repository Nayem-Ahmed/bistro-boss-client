import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useTanstrackQuery from '../../Hooks/useTanstrackQuery';
import { AuthContext } from '../../Providers/Authproviders';

const Checkoutform = () => {
    const [error, setError] = useState()
    const [clientSecret, setClientSecret] = useState('')
    const { user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [transactionId, setTransactionId] = useState('');
    const [cart] = useTanstrackQuery()
    const pricetotal = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (pricetotal > 0) {

            axiosSecure.post('/create-payment-intent', { price: pricetotal })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }


    }, [axiosSecure, pricetotal]);



    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log(' ', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: pricetotal,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    cartIds: cart.map(item => item._id),
                    status: 'pending'
                }
                // const res = await axiosSecure.post('/payments', payment);
                // console.log('payment saved', res.data);
                
            }

        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn mt-5 bg-cyan-600' type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className='text-red-500'>{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default Checkoutform;