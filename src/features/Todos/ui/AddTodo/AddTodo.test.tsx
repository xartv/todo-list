import { screen } from '@testing-library/react';

import { withRender } from 'shared/lib/tests/withRender/withRender';

import { AddTodo } from './AddTodo';

describe('test AddTodo', () => {
  test('render', () => {
    withRender(<AddTodo />, {
      initialState: { todos: { list: [], error: null } },
    });
    expect(screen.getByTestId('add-todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-todo-button')).toBeInTheDocument();
  });
});
