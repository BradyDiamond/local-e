import Store from './Store'
import "./Card.css";
import React, { useState } from 'react';
import "./Product.css";
import ReactCardFlip from "react-card-flip";
import map from "./../img/mapslocale.png";


const StoreFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);

  };

    return (
    
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

        <div onClick={handleClick} className="card1">
        <Store
          id={1}
          name="Test Store"
          category="Plant Store"
          location="123 test AV."
          image= 'http://d1ih9tlfsfrtid.cloudfront.net/J2gmSW7eRA2ZX7SowN6X_9PJ-Storefront-04575dd6_lemon_one_10.jpg'         
          /> 
        </div>

        <div onClick={handleClick} className="card2">
        <Store
          id={1}
          name="Test Store"
          category="Plant Store"
          location="123 test AV."
          image= {map}         
          /> 
        
        </div>
        
      </ReactCardFlip>      
    )
  }


export default StoreFlip;