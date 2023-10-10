import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
