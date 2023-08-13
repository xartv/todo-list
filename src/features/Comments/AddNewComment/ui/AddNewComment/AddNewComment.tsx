import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';

import { getAddNewCommentTextSelector } from '../../model/selectors/addNewCommentSelector';
import { addNewCommentActions, addNewCommentReducer } from '../../model/slice/addNewCommentSlice';

import s from './AddNewComment.module.scss';

const asyncReducer: ReducersList = {
  addNewComment: addNewCommentReducer,
};

interface AddNewCommentProps {
  className?: string;
  onSubmitComment: (text: string) => void;
}

const AddNewComment = ({ className, onSubmitComment }: AddNewCommentProps) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const text = useSelector(getAddNewCommentTextSelector);

  const handleChange = useCallback(
    (value: string) => {
      dispatch(addNewCommentActions.setText(value));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(() => {
    onSubmitComment(text);
    handleChange('');
  }, [handleChange, text, onSubmitComment]);

  return (
    <DynamicReducerLoader asyncReducers={asyncReducer}>
      <div className={cn(s.root, className)}>
        <Input value={text} placeholder={t('comments.enterCommentText')} onChange={handleChange} />
        <Button theme={ButtonTheme.OUTLINE} onClick={handleSubmit}>
          {t('comments.addComment')}
        </Button>
      </div>
    </DynamicReducerLoader>
  );
};

export default AddNewComment;
