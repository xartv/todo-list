import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { AppRouter } from 'app/providers/router';

import { AppHeader } from 'widgets/AppHeader';
import { AppSidebar } from 'widgets/AppSidebar';

import { userActions } from 'entities/User';
import { getInitSelector } from 'entities/User/model/selectors/getInitSelector/getInitSelector';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { useTheme } from 'shared/hooks/useTheme';

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { theme } = useTheme();

  const init = useSelector(getInitSelector);

  useEffect(() => {
    if (pathname === '/') {
      navigate('/todos');
    }
  }, [navigate, pathname]);

  useEffect(() => {
    dispatch(userActions.initAuth());
  }, [dispatch]);

  return (
    <div className={cn('app', theme)}>
      <Suspense>
        <AppHeader />
        <div className="app-container">
          <AppSidebar />
          {init && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
