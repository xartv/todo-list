import * as React from "react";

import s from "./TodoList.module.scss";
import { orderBy } from "lodash";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/useAppHooks";
import { getTodosSelector } from "../model/todoListSelectors";
import { fetchTodos } from "../model/todoActions";
import { TodoItem } from "../../../entities/TodoItem";

export const TodoList = () => {
  const dispatch = useAppDispatch();
  
  const todos = useAppSelector(getTodosSelector);
  const sortedTodos = orderBy(todos, ["completed", "id"], ["asc", "asc"]); // возможно нужно сортить массив непосредственно в сторе, для этого нужна санка

  React.useEffect(() => {
    dispatch(fetchTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={s.todosWrapper}>
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
