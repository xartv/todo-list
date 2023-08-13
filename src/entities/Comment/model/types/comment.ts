import { UserEntity } from 'entities/User';

export interface CommentEntity {
  id: string;
  userId: string;
  user: UserEntity;
  text: string;
}
