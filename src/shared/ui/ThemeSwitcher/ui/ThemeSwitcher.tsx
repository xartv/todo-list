import cn from 'classnames';

import { Theme } from 'app/App';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

import { ReactComponent as Dark } from 'shared/assets/icons/dark-theme.svg';
import { ReactComponent as Light } from 'shared/assets/icons/light-theme.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';

import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR} className={cn(s.themeButton, className)} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <Light /> : <Dark />}
    </Button>
  );
};
