import { useState, useRef } from "react";

const THRESHOLD = 1000;

export const DoubleClickCounterUseRef = () => {
  const [counter, setCounter] = useState(0);
  const lastClickTime = useRef(null);

  const onClick = () => {
    const isDoubleClick = Date.now() - lastClickTime < THRESHOLD;

    if (!isDoubleClick) {
      setCounter((value) => value + 1);
    } else {
      lastClickTime.current = Date.now();
    }
  };

  return (
    <main>
      <p>Counter: {counter}</p>
      <button onClick={onClick}>Increment</button>
    </main>
  );
};
