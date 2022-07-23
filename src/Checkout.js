import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img className = "checkout__ad"  src=" https://i.ibb.co/Ksfpfqz/Screen-Shot-2022-07-22-at-7-26-59-PM.png" alt="" />
        <div>
            <h2 className="checkout__title">
                Your Shopping Basket 
            </h2>
            {/* basket item */}
            {/* basket item */}
            {/* basket item */}
            {/* basket item */}
            {/* basket item */}
            {/* basket item */}
        </div>
    </div>

    <div className="checkout__right">
        <Subtotal />
        <h2>the subtotal is </h2>
    </div>





    </div>
  )
}

export default Checkout
