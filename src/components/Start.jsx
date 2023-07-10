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
import Button from './Button';
import '../styles/Start.css';

const Start = ({ scrollToNext }) => {
  return (
    <Element name="start" className="element">
      <div className="Start">
        <h1>Travel Estimator Quiz</h1>
        <p>
          Get an estimate for your trip based on location, group size, duration
          and budget.
        </p>
        <Button btnVal="start" next="from" scrollToNext={scrollToNext} />
      </div>
    </Element>
  );
};

export default Start;
