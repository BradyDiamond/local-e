import React from 'react';
import "./Store.css";
import { Link, useHistory } from "react-router-dom";



function Store({ id, name, image, location, category}) {
  return (
    <div className='store'>
      <Link to="/storehome" >
      <img className='store-img' src={image} alt="" />
      </Link>
      <div className='store-info'>
        <p className='store-name'>{name}</p>
        <small>{category}</small>
        <p className='store-location'>{location}</p>
      </div>
       
    </div>
  )
}


export default Store