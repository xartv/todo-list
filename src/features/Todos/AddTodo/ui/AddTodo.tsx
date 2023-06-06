import * as React from "react";
import s from "./AddTodo.module.scss";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../shared/hooks/useAppHooks";
import { getTodosSelector } from "../../../../widgets/TodoList/model/todoListSelectors";
import { Todo } from "../../../../entities/TodoItem/model/types";
import { addTodo } from "../../../../widgets/TodoList/model/todoActions";

export const AddTodo = () => {
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
