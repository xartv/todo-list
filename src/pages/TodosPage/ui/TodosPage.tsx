import * as React from "react";
import { AddTodo } from "../../../features/Todos/AddTodo";
import { TodoList } from "../../../widgets/TodoList";

export const TodosPage = () => {
  return (
    <React.Fragment>
      <AddTodo />

      <TodoList />
    </React.Fragment>
  );
};
