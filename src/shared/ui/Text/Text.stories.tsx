import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    theme: TextTheme.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    theme: TextTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    theme: TextTheme.ERROR,
  },
};

export const ErrorDark: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
