import React, { Component } from 'react';


const Slide = props => {
    console.log("Slide props", props)
    return (
      <div className="slide">
          <div className="slide-container">
            <img src={props.carouselData.slide} alt="slide thumbnail"/* image source goes here */ />
          </div>
        </div>
    );
  };

  export default Slide;