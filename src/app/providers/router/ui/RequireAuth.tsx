import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getAuthUserSelector, getUserRoles, UserRole } from 'entities/User';

import { ROUTE_PATHS } from 'shared/const/router';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getAuthUserSelector);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles?.length) return true;

    return roles.some(requiredRole => userRoles?.includes(requiredRole));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={ROUTE_PATHS.test_page} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={ROUTE_PATHS.forbidden_page} state={{ from: location }} replace />;
  }

  return children;
}
