import React from 'react';
import Button from './Button';
import '../styles/RadioGroup.css';
import Radio from './Radio';

const RadioGroup = ({
  input,
  name,
  header,
  detail,
  next,
  val,
  changeVal,
  register,
  errors,
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
        validationParams={validationParams}
      />
    );
  });
  return (
    <fieldset
      className="RadioGroup"
      aria-label={`${header} ${detail}`}
      tabIndex={0}
    >
      <div className="RadioGroup__optionsContainer" id={name}>
        {optionList}
      </div>
      <p className="errorMessage">{errors[name] && errors[name].message}</p>
      <Button btnVal="next" name={name} next={next} errors={errors} val={val} />
    </fieldset>
  );
};

export default RadioGroup;
