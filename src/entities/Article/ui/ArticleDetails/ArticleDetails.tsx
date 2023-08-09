import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader } from 'shared/lib/components/DynamicReducerLoader';
import { Text } from 'shared/ui/Text/Text';

import { getArticleById } from '../../model/actions/articleActions';
import {
  getArticleDataSelector,
  getArticleErrorSelector,
  getArticleStatusSelector,
} from '../../model/selectors/articleSelectors';
import { articleReducer } from '../../model/slice/articleSlice';

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
  const error = useSelector(getArticleErrorSelector);

  useEffect(() => {
    dispatch(getArticleById(id));
  }, [dispatch, id]);

  let content;

  if (status === 'loading') {
    content = <div>{'LOADING...'}</div>;
  }

  if (error) {
    content = <div>{'ERROR'}</div>;
  }

  if (article) {
    content = (
      <div>
        {article.id}
        <Text title={article.title} description={article.subtitle} />
      </div>
    );
  }

  return (
    <DynamicReducerLoader asyncReducers={articleReducerObject} removeOnUnmount>
      {content}
    </DynamicReducerLoader>
  );
});
