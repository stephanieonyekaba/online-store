import React, { useEffect } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, Navigate } from 'react-router-dom';
import { useElements } from '@stripe/react-stripe-js';
import { CardElement, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from "react-router-dom";
import axios from './axios';
import { db } from './firebase';

function Payment() {
const [{basket, user}, dispatch] = useStateValue();
const stripe = useStripe()
const elements = useElements()

const [error, setError] = useState(null)
const [disabled, setDisabled] = useState(true)
const [clientSecret, setClientSecret] = useState(true)

const navigate = useNavigate();

useEffect(() => {
    //we use this function to generate the stripe secret code that allows us to charge the customer 
    //but we also need it to update depending on how much we are actually charging the customer 
    const getClientSecret = async () => {
        //axios allows us to make api calls to our backend 
        const response = await axios ({
            method: 'post',
            //stripes expect the total in a currency'ssubunit (ex dollars should be cents)
            //this is why we multiply by 100 to overcome this 
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }

getClientSecret(); 

}, [basket])

console.log('THE SECRET IS >>>>>>', clientSecret)
console.log("THIS IS THE USERRRR", user)

const [succeeded, setSucceeded] = useState(false)
const [processing, setProcessing] = useState("")

const handleSubmit = async (e) => {
    e.preventDefault();
    //this makes it so that when you hit the submit payment button it prevents 
    //you from clicking it again 
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, 
    {payment_method: {
        card: elements.getElement(CardElement)
        }
    }).then(({paymentIntent}) => {
            //the payment intent is just the confimration after stripe processes the payment 

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
                
            


            setSucceeded(true);
            setError(null);
            setProcessing(false)

            navigate('/orders')
            dispatch({
                type: 'EMPTY_BASKET', 
            })
    })
}

const handleChange = e => {
    //we are going to listen for changes in the card element 
    //and display any errors as the customer types their card details 
    setDisabled(e.empty);
    //this line of code means: if the event is empy, disable the button
    //else if there is an error, show the error
    //otherwise show nothing 
    setError(e.error ? e.error.message : "");
}



  return (
    <div className='payment'>
        <div className="payment__container">
            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} item</Link>
                ) 
            </h1>

            {/* delivery address  */}
            <div className="payment__section">
                <div className="payment__title">
               <h2>Please Review Your Order </h2>
                </div>
             
                <div className="payment__address">
                <h3>Delivery address </h3>
                    <p>{user ?.email}</p>
                    <p>
                        3401 N Miami Ave 
                    </p>
                    <p>
                        Miami, FL 33127
                     </p>
                </div>
            </div>


            {/* review items */}
            <div className="payment__section">
            <div className="payment__title">
                    <h3>Review Your Items and Delivery </h3>
                </div>
                <div className="payment__item">
                    {basket.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            {/* payment method  */}
            <div className="payment__title">
                <div className="payment__method">
                        <h3>Payment method</h3>
                </div>
                <div className="payment__details">
                    {/* STRIPE LOGIC IS HERE */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment__priceContainer'>
                        <CurrencyFormat
                                renderText={(value) => (
                                <h3>Order Total : {value}</h3>    

                                )}
                                decimalScale={2}
                                value= { getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button className="buy__button" disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"} </span>
                            </button>
                        </div>
                        {/* error handling  */}

                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Payment