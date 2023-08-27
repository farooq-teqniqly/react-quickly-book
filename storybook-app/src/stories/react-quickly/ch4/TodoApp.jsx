import { useState } from "react";
import { Todo } from "./Todo";
import { FilterButton } from "./FilterButton";

export const TodoApp = ({ initTodos }) => {
  const markDone = (todos, index) => {
    return todos.map((todo, i) =>
      i === index ? { ...todo, complete: true } : todo
    );
  };

  const [todos, setTodos] = useState(initTodos);
  const [hideComplete, setHideComplete] = useState(false);
  const filteredTodos = hideComplete
    ? todos.filter(({ complete }) => !complete)
    : todos;

  return (
    <main>
      <FilterButton setFilter={() => setHideComplete(true)}>
        Incomplete Tasks
      </FilterButton>
      <FilterButton setFilter={() => setHideComplete(false)}>
        All Tasks
      </FilterButton>
      {filteredTodos.map((todo, index) => (
        <Todo
          key={todo.name}
          complete={todo.complete}
          markComplete={() => setTodos((value) => markDone(value, index))}
        >
          {todo.name}
        </Todo>
      ))}
    </main>
  );
};
