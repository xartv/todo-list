import { FC, SVGProps } from 'react';

import { ReactComponent as ProfileIcon } from 'shared/assets/icons/profile.svg';
import { ReactComponent as TestPageIcon } from 'shared/assets/icons/test-page.svg';
import { ReactComponent as TodoIcon } from 'shared/assets/icons/todo.svg';
import { ROUTE_PATHS } from 'shared/config/routeConfig/routeConfig';

interface SidebarLinks {
  title: string;
  link: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

export const sidebarLinks: SidebarLinks[] = [
  {
    title: 'sidebar.zadachi',
    link: ROUTE_PATHS.todos,
    icon: TodoIcon,
  },
  {
    title: 'sidebar.test',
    link: ROUTE_PATHS.test_page,
    icon: TestPageIcon,
  },
  {
    title: 'sidebar.profile',
    link: ROUTE_PATHS.profile,
    icon: ProfileIcon,
  },
];
