import cn from "classnames";

import { Todo } from "../../../entities/Todo/model/types";

import s from "./TodoItem.module.scss";

import { DeleteTodo } from "../../../features/Todos/ui/DeleteTodo";
import { ToggleTodoComplete } from "../../../features/Todos/ui/ToggleTodo";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li className={cn(s.listItem, { [s.listItemCompleted]: todo.completed })}>
      <ToggleTodoComplete id={todo.id} completed={todo.completed} />

      <span>{todo.title}</span>

      <DeleteTodo id={todo.id} />
    </li>
  );
};
