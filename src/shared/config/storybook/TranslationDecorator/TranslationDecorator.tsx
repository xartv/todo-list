import * as React from 'react';
import { StoryFn } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';

import i18n from 'shared/config/i18n/i18n';

export const TranslationDecorator = (Story: StoryFn) => (
  <React.Suspense fallback="">
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  </React.Suspense>
);
