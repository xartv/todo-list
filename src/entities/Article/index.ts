export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export {
  getArticleDataSelector,
  getArticleStatusSelector,
  getArticleErrorSelector,
} from './model/selectors/articleSelectors';

export { getArticleById } from './model/actions/articleActions';

export { articleReducer } from './model/slice/articleSlice';

export type { ArticleScheme } from './model/types/articleScheme';
export type { ArticleEntity } from './model/types/articleTypes';
