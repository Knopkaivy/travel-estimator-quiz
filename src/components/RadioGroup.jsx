import React, { useState } from 'react';
import Button from './Button';
import '../styles/RadioGroup.css';
import Radio from './Radio';

const RadioGroup = ({ input, name, next }) => {
  const { options } = input;
  const [val, setVal] = useState('');
  const radioSelect = (id) => {
    setVal(id);
  };
  const optionList = options.map((option) => {
    return (
      <Radio
        option={option}
        name={name}
        radioSelect={radioSelect}
        key={option.id}
      />
    );
  });
  return (
    <div className="RadioGroup">
      <div className="RadioGroup__optionsContainer">{optionList}</div>
      <Button val="next" next={next} />
    </div>
  );
};

export default RadioGroup;
