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

const Button = ({ val, name, next, errors, scrollToNext }) => {
  const handleButtonClick = (event) => {
    console.log(event);
    if (val === 'next') {
      console.log(errors[name]);
      if (errors[name]) {
        if (name === 'budget' || name === 'season') return;
        const newEl = document.querySelector(`#${name}`);
        console.log('focusing on input');
        newEl.focus();
        return;
      }
    }
    scrollToNext(next);
  };
  return (
    <button type="button" className="Button" onClick={handleButtonClick}>
      {val}
    </button>
  );
};

export default Button;
