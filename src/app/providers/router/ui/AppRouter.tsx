import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../../../shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <React.Suspense fallback={<div>"LOADING..."</div>}>
              <div className="page-wrapper">{element}</div>
            </React.Suspense>
          }
        />
      ))}
    </Routes>
  );
};