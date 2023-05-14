import cn from "classnames";

import { Todo } from "../../types";

import s from "./TodoItem.module.scss";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

export const TodoItem = ({
  todo,
  onDelete,
  onToggleComplete,
}: TodoItemProps) => {
  return (
    <li className={cn(s.listItem, {[s.listItemCompleted]: todo.completed})}>
      <input
        type="checkbox"
        onChange={() => onToggleComplete(todo.id)}
        checked={todo.completed}
      />
      <span>{todo.title}</span>
      <button className={s.deleteButton} onClick={() => onDelete(todo.id)}>
        &#10008;
      </button>
    </li>
  );
};
