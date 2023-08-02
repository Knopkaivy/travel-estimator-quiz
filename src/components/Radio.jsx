import React from 'react';
import '../styles/Radio.css';

const Radio = ({
  option,
  name,

  changeVal,
  val,
  register,
  validationParams,
}) => {
  const reg = register(name, { ...validationParams });
  const handleRadioClick = (event) => {
    changeVal(name, event.target.id);
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 32) {
      event.preventDefault();
      const el = document.getElementById(event.target.htmlFor);
      // el.checked = !el.checked;
      changeVal(name, event.target.htmlFor);
      // manual onChange call to update react-hook-form data
      // const inputElement = document.getElementById(name);
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      ).set;
      nativeInputValueSetter.call(el, !el.checked);
      const manualEvent = new Event('input', { bubbles: true });
      el.dispatchEvent(manualEvent);
    }
  };
  return (
    <label
      tabIndex={0}
      htmlFor={option.id}
      key={option.id}
      className="Radio__label"
      onKeyDown={(e) => handleKeyDown(e)}
    >
      <input
        type="radio"
        name={name}
        id={option.id}
        value={option.id}
        checked={val === option.id}
        {...reg}
        onChange={(e) => {
          reg.onChange(e);
          handleRadioClick(e);
        }}
      />
      <div className="Radio__card">{option.name}</div>
    </label>
  );
};

export default Radio;
