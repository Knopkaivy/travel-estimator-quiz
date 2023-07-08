import React from 'react';
import Button from './Button';
import '../styles/RadioGroup.css';

const RadioGroup = ({ input, next }) => {
  return (
    <div className="RadioGroup">
      <div className="RadioGroup__optionsContainer">Radio Options Go Here</div>
      <Button val="next" next={next} />
    </div>
  );
};

export default RadioGroup;
