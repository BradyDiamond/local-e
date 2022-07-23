import React from 'react';
import './Navbar.css'
import logoImage from "./../img/locale_logo.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase"

function Navbar() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
     
    }
  }
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
      <Link to={!user && "/login"}>
        <div onClick={handleAuthentication} className='navbar-option'>
          <span className='navbar-option-line-one'>Hello {!user? 'Guest' : user.email}
          </span>
          
          <span className='navbar-option-line-two'>{user ? 'Sign Out' : 'Sign-in'}</span>
        </div>
        </Link>

        <div className='navbar-option'>
          <span className='navbar-option-line-one'>Reciepts</span>
          <span className='navbar-option-line-two'>& Deliveries</span>
        </div>

        <Link to="/checkout">
          <div className='navbar-basket'>
            <ShoppingCartCheckoutIcon />
            <span className='navbar-option-line-two'>{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
    
  )
}

  export default Navbar