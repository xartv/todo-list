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

export const getRouteTodos = () => '/todos';
export const getRouteTestPage = () => `/test`;
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => `/articles`;
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => `/articles/create`;
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => `/admin`;
export const getRouteNotFound = () => `*`;
export const getRouteForbiddenPage = () => `/forbidden`;
