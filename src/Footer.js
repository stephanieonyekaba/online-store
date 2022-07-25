import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
  return (
<div className='footer'>
<img className='footer_image' src="https://i.ibb.co/tZTTMP4/gradienta-gw-E9v-XSi7-Xw-unsplash.jpg" alt="" />

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

export default Footer