import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slideImage1 from "./../img/homeslide1.png";
import slideImage2 from "./../img/homeslide2.png";
import slideImage3 from "./../img/homeslide3.jpg";

const fadeImages = [
  {
  src: {slideImage1},
  caption: 'First Slide'
  },
  {
  url: {slideImage2},
  caption: 'Second Slide'
  },
  {
  url: {slideImage3},
  caption: 'Third Slide'
  },
];

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default SlideShow;