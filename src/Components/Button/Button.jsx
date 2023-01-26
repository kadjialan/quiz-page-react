import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ text, blue }) {
  return (
    <div>
      <button
        type="button"
        style={{ backgroundColor: blue }}
        className="mainButton"
      >
        {text}
      </button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  blue: PropTypes.string.isRequired,
};
