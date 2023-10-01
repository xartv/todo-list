import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import TestPage from './TestPage';

const meta: Meta<typeof TestPage> = {
  component: TestPage,
};

export default meta;
type Story = StoryObj<typeof TestPage>;

export const Primary: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};