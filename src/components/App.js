import React, { useState } from 'react';

function getRandomInit(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

export default () => {
  const [a, b] = useState(0);
  return (
    <Counter initialCount={() => {
      return getRandomInit(100)
    }} />
  )
};
