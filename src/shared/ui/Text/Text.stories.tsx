import type { Meta, StoryObj } from '@storybook/react';

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

export const Error: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    theme: TextTheme.ERROR,
  },
};
