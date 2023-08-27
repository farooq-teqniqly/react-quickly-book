import { useState } from "react";

const THRESHOLD = 1000;

export const DoubleClickCounter = () => {
  const [counter, setCounter] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  const onClick = () => {
    const isDoubleClick = Date.now() - lastClickTime < THRESHOLD;

    if (!isDoubleClick) {
      setCounter((value) => value + 1);
    } else {
      setLastClickTime(Date.now());
    }
  };

  return (
    <main>
      <p>Counter: {counter}</p>
      <button onClick={onClick}>Increment</button>
    </main>
  );
};
