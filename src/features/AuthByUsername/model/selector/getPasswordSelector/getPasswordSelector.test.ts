import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { LoginSchema } from '../../types/loginSchema';

import { getPasswordSelector } from './getPasswordSelector';

describe('test getPasswordSelector', () => {
  test('return todos', () => {
    const MOCK_LOGIN: LoginSchema = {
      status: 'idle',
      error: 'ERROR',
      username: 'Batman',
      password: 'Password',
    };
    const state: DeepPartial<StateSchema> = {
      login: MOCK_LOGIN,
    };

    expect(getPasswordSelector(state as StateSchema)).toEqual('Password');
  });
});
