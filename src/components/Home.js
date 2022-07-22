import React from 'react';
import homeImage from "./../img/portland.jpg";
import './Home.css';
import CardFlip from "./CardFlip";
import Store from "./Store";


function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        
        <img className='home-image' src={homeImage}/>
        
        <div className='home-row1'>
        <div className='card-banner'>
            <br/>
            <CardFlip />  
          </div>
        </div>

        <div className='home-row'>
        <Store
          id={1}
          name="Test Store"
          category="Plant Store"
          location="123 test AV."
          image='http://d1ih9tlfsfrtid.cloudfront.net/J2gmSW7eRA2ZX7SowN6X_9PJ-Storefront-04575dd6_lemon_one_10.jpg'
          
          />    <Store
          id={1}
          name="Test Store"
          category="Plant Store"
          location="123 test AV."
          image='http://d1ih9tlfsfrtid.cloudfront.net/J2gmSW7eRA2ZX7SowN6X_9PJ-Storefront-04575dd6_lemon_one_10.jpg'
          
          />
        </div>

        <div className='home-banner-top'></div>
        <div className='home-banner-bottom'></div>


        <div className='home-row'>

        </div>

        <div className='home-row'>  
        </div>




        <div className='home-row'>
        </div>


      </div>
    </div>
  )
}

export default Home