import React from 'react';
import { Element } from 'react-scroll';
import Input from './Input';
import RadioGroup from './RadioGroup';
import '../styles/FormField.css';

const FormField = ({ field, val, changeVal, register, errors }) => {
  const { name, header, detail, next, input } = field;

  return (
    <Element name={name} className="element">
      <div className="FormField">
        <div className="FormField__contentContainer">
          <h2 aria-hidden="true">{header}</h2>
          {detail && <p aria-hidden="true">{detail}</p>}
          {input.type === 'radio' ? (
            <RadioGroup
              input={input}
              header={header}
              detail={detail}
              name={name}
              next={next}
              val={val}
              changeVal={changeVal}
              register={register}
              errors={errors}
            />
          ) : (
            <Input
              name={name}
              header={header}
              detail={detail}
              input={input}
              next={next}
              val={val}
              changeVal={changeVal}
              register={register}
              errors={errors}
            />
          )}
        </div>
      </div>
    </Element>
  );
};

export default FormField;
