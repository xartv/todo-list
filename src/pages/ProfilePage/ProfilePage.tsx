import { useEffect } from 'react';

import { getProfile, ProfileCard, profileReducer } from 'entities/Profile';

import { useAppDispatch } from 'shared/hooks/useAppHooks';
import { DynamicReducerLoader } from 'shared/lib/components/DynamicReducerLoader';

import s from './ProfilePage.module.scss';

const profileReducerObject = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <DynamicReducerLoader asyncReducers={profileReducerObject} removeOnUnmount>
      <div className={s.root}>
        <ProfileCard />
      </div>
    </DynamicReducerLoader>
  );
};

export default ProfilePage;
