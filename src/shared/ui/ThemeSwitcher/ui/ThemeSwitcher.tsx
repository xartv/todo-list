import cn from 'classnames';

import { Theme } from 'app/App';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

import { ReactComponent as Dark } from 'shared/assets/icons/dark-theme.svg';
import { ReactComponent as Light } from 'shared/assets/icons/light-theme.svg';
import { Button } from 'shared/ui/Button';

import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={cn(s.themeButton, className, { [s.dark]: theme === Theme.DARK })} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <Light /> : <Dark />}
    </Button>
  );
};
