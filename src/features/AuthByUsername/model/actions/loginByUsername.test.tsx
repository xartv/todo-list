import axios from 'axios';
import { Dispatch } from 'redux';
import { vi } from 'vitest';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { userActions } from 'entities/User';

import { loginByUsername } from './loginByUsername';

describe('test loginByUsername', () => {
  vi.mock('axios');
  const mockedAxios = vi.mocked(axios, true);

  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = vi.fn();
    getState = vi.fn();
  });

  test('post', async () => {
    const userData = { username: '123', id: 1, password: '122' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const action = loginByUsername({ username: '123', password: '123' });
    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthUser(userData));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });
});
