import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from "react-slideshow-image";
import "./SlideShow.css";
import slideImage1 from "./../img/homeslide1.png";
import slideImage2 from "./../img/homeslide2.png";
import slideImage3 from "./../img/homeslide3.jpg";

const fadeImages = [slideImage1, slideImage2, slideImage3];


 function SlideShow() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} />
        </div>
      </Fade>
    </div>
  );
}

export default SlideShow;