import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileStatusSelector = (state: StateSchema) => state.profile?.status;
