import { RequestStatuses } from 'shared/types/globalTypes';

export interface AddNewCommentSchema {
  text?: string;
  error?: string;
  status: RequestStatuses;
}
