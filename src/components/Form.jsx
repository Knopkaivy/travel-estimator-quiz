import React from 'react';
import FormField from './FormField';
import { formFields } from '../formFields';
import '../styles/Form.css';

const Form = () => {
  const formFieldsList = formFields.map((field, i) => {
    return <FormField key={i} field={field} />;
  });
  return <div className="Form">{formFieldsList}</div>;
};

export default Form;
