import React from 'react';
import Button from './Button';
import '../styles/Start.css';

const Start = () => {
  return (
    <div className="Start">
      <h1>Travel Estimator Quiz</h1>
      <p>
        Get an estimate for your trip based on location, group size, duration
        and budget.
      </p>
      <Button val="start" />
    </div>
  );
};

export default Start;
