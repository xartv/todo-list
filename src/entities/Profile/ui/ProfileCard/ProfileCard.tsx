import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { DefaultTFuncReturn } from 'i18next';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { ECountries } from 'entities/Country';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import { ECurrency } from 'entities/Currency';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import { ProfileEntity } from 'entities/Profile';
import { EProfileValidationError } from 'entities/Profile/model/const/profileConts';
import { getAuthUserSelector } from 'entities/User';

import { Option } from 'shared/ui/AppSelect/AppSelect';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import s from './ProfileCard.module.scss';

interface ProfileCardInterface {
  profile: ProfileEntity | undefined;
  readonly: boolean | undefined;
  validationErrors: EProfileValidationError[] | undefined;
  onEditProfile: () => void;
  onSubmitProfile: () => void;
  onCancelEditProfile: () => void;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeUserName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCountry?: (option: Option<ECountries, ECountries>) => void;
  onChangeCity?: (value: string) => void;
  onChangeCurrency?: (option: Option<ECurrency, ECurrency>) => void;
  onChangeAvatar?: (value: string) => void;
}

export const ProfileCard = ({
  profile,
  readonly,
  validationErrors,
  onEditProfile,
  onSubmitProfile,
  onCancelEditProfile,
  onChangeFirstName,
  onChangeAge,
  onChangeAvatar,
  onChangeCity,
  onChangeLastName,
  onChangeUserName,
  onChangeCountry,
  onChangeCurrency,
}: ProfileCardInterface) => {
  const { t } = useTranslation();

  const authUser = useSelector(getAuthUserSelector);

  const isAuthUserProfile = Number(authUser?.id) === Number(profile?.id);

  if (!profile) return null;

  const validationErrorsTranslations: Record<EProfileValidationError, DefaultTFuncReturn> = {
    [EProfileValidationError.INCORRECT_AGE]: t('profile.ageError'),
    [EProfileValidationError.INCORRECT_AVATAR]: t('profile.avatarError'),
    [EProfileValidationError.INCORRECT_CITY]: t('profile.cityError'),
    [EProfileValidationError.INCORRECT_FIRST_LAST_NAME]: t('profile.nameError'),
    [EProfileValidationError.INCORRECT_USERNAME]: t('profile.usernameError'),
    [EProfileValidationError.NO_DATA]: t('profile.noDataError'),
    [EProfileValidationError.SERVER_ERROR]: t('profile.serverError'),
  };

  const defaultCurrencyValue: Option<ECurrency | undefined, ECurrency | undefined> = {
    label: profile.currency,
    value: profile.currency,
  };

  const defaultCountryValue: Option<ECountries | undefined, ECountries | undefined> = {
    label: profile.country,
    value: profile.country,
  };

  return (
    <div className={s.root}>
      {isAuthUserProfile && (
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
      )}

      <Avatar src={profile.avatar} size={AvatarSize.M} className={s.avatar} />

      {Boolean(validationErrors?.length) && (
        <div className={s.validationErrorsWrapper}>
          {validationErrors?.map((error, index) => (
            <Text
              key={`VALIDATION_ERROR_${error}_${index}`}
              theme={TextTheme.ERROR}
              description={validationErrorsTranslations[error]}
            />
          ))}
        </div>
      )}

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
      <CountrySelect
        title={t('profile.county')}
        defaultValue={defaultCountryValue}
        className={s.selectWrapper}
        isDisabled={readonly}
        onChange={onChangeCountry}
      />
      <Input
        title={t('profile.city')}
        value={profile.city}
        onChange={onChangeCity}
        className={s.input}
        readonly={readonly}
        classNames={{ input: cn({ [s.active]: !readonly }) }}
      />
      <CurrencySelect
        title={t('profile.currency')}
        defaultValue={defaultCurrencyValue}
        className={s.selectWrapper}
        isDisabled={readonly}
        onChange={onChangeCurrency}
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
