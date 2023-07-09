import * as React from 'react';

import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/globalConsts';

import { Theme, ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
