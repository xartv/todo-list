import { RouteProps } from 'react-router-dom';

import { NothingFoundPage } from 'pages/NothingFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { TestPage } from 'pages/TestPage';
import { TodosPage } from 'pages/TodosPage';

export type CustomRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum APP_ROUTES {
  TODOS = 'todos',
  TEST_PAGE = 'test_page',
  PROFILE = 'profile',

  NOT_FOUND = 'not_found',
}

export const ROUTE_PATHS: Record<APP_ROUTES, string> = {
  [APP_ROUTES.TODOS]: '/todos',
  [APP_ROUTES.TEST_PAGE]: '/test',
  [APP_ROUTES.PROFILE]: '/profile',
  [APP_ROUTES.NOT_FOUND]: '*',
};

export const routeConfig: CustomRouteProps[] = [
  { path: ROUTE_PATHS.todos, element: <TodosPage />, authOnly: true },
  { path: ROUTE_PATHS.test_page, element: <TestPage /> },
  { path: ROUTE_PATHS.profile, element: <ProfilePage />, authOnly: true },
  { path: ROUTE_PATHS.not_found, element: <NothingFoundPage /> },
];
