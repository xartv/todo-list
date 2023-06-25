import { TodoListReducerSchema } from 'entities/Todo/model/types/todoListReducerSchema';
import { UserSchema } from 'entities/User/model/types/UserSchema';

export interface StateSchema {
  todos: TodoListReducerSchema;
  users: UserSchema;
}
