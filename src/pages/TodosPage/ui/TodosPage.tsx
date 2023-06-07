import * as React from "react";

import { fetchTodos } from "src/features/Todos/model/todoActions";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/useAppHooks";
import { orderBy } from "lodash";
import { getTodosSelector } from "src/features/Todos/model/todoListSelectors";
import { TodoItem } from "src/widgets/TodoItem";
import { AddTodo } from "src/features/Todos/ui/AddTodo";

import s from "./TodosPage.module.scss";

export const TodosPage = () => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector(getTodosSelector);
  const sortedTodos = orderBy(todos, ["completed", "id"], ["asc", "asc"]); // возможно нужно сортить массив непосредственно в сторе, для этого нужна санка

  React.useEffect(() => {
    dispatch(fetchTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <AddTodo />

      <ul className={s.todosWrapper}>
        {sortedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </React.Fragment>
  );
};
