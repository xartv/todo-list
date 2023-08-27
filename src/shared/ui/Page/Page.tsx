import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import cn from 'classnames';

import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';

import s from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ callback: onScrollEnd, wrapperRef, triggerRef });

  return (
    <section ref={wrapperRef} className={cn(s.pageWrapper, className)}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
