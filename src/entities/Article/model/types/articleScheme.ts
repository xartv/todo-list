import { RequestStatuses } from 'shared/types/globalTypes';

import { ArticleEntity } from './articleTypes';

export interface ArticleScheme {
  data?: ArticleEntity;
  status: RequestStatuses;
  error?: string;
}
