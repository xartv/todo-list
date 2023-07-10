import { ProfileEntity } from 'entities/Profile';

import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';

import s from './ProfileCard.module.scss';

interface ProfileCardInterface {
  profile: ProfileEntity | undefined;
}

export const ProfileCard = ({ profile }: ProfileCardInterface) => {
  if (!profile) return null;

  return (
    <div className={s.root}>
      <Avatar src={profile.avatar} size={AvatarSize.M} />
    </div>
  );
};
