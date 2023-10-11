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

import {
  getRouteAdminPanel,
  getRouteArticleCreate,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteForbiddenPage,
  getRouteNotFound,
  getRouteProfile,
  getRouteTestPage,
  getRouteTodos,
} from 'shared/const/router';
import { CustomRouteProps } from 'shared/types/router';

export const routeConfig: CustomRouteProps[] = [
  { path: getRouteTodos(), element: <TodosPage />, authOnly: true },
  { path: getRouteTestPage(), element: <TestPage /> },
  { path: getRouteProfile(':id'), element: <ProfilePage />, authOnly: true },
  { path: getRouteArticles(), element: <ArticlesPage />, authOnly: true },
  { path: getRouteArticleDetails(':id'), element: <ArticleDetailsPage />, authOnly: true },
  { path: getRouteArticleCreate(), element: <ArticleEditPage />, authOnly: true },
  { path: getRouteArticleEdit(':id'), element: <ArticleEditPage />, authOnly: true },
  {
    path: getRouteAdminPanel(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },

  { path: getRouteNotFound(), element: <NothingFoundPage /> },
  { path: getRouteForbiddenPage(), element: <ForbiddenPage /> },
];
