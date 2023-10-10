import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, odit! Pariatur, expedita minus quam nesciunt laudantium minima rem laborum, fuga earum, excepturi saepe. Earum minima aspernatur ut officia laudantium accusamus.',
    isOpen: true,
    className: 'app_theme_light',
  },
};

export const PrimaryDark: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, odit! Pariatur, expedita minus quam nesciunt laudantium minima rem laborum, fuga earum, excepturi saepe. Earum minima aspernatur ut officia laudantium accusamus.',
    isOpen: true,
    className: 'app_theme_dark',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
