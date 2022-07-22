import React from 'react';
import './Navbar.css'
import logoImage from "./../img/locale_logo.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
    <Link to="/">
      <img className="navbar-logo" src={logoImage}/>
    </Link> 
    
      <div
      className='navbar-search'>
        <SearchIcon className="navbar-searchIcon" />
        <input className='navbar-search-input' type='text' />
        
      </div>  
      <div className="navbar-nav">
        <div className='navbar-option'>
          <p>sign in</p>
        </div>

        <div className='navbar-option'>
          <p>cart</p> 
        </div>

        <Link to="/checkout">
          <div className='navbar-basket'>
            <ShoppingCartCheckoutIcon />
            <span className='navbar-option-line-two'></span>
          </div>
        </Link>
      </div>
    </div>
  )
}

  export default Navbar