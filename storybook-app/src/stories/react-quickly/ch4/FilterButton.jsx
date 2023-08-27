export const FilterButton = ({ flag, setFilter, children }) => {
  return <button onClick={() => setFilter(flag)}>{children}</button>;
};
