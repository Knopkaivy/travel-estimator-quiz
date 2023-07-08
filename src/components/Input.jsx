import React from 'react';
import '../styles/Input.css';
import Button from './Button';

const Input = ({ input }) => {
  const { type, min, max, minLength, maxLength } = input;
  return (
    <div className="Input">
      Input goes here
      <Button val="next" />
    </div>
  );
};

export default Input;
