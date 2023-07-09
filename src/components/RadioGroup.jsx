import React, { useEffect, useState } from 'react';
import Button from './Button';
import '../styles/RadioGroup.css';
import Radio from './Radio';

const RadioGroup = ({
  input,
  name,
  next,
  val,
  changeVal,
  register,
  errors,
  scrollToNext,
}) => {
  const { options, validationParams } = input;

  const optionList = options.map((option) => {
    return (
      <Radio
        option={option}
        name={name}
        changeVal={changeVal}
        key={option.id}
        val={val}
        register={register}
        // errors={errors}
        validationParams={validationParams}
      />
    );
  });
  return (
    <div className="RadioGroup">
      <div className="RadioGroup__optionsContainer" id={name}>
        {optionList}
      </div>
      <p className="errorMessage">{errors[name] && errors[name].message}</p>
      <Button
        val="next"
        name={name}
        next={next}
        errors={errors}
        scrollToNext={scrollToNext}
      />
    </div>
  );
};

export default RadioGroup;
