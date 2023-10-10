import { memo } from 'react';
import cn from 'classnames';

import { ReactComponent as Dark } from 'shared/assets/icons/dark-theme.svg';
import { ReactComponent as Light } from 'shared/assets/icons/light-theme.svg';
import { Theme } from 'shared/const/theme';
import { useTheme } from 'shared/hooks/useTheme';

import { Button, ButtonTheme } from '../Button';

import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR_INVERTED} className={cn(s.themeButton, className)} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <Light /> : <Dark />}
    </Button>
  );
});
