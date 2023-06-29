import { createSelector } from '@reduxjs/toolkit';

import { getLoginSelector } from '../getLoginSelector/getLoginSelector';

export const getErrorMessageSelector = createSelector(getLoginSelector, login => login?.error) || '';
