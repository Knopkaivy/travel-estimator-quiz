import React from 'react';
import { useFuse } from '../useFuse';
import airports from '../airports.json';

import '../styles/SearchInput.css';

const SearchInput = ({
  name,
  type,
  val,
  changeVal,
  errors,
  register,
  validationParams,
  handleChange,
  handleKeyDown,
}) => {
  const reg = register(name, { ...validationParams });
  const options = {
    shouldSort: true,
    threshold: 0.1,
    maxPatternLength: 32,
    keys: [
      {
        name: 'iata',
        weight: 0.5,
      },
      {
        name: 'name',
        weight: 0.3,
      },
      {
        name: 'city',
        weight: 0.2,
      },
    ],
  };
  const handleOptionClick = (event) => {
    // manual onChange call to update react-hook-form data
    const inputElement = document.getElementById(name);
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    ).set;
    nativeInputValueSetter.call(inputElement, event.target.innerText);
    const manualEvent = new Event('input', { bubbles: true });
    inputElement.dispatchEvent(manualEvent);
  };
  const handleOptionKeyUp = (event) => {
    if (event.keyCode === 32) {
      event.preventDefault();
      handleOptionClick(event);
    }
  };
  const results = useFuse(val, airports, options);
  const airportList = results.slice(0, 4).map((airport, i) => {
    const { iata, city, country } = airport;
    return (
      <li
        className="SearchInput__option"
        key={i}
        onClick={(e) => handleOptionClick(e)}
        onKeyUp={(e) => handleOptionKeyUp(e)}
        tabIndex={0}
      >
        {iata} - {city} - {country}
      </li>
    );
  });
  return (
    <div className="SearchInput">
      <input
        type={type}
        value={val}
        id={name}
        {...reg}
        errors={errors}
        onChange={(e) => {
          reg.onChange(e);
          handleChange(name, e.target.value);
        }}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      <ul className="SearchInput__optionsContainer">{airportList}</ul>
    </div>
  );
};

export default SearchInput;
