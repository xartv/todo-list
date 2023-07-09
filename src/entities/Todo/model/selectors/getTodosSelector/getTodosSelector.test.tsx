import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { getTodosSelector } from './getTodosSelector';

describe('test getTodosSelector', () => {
  test('return todos', () => {
    const MOCK_TODO = [{ id: 1, title: 'test', completed: true }];
    const state: DeepPartial<StateSchema> = {
      todos: {
        list: MOCK_TODO,
      },
    };
    expect(getTodosSelector(state as StateSchema)).toEqual(MOCK_TODO);
  });
});
