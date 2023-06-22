import * as React from 'react';
import { orderBy } from 'lodash';

import { AddTodo, TodoItem } from 'features/Todos/';
import { fetchTodos } from 'features/Todos/model/actions/todoActions';
import { getTodosSelector } from 'features/Todos/model/selectors/getTodosSelector/getTodosSelector';

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
    <React.Fragment>
      <AddTodo />

      <ul className={s.todosWrapper}>
        {sortedTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TodosPage;
