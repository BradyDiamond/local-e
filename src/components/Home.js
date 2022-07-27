import React from 'react';
import homeImage from "./../img/portland.jpg";
import logoImage from "./../img/locale_logo.png";
import './Home.css';
import homecatagoriesImage from "./../img/homeslide1.png";
import homecatagories2Image from "./../img/homeflip2.png";
import homecatagories3Image from "./../img/homeflip3.jpg";
import { Link, useHistory } from "react-router-dom";




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

        <Link to="/stores" >
        <div className='home-row'>
          <img className="homecat" src={homecatagoriesImage}/> 
          <img className="homecat" src={homecatagories3Image}/>       
          <img className="homecat" src={homecatagories2Image}/>     
               
        </div>
        </Link>
        <div className='home-banner-top'></div>
        <div className='home-banner-bottom'></div>
     
        <div className='home-row'>
      
        </div>

        <div className='home-row'>  
        </div>




        <div className='home-row'>
        </div>
-

      </div>
    </div>
  )
}

export default Home
