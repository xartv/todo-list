import * as React from "react";
import { v4 as uuidv4 } from "uuid";

import { Todo } from "./types";

import s from "./App.module.css";

//const mockTodos: Todo[] = [
//  { title: "Learn redux", id: "1", completed: false },
//  { title: "Write code", id: "2", completed: false },
//  { title: "Profit", id: "3", completed: false },
//];

function App() {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const onClick = () => {
    if (!value) return;

    const newTodo: Todo = {
      title: value,
      id: uuidv4(),
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className={s.container}>
      <div className={s.controls}>
        <input
          type="text"
          value={value}
          className={s.input}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={onClick}>Add todo</button>
      </div>

      <ul className={s.todoWrapper}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
