import s from "./TodoControls.module.scss";

interface TodoControlsProps {
  value: string;
  setValue: (value: string) => void;
  onClick: () => void;
}

export const TodoControls = ({ value, setValue, onClick }: TodoControlsProps) => (
    <div className={s.controls}>
      <input
        type="text"
        value={value}
        className={s.input}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onClick}>Add todo</button>
    </div>
  );
