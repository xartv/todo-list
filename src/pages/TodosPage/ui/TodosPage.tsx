import * as React from 'react';
import { orderBy } from 'lodash';

import { Page } from 'widgets/Page';

import { AddTodo, DeleteTodo, ToggleTodoComplete } from 'features/Todos';

import { fetchTodos, getTodosSelector, TodoItem } from 'entities/Todo';

import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppHooks';

import s from './TodosPage.module.scss';

const TodosPage = () => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector(getTodosSelector);
  const sortedTodos = orderBy(todos, ['completed', 'id'], ['asc', 'asc']); // возможно нужно сортить массив непосредственно в сторе, для этого нужна санка

  React.useEffect(() => {
    dispatch(fetchTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <AddTodo />

      <ul className={s.todosWrapper}>
        {sortedTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            ToggleTodoComplete={<ToggleTodoComplete id={todo.id} completed={todo.completed} />}
            DeleteTodo={<DeleteTodo id={todo.id} />}
          />
        ))}
      </ul>
    </Page>
  );
};

export default TodosPage;
