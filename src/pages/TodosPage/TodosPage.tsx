import * as React from "react";
import { TodoControls } from "../../components/TodoControls";
import { TodoList } from "../../components/TodoList";

export const TodosPage = () => {
  return (
    <React.Fragment>
      <TodoControls />

      <TodoList />
    </React.Fragment>
  );
};
