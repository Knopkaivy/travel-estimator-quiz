import React, { useContext } from 'react';
import { Context } from '../context';
import '../styles/Button.css';

const Button = ({ btnVal, name, next, errors, val }) => {
  const scrll = useContext(Context);
  const handleButtonClick = () => {
    if (btnVal === 'next') {
      if (errors[name]) {
        if (name === 'budget' || name === 'season') return;
        const newEl = document.querySelector(`#${name}`);
        newEl.focus();
        return;
      }
    }
    scrll(next);
  };
  return (
    <button
      type="button"
      className="Button"
      onClick={handleButtonClick}
      disabled={val === ''}
    >
      {btnVal}
    </button>
  );
};

export default Button;
