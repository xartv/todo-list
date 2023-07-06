import axios from 'axios';

import { LOCAL_STORAGE_AUTH_USER } from 'shared/const/globalConsts';

export const _api = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: { Authorization: localStorage.getItem(LOCAL_STORAGE_AUTH_USER) || '' },
});
