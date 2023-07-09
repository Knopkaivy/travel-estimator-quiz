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

const Button = ({ val, name, next, errors }) => {
  const handleButtonClick = () => {
    if (val === 'next') {
      if (errors[name]) return;
    }
    // if (next && !errors[name]) {
    scroller.scrollTo(next, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
    // }
  };
  return (
    <button type="button" className="Button" onClick={handleButtonClick}>
      {val}
    </button>
  );
};

export default Button;
