import React, { useState } from 'react';

export default () => {
  const [a, b] = useState(0);
  return (
    <div>
      <button onClick={() => { b(a + 1); }}>
        \ovo/ {"<"}{a} times!!
      </button>
    </div>
  )
};
