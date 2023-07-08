import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (reset) {
      setTimeout(() => {
        setReset(false);
      }, 1000);
    }
  }, [reset]);

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
    return <FormField key={i} field={field} reset={reset} />;
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
