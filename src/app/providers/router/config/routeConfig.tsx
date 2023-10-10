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

import { ROUTE_PATHS } from 'shared/const/router';
import { CustomRouteProps } from 'shared/types/router';

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
