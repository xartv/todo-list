import { ECountries } from 'entities/Country';
import { ECurrency } from 'entities/Currency';

import { RequestStatuses } from 'shared/types/globalTypes';

import { EProfileValidationError } from '../const/profileConts';

export interface ProfileEntity {
  firstname?: string;
  lastname?: string;
  username?: string;
  age?: string;
  country?: ECountries;
  currency?: ECurrency;
  city?: string;
  avatar?: string;
}

export interface ProfileSchema {
  fetchData?: ProfileEntity;
  formData?: ProfileEntity;
  status: RequestStatuses;
  error?: string;
  validationErrors?: EProfileValidationError[];
  readonly: boolean;
}
