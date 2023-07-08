import { AnyAction, AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { MockedFunction, vi } from 'vitest';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

vi.mock('axios');
const mockedAxios = vi.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch<AnyAction>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: MockedFunctionDeep<AxiosStatic>;

  // eslint-disable-next-line
  navigate: MockedFunction<any>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = vi.fn();
    this.getState = vi.fn();

    this.api = mockedAxios;
    this.navigate = vi.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });

    return result;
  }
}
