import * as React from 'react';
import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from 'app/providers/router';

import { AppHeader } from 'widgets/AppHeader';

import './styles/index.css';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    if (pathname === '/') {
      navigate('/todos');
    }
  }, [navigate, pathname]);

  return (
    <div className={cn('app', theme)}>
      <React.Suspense>
        <AppHeader />
        <AppRouter />
      </React.Suspense>
      <button onClick={toggleTheme}>Theme switch</button>
    </div>
  );
}

export default App;
