import React, { useState } from 'react';
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
import FormField from './FormField';
import { formFields } from '../formFields';
import '../styles/Form.css';

const Form = () => {
  const [reset, setReset] = useState(false);

  const mySubmit = (event) => {
    event.preventDefault();
    setReset(true);
    scroller.scrollTo('confirmation', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  const formFieldsList = formFields.map((field, i) => {
    return <FormField key={i} field={field} />;
  });
  return (
    <form
      className="Form"
      onSubmit={(e) => {
        mySubmit(e);
      }}
    >
      {formFieldsList}
    </form>
  );
};

export default Form;
