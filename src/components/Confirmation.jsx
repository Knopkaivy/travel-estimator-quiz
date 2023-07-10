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
import '../styles/Confirmation.css';

const Confirmation = ({ scrollToNext }) => {
  return (
    <Element name="confirmation" className="element">
      <div className="Confirmation">
        <h2>Thank you for completing the quiz</h2>
        <p>
          Our dev team is currently working on calculation mode. Until them we
          cannot provide an accurate estimate. If you signed up for our new
          letter we will lwt you know when to try again.
        </p>
        <Button btnVal="another trip" next="from" scrollToNext={scrollToNext} />
      </div>
    </Element>
  );
};

export default Confirmation;
