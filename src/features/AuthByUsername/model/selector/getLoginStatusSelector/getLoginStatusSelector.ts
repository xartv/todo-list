import { createSelector } from '@reduxjs/toolkit';

import { getLoginSelector } from '../getLoginSelector/getLoginSelector';

export const getLoginStatusSelector = createSelector(getLoginSelector, login => login?.status);
