import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

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

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Inverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.INVERTED,
  },
};

export const InvertedDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const ClearInvertedDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Disabled: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.DISABLED,
  },
};

export const DisabledDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.DISABLED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
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
