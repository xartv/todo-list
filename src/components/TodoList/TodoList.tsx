import { TodoItem } from "../TodoItem";
import { useAppSelector } from "../../store/hooks";
import { getTodosSelector } from "../store/todoListSlice/todoListSelectors";

import s from "./TodoList.module.scss";

//interface TodoListProps {
//  onDelete: (id: number) => void;
//  onToggleComplete: (id: number) => void;
//}

export const TodoList = () => {
  const todos = useAppSelector(getTodosSelector);

  return (
    <ul className={s.todosWrapper}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
