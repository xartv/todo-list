import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LOCAL_STORAGE_AUTH_USER } from 'shared/const/globalConsts';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __APP_BASE_URL__,
    prepareHeaders: headers => {
      const token = localStorage.getItem(LOCAL_STORAGE_AUTH_USER) || '';
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
