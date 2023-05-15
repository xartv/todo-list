import * as React from "react";
import { orderBy } from "lodash";

import { TodoControls } from "./components/TodoControls";
import { TodoList } from "./components/TodoList";

import s from "./App.module.css";

function App() {


  //const onDeleteTodo = (id: number) => {
  //  setTodos((prev) => prev.filter((todo) => todo.id !== id));
  //};

  //const onToggleComplete = (id: number) => {
  //  const newTodos = todos.map((todo) => {
  //    if (todo.id === id) {
  //      return {
  //        title: todo.title,
  //        id: todo.id,
  //        completed: !todo.completed,
  //      };
  //    }

  //    return todo;
  //  });

  //  setTodos(orderBy(newTodos, ["completed", "id"], ["asc", "asc"]));
  //};

  return (
    <div className={s.container}>
      <TodoControls />

      <TodoList
        //onDelete={onDeleteTodo}
        //onToggleComplete={onToggleComplete}
      />
    </div>
  );
}

export default App;
