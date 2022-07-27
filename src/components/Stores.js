import React from 'react';
import storeHomeImage from "./../img/portland-night.jpg";
import Store from './Store'
import './Stores.css';
import './Product.css';
import storeHeader from "./../img/cat-header-img.png";
import Slideshow from './Slideshow';
import storeBottomImage from "./../img/locale-guy.png";
import logoText from "./../img/locale_logo_text.png";


function Stores() {

  const storeData =[]

  return (
    <div className='store-home'>
      <div className='store-home-container'>
        
        <img className='home-image' src={storeHomeImage}/>
        
        <div className='store-home-row1'>
      

        </div>
        <div className='cat-img'>
        <img className='head-image' src={storeHeader}/>
        </div>
        
        <div className='store-home-row'>

        </div>
        <div className='shop'>
          <p className='flavor-text-title'>S H O P</p>
        </div>
        <div className='cat-header'><img className='logo-text-head' src={logoText}/></div>
        <div className='home-banner-top'></div>
        <div className='home-banner-bottom'></div>

        <div className='store-home-row'>  
        
          <Slideshow />
      
        </div>
        <br/>
        <div className='home-banner-top'></div>
        <div className='home-banner-bottom'></div>


        <div className='store-home-row'>
        <img className='bottom-image' src={storeBottomImage}/>
        <p className='flavor-text'>Locally owned businesses provide many economic benefits to our community. Local businesses are owned by people who live in our community, they are less likely to leave, and are more invested in our community's future.  <img className='logo-text' src={logoText}/> is proud to offer local products delivered by local couriers.<br/>
        Directly from the businesses to your doorstep. </p>
      
        </div>

        
        <div className='home-banner-bottom'></div>

      </div>
    </div>
  )
}

export default Stores