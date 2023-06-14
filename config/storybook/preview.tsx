import React from 'react';
import type { Preview } from '@storybook/react';

import { ThemeProvider } from '../../src/app/providers/ThemeProvider';

import '../../src/app/styles/index.scss';
import '../../src/app/styles/themes/light.scss';
import '../../src/app/styles/themes/dark.scss';

import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => (
      <ThemeProvider initialTheme={Theme.LIGHT}>
        <div className={`app ${Theme.LIGHT}`}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
