import React from 'react';
import '../styles/FormField.css';
import Input from './Input';
import RadioGroup from './RadioGroup';

const FormField = ({ field }) => {
  const { name, header, detail, input } = field;
  return (
    <div className="FormField">
      <div className="FormField__contentContainer">
        <h2>{header}</h2>
        {detail && <p>{detail}</p>}
        {input.type === 'radio' ? (
          <RadioGroup input={input} />
        ) : (
          <Input input={input} />
        )}
      </div>
    </div>
  );
};

export default FormField;
