import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

import { AppHeader } from 'widgets/AppHeader';
import { Sidebar } from 'widgets/SideBar';

import './styles/index.scss';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { theme } = useTheme();

  React.useEffect(() => {
    if (pathname === '/') {
      navigate('/todos');
    }
  }, [navigate, pathname]);

  return (
    <div className={cn('app', theme)}>
      <React.Suspense>
        <AppHeader />
        <div className="app-container">
          <Sidebar />
          <AppRouter />
        </div>
      </React.Suspense>
    </div>
  );
}

export default App;
