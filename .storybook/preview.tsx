import type { Preview } from '@storybook/react';

import { RouteDecorator } from '../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { StyleDecorator } from '../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { TranslationDecorator } from '../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { Theme } from '../src/shared/const/theme';

import i18n from './i18next';

const preview: Preview = {
  globals: {
    locale: 'ru',
    locales: {
      en: 'English',
      ru: 'Russian',
    },
    __PROJECT__: 'storybook',
  },
  parameters: {
    i18n,
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: Theme.LIGHT, color: '#015ee9' },
        { name: 'dark', class: Theme.DARK, color: '#35086f' },
      ],
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouteDecorator, TranslationDecorator],
};

export default preview;
