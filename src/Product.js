import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({company, title, price, image, rating, id}) {

const [{basket}, dispatch] = useStateValue();
console.log("THIS DA BASKET", basket)
const addToBasket = () => {
    //we are dispatching the item into our data layer 
    //type referst to the action we want to do 
    //item refers to the proerties of the item we wish to dispatch. these properties 
    //were passed down aove in our Product function as props 
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            image: image, 
            price: price,
            rating: rating
        }
    })
}





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
        <button onClick={addToBasket}><span class="txt">ADD TO BAG</span></button>
      
    </div>
  )
}

export default Product