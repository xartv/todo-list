import { RouteProps } from 'react-router-dom';

import { UserRole } from 'entities/User';

export type CustomRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
