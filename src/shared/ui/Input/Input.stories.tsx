import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    title: 'title',
    value: 'Test',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'title',
    value: 'Test',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
