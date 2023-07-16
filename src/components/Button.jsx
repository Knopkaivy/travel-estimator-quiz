import React from 'react';
import '../styles/Button.css';

const Button = ({ btnVal, name, next, errors, scrollToNext, val }) => {
  const handleButtonClick = () => {
    if (btnVal === 'next') {
      if (errors[name]) {
        if (name === 'budget' || name === 'season') return;
        const newEl = document.querySelector(`#${name}`);
        newEl.focus();
        return;
      }
    }
    scrollToNext(next);
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
