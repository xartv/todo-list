import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import TestPage from './TestPage';

const meta: Meta<typeof TestPage> = {
  component: TestPage,
};

export default meta;
type Story = StoryObj<typeof TestPage>;

export const Primary: Story = {
  decorators: [StoreDecorator({})],
};
