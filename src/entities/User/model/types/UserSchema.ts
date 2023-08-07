import { UserEntity } from './UserEntity';

export interface UserSchema {
  authData?: UserEntity;

  _init: boolean;
}
