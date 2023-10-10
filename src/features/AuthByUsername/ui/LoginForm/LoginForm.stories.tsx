import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {
    className: 'app_theme_light',
  },
  decorators: [
    StoreDecorator({
      login: { username: 'Test', password: 'pass' },
    }),
  ],
};

export const PrimaryDark: Story = {
  args: {
    className: 'app_theme_dark',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      login: { username: 'Test', password: 'pass' },
    }),
  ],
};

export const Error: Story = {
  args: {
    className: 'app_theme_light',
  },
  decorators: [
    StoreDecorator({
      login: { status: 'reject' },
    }),
  ],
};

export const ErrorDark: Story = {
  args: {
    className: 'app_theme_dark',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      login: { status: 'reject' },
    }),
  ],
};

export const Loading: Story = {
  args: {
    className: 'app_theme_light',
  },
  decorators: [
    StoreDecorator({
      login: { status: 'loading' },
    }),
  ],
};

export const LoadingDark: Story = {
  args: {
    className: 'app_theme_dark',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      login: { status: 'loading' },
    }),
  ],
};
