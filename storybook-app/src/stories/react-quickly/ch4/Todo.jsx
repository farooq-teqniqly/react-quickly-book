export const Todo = ({ complete, markComplete, children }) => {
  return (
    <p>
      <button onClick={complete ? null : markComplete}>
        {complete ? "Done" : "Not done"}
      </button>
      {children}
    </p>
  );
};
