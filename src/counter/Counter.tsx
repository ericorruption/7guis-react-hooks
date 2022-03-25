import { FunctionComponent, useState } from 'react';

export const Counter: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <input value={count} readOnly />
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Count
      </button>
    </>
  );
};
