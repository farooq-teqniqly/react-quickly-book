import { useState, useEffect } from "react";

export const MouseStatus = () => {
  const [isMoving, setMoving] = useState(false);
  const onMouseMove = () => setMoving(true);

  useEffect(() => {
    if (!isMoving) return;

    const timeout = setTimeout(() => setMoving(false), 500);
    return () => clearTimeout(timeout);
  }, [isMoving]);
  return (
    <section onMouseMove={onMouseMove}>
      <h2>
        The mouse is {!isMoving && "not"} moving: {isMoving ? "" : ""}
      </h2>
    </section>
  );
};
