import { RequestStatuses } from 'shared/types/globalTypes';

export interface ProfileEntity {
  firstname: string;
  lastname: string;
  username: string;
  age: 22;
  country: 'Russia';
  city: string;
  avatar: string;
}

export interface ProfileSchema {
  profile?: ProfileEntity;
  status: RequestStatuses;
  error?: string;
  readonly: boolean;
}
