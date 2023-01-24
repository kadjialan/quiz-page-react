import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ text }) {
  return (
    <div>
      <button type="button" className="mainButton">
        {text}
      </button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
