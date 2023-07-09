import React from 'react';
import '../styles/Radio.css';

const Radio = ({
  option,
  name,
  changeVal,
  val,
  register,
  validationParams,
}) => {
  const reg = register(name, { ...validationParams });
  const handleRadioClick = (event) => {
    changeVal(event.target.id);
  };
  return (
    <label htmlFor={option.id} key={option.id} className="Radio__label">
      <input
        type="radio"
        name={name}
        id={option.id}
        value={option.id}
        checked={val === option.id}
        {...reg}
        onChange={handleRadioClick}
      />
      <div className="Radio__card">
        <h3>{option.name}</h3>
      </div>
    </label>
  );
};

export default Radio;
