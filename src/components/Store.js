import React from 'react';
import "./Store.css";



function Store({ id, name, image, location, category}) {
 
  return (
    <div className='store'>
      <img src={image} alt="" />
      <div className='store-info'>
        <p>{name}</p>
        <small>{category}</small>
        <p className='store-location'>{location}</p>
      </div>
       
    </div>
  )
}


export default Store