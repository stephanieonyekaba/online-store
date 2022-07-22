import React from 'react'
import './Home.css'
import Product from './Product'
import Banner from './Banner'
import Footer from './Footer'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Home() {
  return (
    <div className='home'>
    <div className="home__container">
      <img className='home_image' 
      src="https://i.ibb.co/Vw33VSk/igor-rand-3-J4-Hyv-V9bw-Y-unsplash-2.jpg " 
   />
       <h1 className='home_image_text'>Beauty Starts Here 
       </h1>

   

<div className="home__row">

<Banner 
id="11"
  description="MULTI-BRAND"
  title="Buy one, get one free minis"
  image="https://i.ibb.co/n1rb5Fb/ashley-piszek-UIEQFKM3y50-unsplash.jpg"
/>


<Banner 
id="11"
  description="MATRIX"
  title="Up to 50% off jumbos
  "
  image="https://i.ibb.co/dbGjVrS/ashley-piszek-3i-Sp-G-NHs-Ls-unsplash.jpg"
/>


  </div>

{/* THIS I SOUR SECOND ROW */}
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

  <Product 
      id="3"
      company='tarte'
      title='Tartelette™ In Bloom Clay Eyeshadow Palette' 
      price= {55.00} 
      image="https://i.ibb.co/4Wr4D72/Screen-Shot-2022-07-19-at-2-29-12-PM.png "
      rating={5}/>
      </div>







    {/* THIS IS OUR 3RD ROW */}
    <div className="home__row">
    <Product 
    id="3"
    company='Josie Maran'
    title='Argan Moonstone Glow Highlighting Stick' 
    price= {32.99} 
    image="https://i.ibb.co/6WBRMKN/Screen-Shot-2022-07-19-at-2-46-14-PM.png  "
    rating={3}/>

<Product 
    id="3"
    company='MAKE UP FOR EVER'
    title='HD Skin Undetectable Longwear Foundation' 
    price= {55.00} 
    image="https://i.ibb.co/vsbvXgN/Screen-Shot-2022-07-19-at-2-43-22-PM.png "
    rating={5}/>

<Product 
    id="3"
    company='Charlotte Tilbury'
    title='Eyes To Mesmerize Cream Eyeshadow' 
    price= {29.99} 
    image="https://i.ibb.co/w70pR8V/Screen-Shot-2022-07-19-at-2-38-54-PM.png "
    rating={5}/>



    











</div>

<div className="home__row">

<Banner 
  image="https://i.ibb.co/5jZjmQ6/Screen-Shot-2022-07-21-at-6-28-57-PM.png"
  />


  <Banner 
      image=" https://i.ibb.co/gF24yz7/Screen-Shot-2022-07-21-at-6-29-33-PM.png"
      />

      </div>
    </div>
    <Footer 
      id='22'
      image="https://i.ibb.co/tZTTMP4/gradienta-gw-E9v-XSi7-Xw-unsplash.jpg "
      />

    <div className='footer_image_text'>
          <div className='footer_h1'> <h1>#BRAND BEAUTY</h1> </div>

    <div className="footer_text">
    <p>
      <strong>ABOUT</strong>
      <li>
        About Us
          </li>
          <li>
          Brand Rewards
          </li>
          <li>
          Privacy Policy
          </li>
    </p>

    <p>
      <strong>SUPPORT + FAQ</strong>
          <li>
            Contact Us
          </li>
          <li>
          Shipping & Returns
          </li>
          <li>
          FAQs
          </li>
    </p>
    <p>
      <strong>JOIN OUR COMMUNITY!</strong>
          <li>
          Receive 15% off your first order!
          </li>
          <li>
            Join #Brand
          </li>
          <li>
            Sign Up for Our Newsletter
          </li>
    </p>
  </div>

  
    </div>
    <div className="footer_icon_text">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <YouTubeIcon />
        </div>








    </div>




  )
}

export default Home





