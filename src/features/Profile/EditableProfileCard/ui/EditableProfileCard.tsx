import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ProfileCard } from 'entities/Profile';

import { useAppDispatch } from 'shared/hooks/useAppHooks';

import { getProfile } from '../model/actions/getProfile';
import { getProfileDataSelector } from '../model/selectors/getProfileDataSelector/getProfileDataSelector';

export const EditableProfileCard = () => {
  const dispatch = useAppDispatch();

  const profile = useSelector(getProfileDataSelector);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return <ProfileCard profile={profile} />;
};
