import cn from "classnames";

import { Todo } from "../../types";

import s from "./TodoItem.module.scss";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({
  todo,

}: TodoItemProps) => {
  return (
    <li className={cn(s.listItem, {[s.listItemCompleted]: todo.completed})}>
      <input
        type="checkbox"
        checked={todo.completed}
      />
      <span>{todo.title}</span>
      <button className={s.deleteButton} >
        &#10008;
      </button>
    </li>
  );
};
