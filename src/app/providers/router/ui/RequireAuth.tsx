import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getAuthUserSelector } from 'entities/User';

import { ROUTE_PATHS } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector(getAuthUserSelector);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={ROUTE_PATHS.test_page} state={{ from: location }} replace />;
  }

  return children;
}
