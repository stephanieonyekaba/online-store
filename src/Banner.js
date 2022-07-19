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

        <button><span class="txt__banner">Shop Now</span></button>
      
    </div>

  )
}


export default Banner







{/* <a href="https://ibb.co/T0ckFsk"><img src="      " alt="ashley-piszek-UIEQFKM3y50-unsplash" border="0"></a>
<a href="https://ibb.co/SQR5MP2"><img src="       " alt="ashley-piszek-3i-Sp-G-NHs-Ls-unsplash" border="0"></a>
<a href="https://ibb.co/g7mcLxC"><img src="   


   " alt="ashley-piszek-2avq-IBH252-Y-unsplash" border="0"></a> */}