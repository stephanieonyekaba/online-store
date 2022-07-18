import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className="product__info">
            <p>Fenty Beauty by Rihanna </p>
            <p>Gloss Bomb Universal Lip Luminizer</p>
            <p className='product__price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>
        <div className="product__rating">
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
        </div>
        </div>
        <img src="https://i.ibb.co/9ZCqdHK/Screen-Shot-2022-07-18-at-1-48-35-AM.png" />
        <button>Add to Bag</button>
    </div>
  )
}

export default Product