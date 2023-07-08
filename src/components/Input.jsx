import React, { useEffect, useState } from 'react';
import '../styles/Input.css';
import Button from './Button';

const Input = ({ input, next, reset }) => {
  const { type, min, max, minLength, maxLength } = input;
  const [val, setVal] = useState('');
  useEffect(() => {
    if (reset) {
      setVal('');
    }
  }, [reset]);
  return (
    <div className="Input">
      {type === 'submit' ? (
        <input type={type} value="Go Ahead" className="Button" />
      ) : (
        <React.Fragment>
          <input
            type={type}
            min={min}
            max={max}
            minLength={minLength}
            maxLength={maxLength}
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
          />
          <Button val="next" next={next} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Input;
