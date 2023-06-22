import cn from 'classnames';

import { Todo } from 'entities/Todo/model/types';

import { DeleteTodo } from '../DeleteTodo/DeleteTodo';
import { ToggleTodoComplete } from '../ToggleTodo/ToggleTodo';

import s from './TodoItem.module.scss';

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
