import * as React from 'react';
const { useRef, forwardRef, useImperativeHandle } = React;

function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} />;
}

FancyInput = forwardRef(FancyInput);

export default () => {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <FancyInput ref={inputRef} />
      <button onClick={focus} >Focus</button>
    </>
  );
};
