import React from 'react';
import './Navbar.css'
import logoImage from "./../img/locale_logo.png";

function Navbar() {
  return (
    <div className='navbar'>
    
      <img className="Navbar-logo" src={logoImage}/>
      
    
      <div
      className='navbar-search'>
    
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