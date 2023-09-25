import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

import { UserRole } from '../types/UserEntity';

export const getUserRoles = (state: StateSchema) => state.users.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, roles => roles?.includes(UserRole.ADMIN));
export const isUserManager = createSelector(getUserRoles, roles => roles?.includes(UserRole.MANAGER));
