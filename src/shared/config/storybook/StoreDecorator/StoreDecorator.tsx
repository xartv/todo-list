import { StoryFn } from '@storybook/react';

import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { loginReducer } from 'features/AuthByUsername';

import { profileReducer } from 'entities/Profile/model/slice/profileSlice';

import { ReducersList } from 'shared/lib/components/DynamicReducerLoader';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: StoryFn) => {
  return (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <Story />
    </StoreProvider>
  );
};
