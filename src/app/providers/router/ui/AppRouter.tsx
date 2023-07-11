import { Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { getAuthUserSelector } from 'entities/User';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';

export const AppRouter = () => {
  const authUser = useSelector(getAuthUserSelector);

  const filteredRoutes = useMemo(
    () => (authUser ? routeConfig : routeConfig.filter(route => !route.authOnly)),
    [authUser],
  );

  return (
    <Routes>
      {filteredRoutes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
