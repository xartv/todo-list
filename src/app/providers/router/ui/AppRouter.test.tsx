import { screen } from '@testing-library/react';

import { UserRole } from 'entities/User';

import { getRouteAdminPanel, getRouteArticles, getRouteProfile, getRouteTestPage } from 'shared/const/router';
import { withRender } from 'shared/lib/tests/withRender/withRender';

import { AppRouter } from './AppRouter';

describe('app/router/AppRouter', () => {
  test('render', async () => {
    withRender(<AppRouter />, {
      route: getRouteTestPage(),
    });

    const page = await screen.findByTestId('TestPage');

    expect(page).toBeInTheDocument();
  });

  test('not found', async () => {
    withRender(<AppRouter />, {
      route: '/gfdgdfhfg',
    });

    const page = await screen.findByTestId('NothingFoundPage');

    expect(page).toBeInTheDocument();
  });

  test('redirect not autorized user', async () => {
    withRender(<AppRouter />, {
      route: getRouteArticles(),
    });

    const page = await screen.findByTestId('TestPage');

    expect(page).toBeInTheDocument();
  });

  test('authorized user', async () => {
    withRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        users: {
          authData: {},
        },
      },
    });

    const page = await screen.findByTestId('ProfilePage');

    expect(page).toBeInTheDocument();
  });

  test('has no required role', async () => {
    withRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        users: {
          authData: {},
        },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');

    expect(page).toBeInTheDocument();
  });

  test('has required role', async () => {
    withRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        users: {
          authData: {
            roles: [UserRole.ADMIN],
          },
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');

    expect(page).toBeInTheDocument();
  });
});
