import { Fragment, memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader } from 'shared/lib/components/DynamicReducerLoader';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import { getArticleById } from '../../model/actions/articleActions';
import { getArticleDataSelector, getArticleStatusSelector } from '../../model/selectors/articleSelectors';
import { articleReducer } from '../../model/slice/articleSlice';
import { ArticleBlock, ArticleBlockType } from '../../model/types/articleTypes';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import s from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  id: string;
}

const articleReducerObject = {
  article: articleReducer,
};

export const ArticleDetails = memo(({ id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDataSelector);
  const status = useSelector(getArticleStatusSelector);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlock key={block.id} block={block} className={s.block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlock key={block.id} block={block} className={s.block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlock key={block.id} className={s.block} block={block} />;
      default:
        return null;
    }
  }, []);

  let content;

  if (status === 'loading') {
    content = <div>{'LOADING...'}</div>;
  } else if (status === 'reject') {
    content = <div>{'ERROR'}</div>;
  } else if (article) {
    content = (
      <Fragment>
        <div className={s.avatarWrapper}>
          <Avatar size={AvatarSize.M} src={article?.img} className={s.avatar} />
        </div>
        <Text classNames={{ title: s.title }} title={article?.title} description={article?.subtitle} />

        {article?.blocks.map(renderBlock)}
      </Fragment>
    );
  }

  useEffect(() => {
    dispatch(getArticleById(id));
  }, [dispatch, id]);

  return (
    <DynamicReducerLoader asyncReducers={articleReducerObject} removeOnUnmount>
      {content}
    </DynamicReducerLoader>
  );
});
