import { StoryFn } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';

import { Theme } from 'shared/const/theme';

export function ThemeDecorator(theme: Theme) {
  return function story(Story: StoryFn) {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <Story />
        </div>
      </ThemeProvider>
    );
  };
}
