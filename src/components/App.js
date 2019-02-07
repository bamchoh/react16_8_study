import * as React from 'react';
const { useState, useEffect } = React;

export default () => {
  const [a, b] = useState(0);

  useEffect(() => {
    const timerid = setTimeout(() => {
      console.log("triggered!!");
    }, 1000);
    console.log("timer");

    return () => {
      clearTimeout(timerid);
      console.log("clean up useEffect")
    }
  }, [a]);

  return (
    <>
      time: <b>{a}</b>
      <button onClick={() => b(a+1)}>+</button>
    </>
  )
};
