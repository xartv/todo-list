import { ProfileEntity } from 'entities/Profile';
import { EProfileValidationError } from 'entities/Profile/model/const/profileConts';

export const validateProfile = (profile?: ProfileEntity): EProfileValidationError[] => {
  let errors: EProfileValidationError[] = [];

  if (!profile) errors.push(EProfileValidationError.NO_DATA);

  if (!profile?.firstname || !profile?.lastname) errors.push(EProfileValidationError.INCORRECT_FIRST_LAST_NAME);

  if (!profile?.username) errors.push(EProfileValidationError.INCORRECT_USERNAME);

  if (!Number.isInteger(Number(profile?.age)) || Number(profile?.age) < 1 || Number(profile?.age) > 99)
    errors.push(EProfileValidationError.INCORRECT_AGE);

  if (!profile?.city) errors.push(EProfileValidationError.INCORRECT_CITY);

  if (!profile?.avatar) errors.push(EProfileValidationError.INCORRECT_AVATAR);

  return errors;
};
