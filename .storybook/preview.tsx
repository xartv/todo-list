import type { Preview } from '@storybook/react';

import { Theme } from '../src/app/providers/ThemeProvider/lib/ThemeContext';
import { RouteDecorator } from '../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { StyleDecorator } from '../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { TranslationDecorator } from '../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';

import i18n from './i18next';

const preview: Preview = {
  globals: {
    locale: 'ru',
    locales: {
      en: 'English',
      ru: 'Russian',
    },
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
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouteDecorator, TranslationDecorator],
};

export default preview;
