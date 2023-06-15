import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
