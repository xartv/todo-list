import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarSize } from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const PrimarySmall: Story = {
  args: {
    src: 'https://img2.joyreactor.cc/pics/post/-Music&Atmosphere-%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D0%B5-8-bit-716563.jpeg',
  },
};
export const PrimaryMedium: Story = {
  args: {
    src: 'https://img2.joyreactor.cc/pics/post/-Music&Atmosphere-%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D0%B5-8-bit-716563.jpeg',
    size: AvatarSize.M,
  },
};
