import React, { useState } from 'react';
import Counter from './Components/Counter';
import Toggle from './Components/Toggle';
import Form from './Components/Form';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count>0){
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <Counter
      decrement = {decrement}
      count = {count}
      increment = {increment}
      reset = {reset} 
      />
      <Toggle />
      <br />
      <br />
      <Form />
    </>
  );
};

export default App;