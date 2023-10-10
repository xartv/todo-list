import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
  component: PageError,
};

export default meta;
type Story = StoryObj<typeof PageError>;

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
