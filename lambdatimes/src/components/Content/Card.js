import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */props.cardData.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cardData.img} alt="card thumbnail"/* image source goes here */ />
        </div>
        <span>By {props.cardData.author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  cardData: PropTypes.object.isRequired,
};
export default Card;
