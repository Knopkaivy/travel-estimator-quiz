import React from 'react';
import Button from './Button';
import SearchInput from './SearchInput';
import '../styles/Input.css';

const Input = ({ name, input, next, val, changeVal, register, errors }) => {
  const { type, min, max, minLength, maxLength, validationParams } = input;
  const reg = register(name, { ...validationParams });

  const handleChange = (event) => {
    changeVal(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const el = document.querySelector(`#${name}`);
      el.blur();
    }
  };

  return (
    <div className="Input">
      {type === 'submit' ? (
        <input type={type} id={name} value="Go Ahead" className="Button" />
      ) : (
        <React.Fragment>
          <div>
            {type === 'search' ? (
              <SearchInput
                name={name}
                type={type}
                val={val}
                changeVal={changeVal}
                errors={errors}
                register={register}
                validationParams={validationParams}
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
              />
            ) : (
              <input
                type={type}
                id={name}
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
                onKeyDown={(e) => {
                  handleKeyDown(e);
                }}
                errors={errors}
              />
            )}
            <p className="errorMessage">
              {errors[name] && errors[name].message}
            </p>
          </div>
          <Button
            btnVal="next"
            name={name}
            next={next}
            errors={errors}
            val={val}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default Input;
