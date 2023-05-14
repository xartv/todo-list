import * as React from "react";
import { orderBy } from "lodash";

import { Todo } from "./types";

import s from "./App.module.css";
import { TodoControls } from "./components/TodoControls";
import { TodoList } from "./components/TodoList";

function App() {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const onAddTodo = () => {
    if (!value) return;

    const newTodo: Todo = {
      title: value,
      id: Date.now(),
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setValue("");
  };

  const onDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onToggleComplete = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          title: todo.title,
          id: todo.id,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(orderBy(newTodos, ['completed', 'id'], ['asc', 'asc']));
  };

  return (
    <div className={s.container}>
      <TodoControls value={value} onClick={onAddTodo} setValue={setValue} />

      <TodoList
        todos={todos}
        onDelete={onDeleteTodo}
        onToggleComplete={onToggleComplete}
      />
    </div>
  );
}

export default App;
