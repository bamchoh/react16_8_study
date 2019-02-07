import * as React from 'react';
const { useState, useMemo } = React;

function Counter({a, b}) {
  const [cv, setState] = useState(0);

  const add = useMemo(() => {
    console.log("test")
    return a + b;
  }, [a,b]);

  const add2 = () => {
    console.log("test2")
    return a + b;
  }
  return (
    <>
      <p>Count1: {add}</p>
      <p>Count2: {add2()}</p>
      <p>Count3: {cv}</p>
      <button onClick={() => setState(prev => prev + 1)}>+</button>
    </>
  );
}

export default () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  return (
    <>
    <Counter a={a} b={b}/>
    <button onClick={() => setA(prev => prev + 1)}>a++</button>
    <button onClick={() => setB(prev => prev + 1)}>b++</button>
    </>
  );
};
