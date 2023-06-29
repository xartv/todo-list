import { RequestStatuses } from 'shared/const/globalTypes';

export interface LoginSchema {
  status?: RequestStatuses;
  error?: string;
  username: string;
  password: string;
}
