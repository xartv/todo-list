import React from "react";

import { useAppDispatch } from "../../store/hooks";

import { addTodo } from "../store/todoListSlice/todoListSlice";
import { Todo } from "../../types";

import s from "./TodoControls.module.scss";

export const TodoControls = () => {
  const [value, setValue] = React.useState("");

  const dispatch = useAppDispatch();

  const onAddTodo = () => {
    if (!value) return;

    const newTodo: Todo = {
      title: value,
      id: Date.now(),
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setValue("");
  };


  return (
    <div className={s.controls}>
      <input
        type="text"
        value={value}
        className={s.input}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onAddTodo}>Add todo</button>
    </div>
  );
};
