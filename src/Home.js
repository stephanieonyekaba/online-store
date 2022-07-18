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
  <Product 
    id="1"
    company='Fenty Beauty by Rihanna'
    title='Gloss Bomb Universal Lip Luminize' 
    price= {19.99} 
    image="https://i.ibb.co/9ZCqdHK/Screen-Shot-2022-07-18-at-1-48-35-AM.png"
    rating={5}/>


  <Product 
    id="2"
    company='NARS'
    title='Liquid Blush' 
    price= {39.00} 
    image="https://i.ibb.co/pyqfbzK/Screen-Shot-2022-07-18-at-1-47-07-AM.png"
    rating={4}/>


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






