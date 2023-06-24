import * as React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Todo } from 'entities/Todo/model/types';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { Button } from 'shared/ui/Button';

import { addTodo } from '../../model/actions/todoActions';
import { getTodosSelector } from '../../model/selectors/getTodosSelector/getTodosSelector';

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

    const newTodo: Todo = {
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
        data-testId={'add-todo-input'}
        ref={inputRef}
        type="text"
        value={value}
        className={s.input}
        onChange={event => setValue(event.target.value)}
        onKeyDown={onAddByEnterKey}
      />
      <Button data-testId={'add-todo-button'} onClick={onAddTodo}>
        {t('todos.dobavit')}
      </Button>
    </div>
  );
};
