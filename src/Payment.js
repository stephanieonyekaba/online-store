import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
const [{basket, user}, dispatch] = useStateValue();


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
                </div>
            </div>


        </div>
    </div>
  )
}

export default Payment