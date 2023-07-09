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
import { useForm } from 'react-hook-form';
import FormField from './FormField';
import { formFields } from '../formFields';
import '../styles/Form.css';

const Form = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [duration, setDuration] = useState('');
  const [budget, setBudget] = useState('');
  const [season, setSeason] = useState('');
  const [submit, setSubmit] = useState('Go Ahead');

  const stateArr = [
    [from, setFrom],
    [to, setTo],
    [adults, setAdults],
    [children, setChildren],
    [duration, setDuration],
    [budget, setBudget],
    [season, setSeason],
    [submit, setSubmit],
  ];

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const resetFields = () => {
    setFrom('');
    setTo('');
    setAdults('');
    setChildren('');
    setDuration('');
    setBudget('');
    setSeason('');
  };

  const mySubmit = (data, event) => {
    console.log(data);
    event.preventDefault();
    resetFields();
    scroller.scrollTo('confirmation', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  const formFieldsList = stateArr.map((stateItem, i) => {
    return (
      <FormField
        key={formFields[i].name}
        val={stateItem[0]}
        field={formFields[i]}
        changeVal={stateItem[1]}
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
