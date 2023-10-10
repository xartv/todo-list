import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

import { AppSidebar } from './AppSidebar';

const meta: Meta<typeof AppSidebar> = {
  component: AppSidebar,
};

export default meta;
type Story = StoryObj<typeof AppSidebar>;

export const Primary: Story = {
  decorators: [
    StoreDecorator({
      users: { authData: { username: 'Test', password: 'pass' } },
    }),
  ],
};

export const PrimaryDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      users: { authData: { username: 'Test', password: 'pass' } },
    }),
  ],
};
