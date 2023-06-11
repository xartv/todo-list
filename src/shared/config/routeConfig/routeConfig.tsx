import { RouteProps } from 'react-router-dom';

import { TodosPage } from 'pages/TodosPage';
import { TestPage } from 'pages/TestPage';
import { NothingFoundPage } from 'pages/NothingFoundPage';

export enum APP_ROUTES {
  TODOS = 'todos',
  TEST_PAGE = 'test_page',
  NOT_FOUND = 'not_found',
}

export const ROUTE_PATHS: Record<APP_ROUTES, string> = {
  [APP_ROUTES.TODOS]: '/todos',
  [APP_ROUTES.TEST_PAGE]: '/test',
  [APP_ROUTES.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
  { path: ROUTE_PATHS.todos, element: <TodosPage /> },
  { path: ROUTE_PATHS.test_page, element: <TestPage /> },
  { path: ROUTE_PATHS.not_found, element: <NothingFoundPage /> },
];
