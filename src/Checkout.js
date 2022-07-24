import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
const [{basket}, dispatch] = useStateValue()

  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img className = "checkout__ad"  src=" https://i.ibb.co/Ksfpfqz/Screen-Shot-2022-07-22-at-7-26-59-PM.png" alt="" />
        <div>
            <h2 className="checkout__title">
                Your Shopping Basket 
            </h2>
            {basket.map(item => (
                <CheckoutProduct 
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                
                />))}
            {/* checkout item */}
            {/* checkout item */}
        
            

        </div>
    </div>

    <div className="checkout__right">
        <Subtotal />
    </div>





    </div>
  )
}

export default Checkout
