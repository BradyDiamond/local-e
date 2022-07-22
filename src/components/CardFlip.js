import businesscardflip1 from "./../img/businesscardflip1.png";
import businesscardflip2 from "./../img/businesscardflip2.png";
import businesscard2 from "./../img/businesscard2a.png";
import "./Card.css";
import React, { useState } from 'react';
import "./Product.css";
import ReactCardFlip from "react-card-flip";


const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);

  };

    return (
      <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

        <div className="card1">
          <img onClick={handleClick} className='business-card1' src={businesscardflip1}/>
        </div>

        <div className="card2">
          <img onClick={handleClick} className='business-card2' src={businesscardflip2}/>
        </div>
        
      </ReactCardFlip>
        <div className="card1">
        <img onClick={handleClick} className='business-card2' src={businesscard2}/>
        </div>
      </>
    )
  }


export default CardFlip;