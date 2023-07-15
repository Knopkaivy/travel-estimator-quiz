import React, { useEffect, useRef, useState } from 'react';
import Fuse from 'fuse.js';
import { useFuse } from '../useFuse';
import airports from '../airports.json';

import '../styles/SearchInput.css';

const SearchInput = ({
  name,
  type,
  val,
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
  const results = useFuse(val, airports, options);
  const airportList = results.slice(0, 4).map((airport) => {
    const { iata, city, country } = airport;
    return (
      <div key={iata}>
        {iata} - {city} - {country}
      </div>
    );
  });
  return (
    <div>
      <input
        type={type}
        value={val}
        id={name}
        {...reg}
        errors={errors}
        onChange={(e) => {
          reg.onChange(e);
          handleChange(e);
        }}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      {airportList}
    </div>
  );
};

export default SearchInput;
