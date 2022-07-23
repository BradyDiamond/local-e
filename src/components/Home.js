import React from 'react';
import homeImage from "./../img/portland.jpg";
import './Home.css';
import logoImage from "./../img/locale_logo.png";



function Home() {
  return (

    <div className='home'>
      <div className='home-container'>        
        <img className='home-image' src={homeImage}/>
        <div className='home-row1'>
          <div className='logo-banner'>
            <br/>
            <img className="home-logo" src={logoImage}/>
          </div>
        </div>

        <div className='home-banner-top'></div>
        <div className='home-banner-bottom'></div>

        <div className='home-row'>
 
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