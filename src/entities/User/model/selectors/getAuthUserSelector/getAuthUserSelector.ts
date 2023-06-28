import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getAuthUserSelector = (state: StateSchema) => state.users.authData;
