import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  component: AppLink,
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.INVERTED,
  },
};

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
