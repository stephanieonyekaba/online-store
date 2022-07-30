import React from 'react'
import './Banner.css'

function Banner({description, title, image}) {
  return (
    <div className='banner'>
        <img src={image} alt="" />
        <div className="banner_info">
            <p className='banner__title'> 
            <p className="description__text">{description}</p>
                <strong>{title}</strong>
            </p>
            </div>

        <button className='banner__button'><span class="txt__banner">Shop Now</span></button>
      
    </div>

  )
}


export default Banner






