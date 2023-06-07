import cn from "classnames";

import { DeleteTodo } from "src/features/Todos/ui/DeleteTodo";
import { ToggleTodoComplete } from "src/features/Todos/ui/ToggleTodo";

import { Todo } from "src/entities/Todo/model/types";

import s from "./TodoItem.module.scss";


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
