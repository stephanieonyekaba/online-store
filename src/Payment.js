import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { useElements } from '@stripe/react-stripe-js';
import { CardElement, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';

function Payment() {
const [{basket, user}, dispatch] = useStateValue();
const stripe = useStripe()
const elements = useElements()

const [error, setError] = useState(null)
const [disabled, setDisabled] = useState(true)

const handleSubmit = e => {
console.log("hi")
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

                        </div>
                    </form>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Payment