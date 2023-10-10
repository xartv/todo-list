import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { CustomRouteProps } from 'shared/types/router';
import { PageLoader } from 'shared/ui/PageLoader';

import { routeConfig } from '../config/routeConfig';

import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
  const renderWithAuth = useCallback((route: CustomRouteProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithAuth)}</Routes>;
};
