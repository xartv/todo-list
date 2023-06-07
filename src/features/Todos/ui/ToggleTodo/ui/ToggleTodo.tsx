import { toggleComplete } from "src/features/Todos/model/todoActions";
import { useAppDispatch } from "src/shared/hooks/useAppHooks";

interface ToggleTodoProps {
  id: number;
  completed: boolean;
}

export const ToggleTodoComplete = ({ id, completed }: ToggleTodoProps) => {
  const dispatch = useAppDispatch();

  const onToggleComplete = (id: number) => {
    dispatch(toggleComplete(id));
  };

  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={() => onToggleComplete(id)}
    />
  );
};
