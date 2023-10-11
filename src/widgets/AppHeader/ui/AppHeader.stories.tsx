import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { AppHeader } from './AppHeader';

const meta: Meta<typeof AppHeader> = {
  component: AppHeader,
};

export default meta;
type Story = StoryObj<typeof AppHeader>;

export const PrimaryLogin: Story = {
  decorators: [
    StoreDecorator({
      login: { username: 'Test', password: 'pass' },
    }),
  ],
};

export const PrimaryLogout: Story = {
  decorators: [
    StoreDecorator({
      users: {
        authData: { id: 1, username: 'Test', password: 'pass' },
      },
    }),
  ],
};
