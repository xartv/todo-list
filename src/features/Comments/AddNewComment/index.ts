export type { AddNewCommentSchema } from './model/types/addNewComment';

export { AddNewCommentAsync as AddNewComment } from './ui/AddNewComment/AddNewComment.async';
export { getAddNewCommentTextSelector } from './model/selectors/addNewCommentSelector';
export { addNewCommentActions } from './model/slice/addNewCommentSlice';
