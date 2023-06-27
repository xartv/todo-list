import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getLoginSelector = (state: StateSchema) => state.login;
