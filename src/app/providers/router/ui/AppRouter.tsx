import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <React.Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </React.Suspense>
          }
        />
      ))}
    </Routes>
  );
};
