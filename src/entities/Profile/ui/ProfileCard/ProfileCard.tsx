import { useSelector } from 'react-redux';

import { getProfileDataSelector } from 'entities/Profile';

import s from './ProfileCard.module.scss';

export const ProfileCard = () => {
  const profile = useSelector(getProfileDataSelector);

  return <div className={s.root}>{profile?.username}</div>;
};
