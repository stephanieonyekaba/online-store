import React from 'react'
import './Product.css'

function Product({company, title, price, image, rating}) {
  return (
    <div className='product'>
        <div className="product__info">
            <p>{company} </p>
            <p>{title}</p>
            <p className='product__price'> 
                <small>$</small>  
                <strong>{price}</strong>
            </p>
        <div className="product__rating">
            {Array(rating).fill().map((_, i) => (
                <p>★</p>
            ))}
 
        </div>
        </div>
        <img src={image} alt="" />
        <button><span class="txt">Add to Bag</span></button>
      
    </div>
  )
}

export default Product