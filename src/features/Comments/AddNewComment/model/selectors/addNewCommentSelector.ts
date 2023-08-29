import { StateSchema } from 'app/providers/StoreProvider';

export const getAddNewCommentSelector = (state: StateSchema) => state.addNewComment;
export const getAddNewCommentTextSelector = (state: StateSchema) => getAddNewCommentSelector(state)?.text ?? '';
export const getAddNewCommentErrorSelector = (state: StateSchema) => getAddNewCommentSelector(state)?.error;
