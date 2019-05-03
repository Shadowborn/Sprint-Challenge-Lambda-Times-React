import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';

const Slides = props => {
  console.log("Slides props", props)
  return (
    <div className="slides-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.slides.map((slide, i) => <Slide key={i} carouselData={slide} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Slides.propTypes = {
  slides: PropTypes.array.isRequired,
};
export default Slides;