import { RequestStatuses } from 'shared/types/globalTypes';

export interface LoginSchema {
  status?: RequestStatuses;
  error?: string;
  username: string;
  password: string;
}
