import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

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

export const PrimaryLoginDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
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

export const PrimaryLogoutDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      users: {
        authData: { id: 1, username: 'Test', password: 'pass' },
      },
    }),
  ],
};
