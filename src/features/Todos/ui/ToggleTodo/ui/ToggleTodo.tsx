import { useAppDispatch } from "../../../../../shared/hooks/useAppHooks";
import { toggleComplete } from "../../../model/todoActions";

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
