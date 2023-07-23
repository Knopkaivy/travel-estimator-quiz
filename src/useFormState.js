import { useState } from 'react';

export default function useFormState(initial) {
  const [inputs, setInputs] = useState(initial);
  const handleChange = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleReset = (newState) => {
    setInputs(newState);
  };
  return { inputs, handleChange, handleReset };
}
