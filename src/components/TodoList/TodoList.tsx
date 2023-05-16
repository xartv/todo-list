import { TodoItem } from "../TodoItem";
import { useAppSelector } from "../../store/hooks";
import { getTodosSelector } from "../store/todoListSlice/todoListSelectors";

import s from "./TodoList.module.scss";
import { orderBy } from "lodash";


export const TodoList = () => {
  const todos = useAppSelector(getTodosSelector);
  const sortedTodos = orderBy(todos, ["completed", "id"], ["asc", "asc"]); // возможно нужно сортить массив непосредственно в сторе, для этого нужна санка

  return (
    <ul className={s.todosWrapper}>
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
