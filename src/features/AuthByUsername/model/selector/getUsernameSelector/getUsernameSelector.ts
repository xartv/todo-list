import { createSelector } from '@reduxjs/toolkit';

import { getLoginSelector } from '../getLoginSelector/getLoginSelector';

export const getUsernameSelector = createSelector(getLoginSelector, login => login.username);
