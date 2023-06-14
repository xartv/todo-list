import { deleteTodo } from 'features/Todos/model/todoActions';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';

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
    // eslint-disable-next-line i18next/no-literal-string
    <Button theme={ButtonTheme.CLEAR} className={s.deleteButton} onClick={() => onDelete(id)}>
      &#10008;
    </Button>
  );
};
