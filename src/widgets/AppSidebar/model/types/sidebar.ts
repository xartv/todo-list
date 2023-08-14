import { FC, SVGProps } from 'react';

export interface SidebarLinks {
  title: string;
  link: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  isAuth?: boolean;
}
