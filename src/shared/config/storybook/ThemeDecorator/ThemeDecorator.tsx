import { StoryFn } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export function ThemeDecorator(theme: Theme) {
  return function story(Story: StoryFn) {
    return (
      <ThemeProvider initialTheme={Theme.LIGHT}>
        <div className={`app ${theme}`}>
          <Story />
        </div>
      </ThemeProvider>
    );
  };
}
