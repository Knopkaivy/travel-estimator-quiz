import React from 'react';
import '../styles/Radio.css';

const Radio = ({ option, name, radioSelect }) => {
  const handleRadioClick = (event) => {
    radioSelect(event.target.id);
  };
  return (
    <label htmlFor={option.id} key={option.id} className="Radio__label">
      <input
        type="radio"
        name={name}
        id={option.id}
        value={option.id}
        onClick={(e) => handleRadioClick(e)}
      />
      <div className="Radio__card">
        <h3>{option.name}</h3>
      </div>
    </label>
  );
};

export default Radio;
