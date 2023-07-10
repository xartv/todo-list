import cn from 'classnames';

import s from './Avatar.module.scss';

export enum AvatarSize {
  S = 's',
  M = 'm',
}

interface AvatarProps {
  className?: string;
  src?: string;
  size?: AvatarSize;
}

export const Avatar = ({ className, src, size = AvatarSize.S }: AvatarProps) => (
  <img src={src} className={cn(s.root, s[size], className)}></img>
);
