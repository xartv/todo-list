import { createSelector } from '@reduxjs/toolkit';

import { getAuthUserSelector } from 'entities/User';

import { ReactComponent as ArticleIcon } from 'shared/assets/icons/articles.svg';
import { ReactComponent as ProfileIcon } from 'shared/assets/icons/profile.svg';
import { ReactComponent as TestPageIcon } from 'shared/assets/icons/test-page.svg';
import { ReactComponent as TodoIcon } from 'shared/assets/icons/todo.svg';
import { getRouteArticles, getRouteProfile, getRouteTestPage, getRouteTodos } from 'shared/const/router';

import { SidebarLinks } from '../types/sidebar';

export const getSidebarItemsSelector = createSelector(getAuthUserSelector, authUser => {
  const sidebarItems: SidebarLinks[] = [
    {
      title: 'sidebar.test',
      link: getRouteTestPage(),
      icon: TestPageIcon,
    },
  ];

  if (authUser) {
    sidebarItems.push(
      {
        title: 'sidebar.zadachi',
        link: getRouteTodos(),
        icon: TodoIcon,
        isAuth: true,
      },
      {
        title: 'sidebar.profile',
        link: getRouteProfile(String(authUser.id)),
        icon: ProfileIcon,
        isAuth: true,
      },
      {
        title: 'sidebar.articles',
        link: getRouteArticles(),
        icon: ArticleIcon,
        isAuth: true,
      },
    );
  }

  return sidebarItems;
});
