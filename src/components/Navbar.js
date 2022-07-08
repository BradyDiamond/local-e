import React from 'react';
import './Navbar.css'
import logoImage from "./../img/locale_logo.png";
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className='navbar'>
    
      <img className="navbar-logo" src={logoImage}/>
      
    
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

        <div className='navbar-option'>
          <p>stores</p>
        </div>
      </div>
    </div>
  )
}

  export default Navbar