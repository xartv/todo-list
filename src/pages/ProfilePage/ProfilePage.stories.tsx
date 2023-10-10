import type { Meta, StoryObj } from '@storybook/react';

import { ECountries } from 'entities/Country';
import { ECurrency } from 'entities/Currency';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

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
          avatar:
            'https://news.store.rambler.ru/img/672e5f7081bbc3d9746ee83dd6230ff0?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen',
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
          avatar:
            'https://news.store.rambler.ru/img/672e5f7081bbc3d9746ee83dd6230ff0?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen',
        },
      },
    }),
  ],
};
