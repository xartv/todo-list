import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileValidationErrorsSelector = (state: StateSchema) => state.profile?.validationErrors;
