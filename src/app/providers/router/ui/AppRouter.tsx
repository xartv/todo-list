import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { CustomRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';

import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
  const renderWithAuth = useCallback((route: CustomRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">{route.element}</div>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithAuth)}</Routes>;
};
