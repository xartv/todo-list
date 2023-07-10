import { RequestStatuses } from 'shared/types/globalTypes';

export interface ProfileEntity {
  firstname?: string;
  lastname?: string;
  username?: string;
  age?: string;
  country?: 'Russia';
  city?: string;
  avatar?: string;
}

export interface ProfileSchema {
  fetchData?: ProfileEntity;
  formData?: ProfileEntity;
  status: RequestStatuses;
  error?: string;
  readonly: boolean;
}
