import React from 'react';
import '../styles/Radio.css';

const Radio = ({ option, name, radioSelect, val }) => {
  const handleRadioClick = (event) => {
    console.log(event.target.id, option.id);
    radioSelect(event.target.id);
  };
  return (
    <label htmlFor={option.id} key={option.id} className="Radio__label">
      <input
        type="radio"
        name={name}
        id={option.id}
        value={option.id}
        checked={val === option.id}
        onChange={(e) => handleRadioClick(e)}
      />
      <div className="Radio__card">
        <h3>{option.name}</h3>
      </div>
    </label>
  );
};

export default Radio;
