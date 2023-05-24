import * as React from "react";

import { useAppDispatch } from "../../store/hooks";
import { addTodo } from "../store/todoListSlice/todoActions";
import { Todo } from "../../types";

import s from "./TodoControls.module.scss";
import { useSelector } from "react-redux";
import { getTodosSelector } from "../store/todoListSlice/todoListSelectors";

export const TodoControls = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState("");

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const todos = useSelector(getTodosSelector);

  const onAddTodo = () => {
    if (!value.trim()) {
      setValue("");
      return;
    }

    const newTodo: Todo = {
      title: value,
      id: Date.now(),
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setValue("");
  };

  const onAddByEnterKey: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      onAddTodo();
    }
  };

  React.useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }, [todos]);

  return (
    <div className={s.controls}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        className={s.input}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={onAddByEnterKey}
      />
      <button onClick={onAddTodo}>Add todo</button>
    </div>
  );
};
