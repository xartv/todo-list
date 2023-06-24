import { screen } from '@testing-library/react';

import { withRender } from 'shared/lib/tests/withRender';

import { AddTodo } from './AddTodo';

describe('test AddTodo', () => {
  test('render', () => {
    withRender(<AddTodo />, {
      initialState: { todoListReducer: { todos: [], error: null } },
    });
    expect(screen.getByTestId('add-todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-todo-button')).toBeInTheDocument();
  });
});
