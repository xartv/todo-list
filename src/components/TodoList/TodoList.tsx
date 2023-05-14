import { Todo } from "../../types";

import s from "./TodoList.module.scss";
import { TodoItem } from "../TodoItem";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

export const TodoList = ({ todos, onDelete, onToggleComplete }: TodoListProps) => {
  return (
    <ul className={s.todosWrapper}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggleComplete={onToggleComplete}/>
      ))}
    </ul>
  );
};
