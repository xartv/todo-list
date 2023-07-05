import { profileReducer } from 'entities/Profile/model/slice/profileSlice';

import { DynamicReducerLoader } from 'shared/lib/components/DynamicReducerLoader';

import s from './ProfilePage.module.scss';

const profileReducerObject = {
  profile: profileReducer,
};

const ProfilePage = () => {
  return (
    <DynamicReducerLoader asyncReducers={profileReducerObject} removeOnUnmount>
      <div className={s.root}>{'ProfilePage'}</div>
    </DynamicReducerLoader>
  );
};

export default ProfilePage;
