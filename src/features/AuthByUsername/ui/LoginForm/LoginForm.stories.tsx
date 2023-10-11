import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  decorators: [
    StoreDecorator({
      login: { username: 'Test', password: 'pass' },
    }),
  ],
};

export const Error: Story = {
  decorators: [
    StoreDecorator({
      login: { status: 'reject' },
    }),
  ],
};

export const Loading: Story = {
  decorators: [
    StoreDecorator({
      login: { status: 'loading' },
    }),
  ],
};
