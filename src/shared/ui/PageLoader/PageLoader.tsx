import cn from 'classnames';

import { Loader } from '../Loader/Loader';

import s from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={cn(s.root, className)}>
      <Loader />
    </div>
  );
};
