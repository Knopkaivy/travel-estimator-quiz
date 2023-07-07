import React from 'react';
import '../styles/Input.css';

const Input = ({ input }) => {
  const { type, min, max, minLength, maxLength } = input;
  return <div className="Input">Input goes here</div>;
};

export default Input;
