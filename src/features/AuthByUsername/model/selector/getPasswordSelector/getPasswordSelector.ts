import { createSelector } from '@reduxjs/toolkit';

import { getLoginSelector } from '../getLoginSelector/getLoginSelector';

export const getPasswordSelector = createSelector(getLoginSelector, login => login.password);
