import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { SportsBasketballTwoTone } from '@mui/icons-material';
import { auth } from './firebase'


function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }






  return (
    <div className='header'>
      <Link to="/"> 
        <img className="header__logo" src="https://i.ibb.co/phvwmjM/Screen-Shot-2022-07-15-at-6-42-12-PM.png" />
      </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" /> 
        </div>

        <div className="header__nav">
          <Link to={!user && '/login'}> 
            <div onClick={handleAuthentication} className="header__option">
              <span className='header__optionLineOne'>{user ? 'SIGN OUT' : 'SIGN IN' }</span>
            </div>
          </Link>

            <div className="header__option">
              <span className='header__optionLineOne'> RETURNS </span>
            </div>

              <Link to={'/orders'}> 
            <div className="header__option">
              <span className='header__optionLineOne'> ORDERS</span>
            </div>
              </Link> 

            <div className="header__option">
              <span className='header__optionLineOne'> PRIME</span>
            </div>

            <Link to="/checkout">
            <div className="header__optionBasket"> 
              <ShoppingBasketIcon />
                <span className='header__option header__basketCount'> {basket?.length}</span>
            </div>
            </Link>
        </div>
 

    </div>
  )
}


export default Header