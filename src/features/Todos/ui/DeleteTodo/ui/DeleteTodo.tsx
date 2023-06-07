import s from "./DeleteTodo.module.scss";
import { useAppDispatch } from "src/shared/hooks/useAppHooks";
import { deleteTodo } from "src/features/Todos/model/todoActions";

interface DeleteTodoProps {
  id: number;
}

export const DeleteTodo = ({ id }: DeleteTodoProps) => {
  const dispatch = useAppDispatch();

  const onDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <button className={s.deleteButton} onClick={() => onDelete(id)}>
      &#10008;
    </button>
  );
};
