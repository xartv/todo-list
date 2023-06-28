import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

import { AppHeader } from 'widgets/AppHeader';
import { Sidebar } from 'widgets/SideBar';

import { userActions } from 'entities/User';

import { useAppDispatch } from 'shared/hooks/useAppHooks';

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { theme } = useTheme();

  React.useEffect(() => {
    if (pathname === '/') {
      navigate('/todos');
    }
  }, [navigate, pathname]);

  React.useEffect(() => {
    dispatch(userActions.initAuth());
  }, [dispatch]);

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
