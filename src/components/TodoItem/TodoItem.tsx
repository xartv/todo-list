import cn from "classnames";

import { Todo } from "../../types";

import s from "./TodoItem.module.scss";
import { useAppDispatch } from "../../store/hooks";
import { deleteTodo, toggleComplete } from "../store/todoListSlice/todoListSlice";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({
  todo,
}: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const onDelete = (id: number) => {
    dispatch(deleteTodo(id))
  }

  const onToggleComplete = (id: number) => {
    dispatch(toggleComplete(id));
  }

  return (
    <li className={cn(s.listItem, {[s.listItemCompleted]: todo.completed})}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <span>{todo.title}</span>
      <button className={s.deleteButton} onClick={() => onDelete(todo.id)}>
        &#10008;
      </button>
    </li>
  );
};
