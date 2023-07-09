import React from 'react';
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
import Input from './Input';
import RadioGroup from './RadioGroup';
import '../styles/FormField.css';

const FormField = ({
  field,
  val,
  changeVal,
  register,
  errors,
  scrollToNext,
}) => {
  const { name, header, detail, next, input } = field;

  return (
    <Element name={name} className="element">
      <div className="FormField">
        <div className="FormField__contentContainer">
          <h2>{header}</h2>
          {detail && <p>{detail}</p>}
          {input.type === 'radio' ? (
            <RadioGroup
              input={input}
              name={name}
              next={next}
              val={val}
              changeVal={changeVal}
              register={register}
              errors={errors}
              scrollToNext={scrollToNext}
            />
          ) : (
            <Input
              name={name}
              input={input}
              next={next}
              val={val}
              changeVal={changeVal}
              register={register}
              errors={errors}
              scrollToNext={scrollToNext}
            />
          )}
        </div>
      </div>
    </Element>
  );
};

export default FormField;
