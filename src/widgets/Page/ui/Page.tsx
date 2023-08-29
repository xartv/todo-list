import { memo, MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';

import { StateSchema } from 'app/providers/StoreProvider';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';
import { useThrottle } from 'shared/hooks/useThrottle';

import { getScrollByPath } from '../model/selectors/pageSelectors';
import { pageActions } from '../model/slices/pageSlice';

import s from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
  const dispatch = useAppDispatch();

  const location = useLocation();

  const pageScrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, location.pathname));

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      pageActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: location.pathname,
      }),
    );
  }, 500);

  useInfiniteScroll({ callback: onScrollEnd, wrapperRef, triggerRef });

  useEffect(() => {
    wrapperRef.current.scrollTop = pageScrollPosition;
  }, [pageScrollPosition]);

  return (
    <section ref={wrapperRef} className={cn(s.pageWrapper, className)} onScroll={onScroll}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
