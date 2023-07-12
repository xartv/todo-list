import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

import { ECountries } from 'entities/Country';
import { ECurrency } from 'entities/Currency';

import avatar from 'shared/assets/test/avatar.jpeg';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Primary: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        formData: {
          age: '27',
          city: 'Gotham',
          firstname: 'Bruce',
          lastname: 'Wayne',
          country: ECountries.BELARUS,
          username: 'Batman',
          currency: ECurrency.BYN,
          avatar: avatar,
        },
      },
    }),
  ],
};

export const PrimaryDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        formData: {
          age: '27',
          city: 'Gotham',
          firstname: 'Bruce',
          lastname: 'Wayne',
          country: ECountries.BELARUS,
          username: 'Batman',
          currency: ECurrency.BYN,
          avatar: avatar,
        },
      },
    }),
  ],
};
