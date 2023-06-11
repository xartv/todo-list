import { deleteTodo } from 'features/Todos/model/todoActions';

import { useAppDispatch } from 'shared/hooks/useAppHooks';

import s from './DeleteTodo.module.scss';

interface DeleteTodoProps {
  id: number;
}

export const DeleteTodo = ({ id }: DeleteTodoProps) => {
  const dispatch = useAppDispatch();

  const onDelete = (todoId: number) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <button className={s.deleteButton} onClick={() => onDelete(id)}>
      &#10008;
    </button>
  );
};
