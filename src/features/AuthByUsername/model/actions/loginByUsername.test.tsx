import axios from 'axios';
import { vi } from 'vitest';

import { userActions } from 'entities/User';

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

describe('test loginByUsername', () => {
  vi.mock('axios');
  const mockedAxios = vi.mocked(axios, true);

  test('success', async () => {
    const userData = { username: '123', id: 1, password: '122' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '122' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthUser(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '122' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Неправильное имя пользователя или пароль');
  });
});
