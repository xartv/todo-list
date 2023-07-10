import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileReadonlySelector = (state: StateSchema) => state.profile?.readonly;
