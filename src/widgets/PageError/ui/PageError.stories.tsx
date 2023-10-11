import type { Meta, StoryObj } from '@storybook/react';

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
