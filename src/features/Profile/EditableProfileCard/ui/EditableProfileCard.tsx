import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ECountries } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { Option } from 'shared/ui/AppSelect/AppSelect';

import { getProfile } from '../model/actions/getProfile';
import { updateProfileData } from '../model/actions/updateProfileData';
import { getProfileDataSelector } from '../model/selectors/getProfileDataSelector/getProfileDataSelector';
import { getProfileReadonlySelector } from '../model/selectors/getProfileReadonlySelector/getProfileReadonlySelector';
import { getProfileValidationErrorsSelector } from '../model/selectors/getProfileValidationErrorsSelector/getProfileValidationErrorsSelector';
import { profileActions } from '../model/slice/profileSlice';

export const EditableProfileCard = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const readonly = useSelector(getProfileReadonlySelector);
  const profile = useSelector(getProfileDataSelector);
  const validationErrors = useSelector(getProfileValidationErrorsSelector);

  const onEditProfile = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onSubmitProfile = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onCancelEditProfile = useCallback(() => {
    dispatch(profileActions.cancelUpdate());
  }, [dispatch]);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          firstname: value || '',
        }),
      );
    },
    [dispatch],
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          lastname: value || '',
        }),
      );
    },
    [dispatch],
  );

  const onChangeUserName = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          username: value || '',
        }),
      );
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      if (value?.match(/^[0-9]+$/gi) || value === '') {
        dispatch(
          profileActions.updateProfile({
            age: value || '',
          }),
        );
      }
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (option?: Option<ECountries, ECountries>) => {
      dispatch(
        profileActions.updateProfile({
          country: option?.value,
        }),
      );
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          city: value || '',
        }),
      );
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (option?: Option<ECurrency, ECurrency>) => {
      dispatch(
        profileActions.updateProfile({
          currency: option?.value,
        }),
      );
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          avatar: value || '',
        }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'vitest' && id) {
      dispatch(getProfile(id));
    }
  }, [dispatch, id]);

  return (
    <ProfileCard
      profile={profile}
      readonly={readonly}
      validationErrors={validationErrors}
      onEditProfile={onEditProfile}
      onSubmitProfile={onSubmitProfile}
      onCancelEditProfile={onCancelEditProfile}
      onChangeFirstName={onChangeFirstName}
      onChangeLastName={onChangeLastName}
      onChangeUserName={onChangeUserName}
      onChangeAge={onChangeAge}
      onChangeCountry={onChangeCountry}
      onChangeCity={onChangeCity}
      onChangeCurrency={onChangeCurrency}
      onChangeAvatar={onChangeAvatar}
    />
  );
};
