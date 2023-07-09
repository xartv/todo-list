import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { getErrorMessageSelector } from './getErrorMessageSelector';

describe('test getErrorMessageSelector', () => {
  test('return todos', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        error: 'OMG, ERROR',
      },
    };

    expect(getErrorMessageSelector(state as StateSchema)).toEqual('OMG, ERROR');
  });
});
