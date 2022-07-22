import React from 'react'
import businessBanner from "./../img/localBusiness.jpg";
import businessBanner2 from "./../img/localBusiness2.jpg";
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
    <img className='banner-image-left' src={businessBanner}/>
    <img className='banner-image-right' src={businessBanner2}/>
</div>
  )
}

export default Footer