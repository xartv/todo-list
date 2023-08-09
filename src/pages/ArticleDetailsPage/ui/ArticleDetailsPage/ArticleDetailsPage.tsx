import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from 'entities/Article';

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return <ArticleDetails id={id} />;
};

export default memo(ArticleDetailsPage);
