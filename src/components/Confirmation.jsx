import React from 'react';
import { Element } from 'react-scroll';
import Button from './Button';
import '../styles/Confirmation.css';

const Confirmation = () => {
  return (
    <Element name="confirmation" className="element">
      <div className="Confirmation">
        <h2>Thank you for completing the quiz</h2>
        <p>
          Our dev team is currently working on calculation mode. Until them we
          cannot provide an accurate estimate. If you signed up for our new
          letter we will lwt you know when to try again.
        </p>
        <Button btnVal="another trip" next="from" />
      </div>
    </Element>
  );
};

export default Confirmation;
