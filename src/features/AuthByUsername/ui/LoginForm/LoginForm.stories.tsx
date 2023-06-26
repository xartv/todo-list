import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {
    className: 'app_theme_light',
  },
};

export const PrimaryDark: Story = {
  args: {
    className: 'app_theme_dark',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};