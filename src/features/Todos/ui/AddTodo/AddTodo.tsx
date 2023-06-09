import * as React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { addTodo, getTodosSelector, TodoEntity } from 'entities/Todo';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { Button } from 'shared/ui/Button';

import s from './AddTodo.module.scss';

export const AddTodo = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const [value, setValue] = React.useState('');

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const todos = useSelector(getTodosSelector);

  const onAddTodo = () => {
    if (!value.trim()) {
      setValue('');
      return;
    }

    const newTodo: TodoEntity = {
      title: value,
      id: Date.now(),
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setValue('');
  };

  const onAddByEnterKey: React.KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.key === 'Enter') {
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
        data-testid={'add-todo-input'}
        ref={inputRef}
        type="text"
        value={value}
        className={s.input}
        onChange={event => setValue(event.target.value)}
        onKeyDown={onAddByEnterKey}
      />
      <Button data-testid={'add-todo-button'} onClick={onAddTodo}>
        {t('todos.dobavit')}
      </Button>
    </div>
  );
};
