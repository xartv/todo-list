import * as React from 'react';

import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/globalConsts';

import { Theme, ThemeContext } from '../lib/ThemeContext';

export interface ThemeProviderProps {
  initialTheme?: Theme;
  children: React.ReactNode;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme || initialTheme);

  const defaulProps = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaulProps}>{children}</ThemeContext.Provider>;
};
