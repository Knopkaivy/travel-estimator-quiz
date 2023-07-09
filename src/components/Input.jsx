import React, { useEffect, useState } from 'react';
import '../styles/Input.css';
import Button from './Button';

const Input = ({ name, input, next, val, changeVal, register, errors }) => {
  const { type, min, max, minLength, maxLength, validationParams } = input;
  const reg = register(name, { ...validationParams });
  const handleChange = (event) => {
    changeVal(event.target.value);
  };
  return (
    <div className="Input">
      {type === 'submit' ? (
        <input type={type} value="Go Ahead" className="Button" />
      ) : (
        <React.Fragment>
          <div>
            <input
              type={type}
              min={min}
              max={max}
              minLength={minLength}
              maxLength={maxLength}
              value={val}
              {...reg}
              onChange={(e) => {
                reg.onChange(e);
                handleChange(e);
              }}
              errors={errors}
            />
            <p className="errorMessage">
              {errors[name] && errors[name].message}
            </p>
          </div>
          <Button val="next" name={name} next={next} errors={errors} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Input;
