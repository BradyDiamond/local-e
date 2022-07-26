import React from 'react';
import storeHomeImage from "./../img/portland-night.jpg";
import Store from './Store'
import './Stores.css';
import './Product.css';
import storeHeader from "./../img/cat-header-img.png";


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
        
      
          
        <Store
          id={11}
          name="Hello From Portland"
          category="Plant Store"
          location="120 NW 10th Ave
          Portland, OR 97209"
          image='https://s3-media0.fl.yelpcdn.com/bphoto/KX1yhBjTC5J_5RyV0o6S7Q/348s.jpg'
          /> 
            <Store
          id={12}
          name="MadeHere PDX"
          category="Plant Store"
          location="40 NW 10th Ave
          Portland, OR 97209"
          image='https://s3-media0.fl.yelpcdn.com/bphoto/4bP-VnUbHDtExMt9wNSnLg/l.jpg'
          
          /> 
            <Store
          id={13}
          name="The Blackthorn Mercantile"
          category="Home Decor, Gift Shop"
          location="Mississippi, Boise, North Portland,"
          image='https://s3-media0.fl.yelpcdn.com/bphoto/INdTibjvFHOLgdfS9QzTLw/l.jpg'
          
          /> 
            <Store
          id={14}
          name="CULT."
          category="Plant Store"
          location="1204 NW Glisan St
          Portland, OR 97209"
          image='https://s3-media0.fl.yelpcdn.com/bphoto/NX8jiM28oQUGTHyc-QyoMQ/l.jpg'
          
          /> 
          
        </div>
        <div className='home-banner-top'></div>
        <div className='home-banner-bottom'></div>
        <div className='cat-header'>Eat Local<span className='font2'>E</span></div>
        <div className='home-banner-top'></div>
        <div className='home-banner-bottom'></div>

        <div className='store-home-row'>
          <Store
          id={1}
          name="Screen Door Pearl District"
          category="Southern, Breakfast"
          location="1131 NW Couch St
          Portland, OR 97209."
          image='https://s3-media0.fl.yelpcdn.com/bphoto/4PgE7-enZpHLha1jtLXAtQ/348s.jpg'
          /> 
            <Store
          id={1}
          name="Sunshine Noodles"
          category="Noodles"
          location="2175 NW Raleigh St          
          Portland, OR 97210"
          image='https://s3-media0.fl.yelpcdn.com/bphoto/2yEPVRXcIAI4jufcrlxPVQ/348s.jpg'         
          /> 
            <Store
          id={1}
          name="Top Burmese"
          category="Burmese, Vegan"
          location="413 NW 21st Av
          Portland, OR 97209"
          image='https://s3-media0.fl.yelpcdn.com/bphoto/m9ovn-fkQnluatNgZKIKPw/o.jpg'         
          /> 
            <Store
          id={1}
          name="Justa Pasta"
          category="Italian"
          location="1326 NW 19th Ave
          Portland, OR 97209"
          image='https://s3-media0.fl.yelpcdn.com/bphoto/m-36_XXH0syWVboXisvrkg/l.jpg'
          
          /> 
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