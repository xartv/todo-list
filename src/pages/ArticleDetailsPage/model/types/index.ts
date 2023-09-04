import { CommentsSchema } from './commentsSchema';
import { RecommendationsSchema } from './recommendationsSchema';

export interface ArticleDetailsSchema {
  comments: CommentsSchema;
  recommendations: RecommendationsSchema;
}
