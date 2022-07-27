import React from 'react';
import storeHomeImage from "./../img/portland-night.jpg";
import Store from './Store'
import './Stores.css';
import './Product.css';
import storeHeader from "./../img/cat-header-img.png";
import Slideshow from './Slideshow';


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

        <div className='cat-header'>Shop Local<span className='font2'>E</span></div>
        <div className='home-banner-top'></div>
        <div className='home-banner-bottom'></div>

        <div className='store-home-row'>  
        
          <Slideshow />
      
        </div>

        <div className='home-banner-top'></div>
        <div className='home-banner-bottom'></div>


        <div className='store-home-row'>
        <Store
          id={1}
          name="Test Store"
          category="Plant Store"
          location="123 test AV."
          image='http://d1ih9tlfsfrtid.cloudfront.net/J2gmSW7eRA2ZX7SowN6X_9PJ-Storefront-04575dd6_lemon_one_10.jpg'
          /> 
            <Store
          id={1}
          name="Test Store"
          category="Plant Store"
          location="123 test AV."
          image='http://d1ih9tlfsfrtid.cloudfront.net/J2gmSW7eRA2ZX7SowN6X_9PJ-Storefront-04575dd6_lemon_one_10.jpg'
          
          /> 
            <Store
          id={1}
          name="Test Store"
          category="Plant Store"
          location="123 test AV."
          image='http://d1ih9tlfsfrtid.cloudfront.net/J2gmSW7eRA2ZX7SowN6X_9PJ-Storefront-04575dd6_lemon_one_10.jpg'
          
          /> 
            <Store
          id={1}
          name="Test Store"
          category="Plant Store"
          location="123 test AV."
          image='http://d1ih9tlfsfrtid.cloudfront.net/J2gmSW7eRA2ZX7SowN6X_9PJ-Storefront-04575dd6_lemon_one_10.jpg'
          
          /> 
        </div>

        
        <div className='home-banner-bottom'></div>

      </div>
    </div>
  )
}

export default Stores