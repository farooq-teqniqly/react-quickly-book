import { TodoApp } from "./TodoApp";

const todos = [
  { name: "Read book", complete: false, index: 0 },
  { name: "Make dinner", complete: false, index: 1 },
  { name: "Work out", complete: false, index: 2 },
];

export const App = () => {
  return <TodoApp initTodos={todos}></TodoApp>;
};
