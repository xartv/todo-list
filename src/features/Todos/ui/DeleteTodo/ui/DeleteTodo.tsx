import * as React from "react";

import s from "./DeleteTodo.module.scss";
import { deleteTodo } from "../../../model/todoActions";
import { useAppDispatch } from "../../../../../shared/hooks/useAppHooks";

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
