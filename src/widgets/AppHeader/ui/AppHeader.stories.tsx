import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { AppHeader } from './AppHeader';

const meta: Meta<typeof AppHeader> = {
  component: AppHeader,
};

export default meta;
type Story = StoryObj<typeof AppHeader>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
