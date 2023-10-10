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
