import cn from 'classnames';

import { TodoEntity } from 'entities/Todo/model/types/TodoEntity';

import s from './TodoItem.module.scss';

interface TodoItemProps {
  todo: TodoEntity;
  ToggleTodoComplete: React.ReactElement;
  DeleteTodo: React.ReactElement;
}

export const TodoItem = ({ todo, DeleteTodo, ToggleTodoComplete }: TodoItemProps) => {
  return (
    <li className={cn(s.listItem, { [s.listItemCompleted]: todo.completed })}>
      {ToggleTodoComplete}

      <span>{todo.title}</span>

      {DeleteTodo}
    </li>
  );
};
