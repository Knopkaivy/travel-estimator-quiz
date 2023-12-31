import React from 'react';
import { Element } from 'react-scroll';
import Button from './Button';
import '../styles/Start.css';

const Start = () => {
  return (
    <Element name="start" className="element">
      <div className="Start">
        <h1>Travel Estimator Quiz</h1>
        <p>
          Get an estimate for your trip based on location, group size, duration
          and budget.
        </p>
        <Button btnVal="start" next="from" />
      </div>
    </Element>
  );
};

export default Start;
