import React from 'react';
import * as Scroll from 'react-scroll';
import {
  Link,
  // Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import '../styles/Button.css';

const Button = ({ btnVal, name, next, errors, scrollToNext, val }) => {
  const handleButtonClick = (event) => {
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
