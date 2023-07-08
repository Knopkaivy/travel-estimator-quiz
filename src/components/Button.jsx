import React from 'react';
import '../styles/Button.css';

const Button = ({ val }) => {
  return (
    <button type="button" className="Button">
      {val}
    </button>
  );
};

export default Button;
