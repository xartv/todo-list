export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

export interface UserEntity {
  id: number;
  avatar: string;
  username: string;
  password?: string;
  roles?: UserRole[];
}
