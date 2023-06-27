import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';

import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: StoryFn) => {
  return (
    <StoreProvider initialState={state}>
      <Story />
    </StoreProvider>
  );
};
