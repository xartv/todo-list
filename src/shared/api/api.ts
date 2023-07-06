import axios from 'axios';

import { LOCAL_STORAGE_AUTH_USER } from 'shared/const/globalConsts';

export const _api = axios.create({
  baseURL: __APP_BASE_URL__,
  headers: { Authorization: localStorage.getItem(LOCAL_STORAGE_AUTH_USER) || '' },
});
