import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
    <div className="home__container">
      <img className='home_image' 
      src="https://i.ibb.co/Vw33VSk/igor-rand-3-J4-Hyv-V9bw-Y-unsplash-2.jpg " 
   />
       <h1 className='home_image_text'>Beauty Starts Here </h1>

    <div className="home__row">
    <Product />
    <Product />
      {/* product */}
    </div>
    <div className="home__row">
      {/* product */}
      {/* product */}
      {/* product */}
    </div>


    </div>




    </div>
  
  )
}

export default Home


