import React from 'react';
import { scroller } from 'react-scroll';
import { useForm } from 'react-hook-form';
import useFormState from '../useFormState';
import FormField from './FormField';
import { formFields } from '../formFields';
import '../styles/Form.css';

const Form = () => {
  const initialState = {
    from: '',
    to: '',
    adults: '',
    children: '',
    duration: '',
    budget: '',
    season: '',
    submit: 'Go Ahead',
  };
  const { inputs, handleChange, handleReset } = useFormState(initialState);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const resetFields = () => {
    handleReset(initialState);
  };

  const mySubmit = (data, event) => {
    event.preventDefault();
    resetFields();
    scroller.scrollTo('confirmation', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  const formFieldsList = formFields.map((item, i) => {
    return (
      <FormField
        key={item.name}
        val={inputs[item.name]}
        field={item}
        changeVal={handleChange}
        register={register}
        errors={errors}
      />
    );
  });
  return (
    <form className="Form" onSubmit={handleSubmit(mySubmit)} noValidate>
      {formFieldsList}
    </form>
  );
};

export default Form;
