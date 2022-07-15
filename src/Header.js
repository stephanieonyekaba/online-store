import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
        <img className="header__logo" src="https://i.ibb.co/phvwmjM/Screen-Shot-2022-07-15-at-6-42-12-PM.png" />
      
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" /> 
        </div>

        <div className="header__nav">

            <div className="header__option">
              <span className='header__optionLineOne'> SIGN IN</span>
            </div>

            <div className="header__option">
              <span className='header__optionLineOne'> RETURNS </span>
            </div>

            <div className="header__option">
              <span className='header__optionLineOne'> ORDERS</span>
            </div>

            <div className="header__option">
              <span className='header__optionLineOne'> PRIME</span>
            </div>
        </div>
 

    </div>
  )
}

export default Header