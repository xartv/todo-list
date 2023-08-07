import { StateSchema } from 'app/providers/StoreProvider';

export const getInitSelector = (state: StateSchema) => state.users._init;
