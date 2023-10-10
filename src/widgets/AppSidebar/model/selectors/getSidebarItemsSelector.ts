import { createSelector } from '@reduxjs/toolkit';

import { getAuthUserSelector } from 'entities/User';

import { ReactComponent as ArticleIcon } from 'shared/assets/icons/articles.svg';
import { ReactComponent as ProfileIcon } from 'shared/assets/icons/profile.svg';
import { ReactComponent as TestPageIcon } from 'shared/assets/icons/test-page.svg';
import { ReactComponent as TodoIcon } from 'shared/assets/icons/todo.svg';
import { ROUTE_PATHS } from 'shared/const/router';

import { SidebarLinks } from '../types/sidebar';

export const getSidebarItemsSelector = createSelector(getAuthUserSelector, authUser => {
  const sidebarItems: SidebarLinks[] = [
    {
      title: 'sidebar.test',
      link: ROUTE_PATHS.test_page,
      icon: TestPageIcon,
    },
  ];

  if (authUser) {
    sidebarItems.push(
      {
        title: 'sidebar.zadachi',
        link: ROUTE_PATHS.todos,
        icon: TodoIcon,
        isAuth: true,
      },
      {
        title: 'sidebar.profile',
        link: `${ROUTE_PATHS.profile}${authUser?.id}`,
        icon: ProfileIcon,
        isAuth: true,
      },
      {
        title: 'sidebar.articles',
        link: ROUTE_PATHS.articles,
        icon: ArticleIcon,
        isAuth: true,
      },
    );
  }

  return sidebarItems;
});
