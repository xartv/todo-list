import type { Meta, StoryObj } from '@storybook/react';

import AvatarImg from '../../assets/test/avatar.jpeg';

import { Avatar, AvatarSize } from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const PrimarySmall: Story = {
  args: {
    src: AvatarImg,
  },
};
export const PrimaryMedium: Story = {
  args: {
    src: AvatarImg,
    size: AvatarSize.M,
  },
};
