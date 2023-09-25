import { RouteProps } from 'react-router-dom';

import { AdminPanelPage } from 'pages/AdminPanelPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ForbiddenPage } from 'pages/ForbiddenPage';
import { NothingFoundPage } from 'pages/NothingFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { TestPage } from 'pages/TestPage';
import { TodosPage } from 'pages/TodosPage';

import { UserRole } from 'entities/User';

export type CustomRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};

export enum APP_ROUTES {
  TODOS = 'todos',
  TEST_PAGE = 'test_page',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',

  NOT_FOUND = 'not_found',
  FORBIDDEN_PAGE = 'forbidden_page',
}

export const ROUTE_PATHS: Record<APP_ROUTES, string> = {
  [APP_ROUTES.TODOS]: '/todos',
  [APP_ROUTES.TEST_PAGE]: '/test',
  [APP_ROUTES.PROFILE]: '/profile/',
  [APP_ROUTES.ARTICLES]: '/articles',
  [APP_ROUTES.ARTICLE_DETAILS]: '/articles/',
  [APP_ROUTES.ARTICLE_CREATE]: '/articles/create',
  [APP_ROUTES.ARTICLE_EDIT]: '/articles/:id/edit',
  [APP_ROUTES.ADMIN_PANEL]: '/admin',

  [APP_ROUTES.NOT_FOUND]: '*',
  [APP_ROUTES.FORBIDDEN_PAGE]: '/forbidden',
};

export const routeConfig: CustomRouteProps[] = [
  { path: ROUTE_PATHS.todos, element: <TodosPage />, authOnly: true },
  { path: ROUTE_PATHS.test_page, element: <TestPage /> },
  { path: `${ROUTE_PATHS.profile}:id`, element: <ProfilePage />, authOnly: true },
  { path: ROUTE_PATHS.articles, element: <ArticlesPage />, authOnly: true },
  { path: `${ROUTE_PATHS.article_details}:id`, element: <ArticleDetailsPage />, authOnly: true },
  { path: `${ROUTE_PATHS.article_create}`, element: <ArticleEditPage />, authOnly: true },
  { path: `${ROUTE_PATHS.article_edit}`, element: <ArticleEditPage />, authOnly: true },
  {
    path: `${ROUTE_PATHS.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },

  { path: ROUTE_PATHS.not_found, element: <NothingFoundPage /> },
  { path: ROUTE_PATHS.forbidden_page, element: <ForbiddenPage /> },
];
