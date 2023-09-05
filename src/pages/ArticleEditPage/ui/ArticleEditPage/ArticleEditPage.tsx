import { memo } from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';

import { Page } from 'widgets/Page';

import s from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { id } = useParams<{ id: string }>();

  return <Page className={cn(s.root, className)}>{id ? <span>{'Edit'}</span> : <span>{'Create'}</span>}</Page>;
};

export default memo(ArticleEditPage);
