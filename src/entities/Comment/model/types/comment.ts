import { UserEntity } from 'entities/User';

export interface CommentEntity {
  id: string;
  user: UserEntity;
  text: string;
}
