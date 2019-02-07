import * as React from 'react';
const { useRef } = React;

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default () => {
  return (
    <>
      <TextInputWithFocusButton />
    </>
  );
};
