import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

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

export const Inverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.INVERTED,
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.DISABLED,
  },
};

export const SizeS: Story = {
  args: {
    children: 'Text',
    size: ButtonSize.S,
  },
};

export const SizeM: Story = {
  args: {
    children: 'Text',
    size: ButtonSize.M,
  },
};

export const SizeL: Story = {
  args: {
    children: 'Text',
    size: ButtonSize.L,
  },
};

export const SizeXL: Story = {
  args: {
    children: 'Text',
    size: ButtonSize.XL,
  },
};
