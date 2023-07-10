import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { ProfileEntity } from 'entities/Profile';

import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';

import s from './ProfileCard.module.scss';

interface ProfileCardInterface {
  profile: ProfileEntity | undefined;
  readonly: boolean | undefined;
  onEditProfile: () => void;
  onSubmitProfile: () => void;
  onCancelEditProfile: () => void;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeUserName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
}

export const ProfileCard = ({
  profile,
  readonly,
  onEditProfile,
  onSubmitProfile,
  onCancelEditProfile,
  onChangeFirstName,
  onChangeAge,
  onChangeAvatar,
  onChangeCity,
  onChangeLastName,
  onChangeUserName,
}: ProfileCardInterface) => {
  const { t } = useTranslation();

  if (!profile) return null;

  return (
    <div className={s.root}>
      <div className={s.controls}>
        {readonly ? (
          <Button onClick={onEditProfile}>{t('profile.edit')}</Button>
        ) : (
          <Fragment>
            <Button onClick={onCancelEditProfile} theme={ButtonTheme.CANCEL}>
              {t('profile.cancel')}
            </Button>
            <Button onClick={onSubmitProfile}>{t('profile.save')}</Button>
          </Fragment>
        )}
      </div>

      <Avatar src={profile.avatar} size={AvatarSize.M} className={s.avatar} />
      <Input
        title={t('profile.name')}
        value={profile.firstname}
        onChange={onChangeFirstName}
        className={s.input}
        readonly={readonly}
        classNames={{ input: cn({ [s.active]: !readonly }) }}
      />
      <Input
        title={t('profile.lastname')}
        value={profile.lastname}
        onChange={onChangeLastName}
        className={s.input}
        readonly={readonly}
        classNames={{ input: cn({ [s.active]: !readonly }) }}
      />
      <Input
        title={t('profile.username')}
        value={profile.username}
        onChange={onChangeUserName}
        className={s.input}
        readonly={readonly}
        classNames={{ input: cn({ [s.active]: !readonly }) }}
      />
      <Input
        title={t('profile.age')}
        value={profile.age}
        onChange={onChangeAge}
        className={s.input}
        readonly={readonly}
        classNames={{ input: cn({ [s.active]: !readonly }) }}
      />
      <Input
        title={t('profile.city')}
        value={profile.city}
        onChange={onChangeCity}
        className={s.input}
        readonly={readonly}
        classNames={{ input: cn({ [s.active]: !readonly }) }}
      />
      <Input
        title={t('profile.avatar')}
        value={profile.avatar}
        onChange={onChangeAvatar}
        className={s.input}
        readonly={readonly}
        classNames={{ input: cn({ [s.active]: !readonly }) }}
      />
    </div>
  );
};
