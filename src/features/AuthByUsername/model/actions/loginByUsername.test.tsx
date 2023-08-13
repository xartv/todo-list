import { userActions } from 'entities/User';

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

describe('test loginByUsername', () => {
  const thunk = new TestAsyncThunk(loginByUsername);

  test('success', async () => {
    const userData = {
      username: '123',
      id: 1,
      password: '122',
      avatar:
        'https://kartinki.pibig.info/uploads/posts/2023-04/1682016583_kartinki-pibig-info-p-kartinka-kotik-za-kompyuterom-arti-instagr-1.jpg',
    };

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
    const result = await thunk.callThunk({ username: '123', password: '122' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthUser(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('error', async () => {
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '123', password: '122' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Неправильное имя пользователя или пароль');
  });
});
