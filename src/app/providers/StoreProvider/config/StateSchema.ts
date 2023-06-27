import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';

import { TodoListReducerSchema } from 'entities/Todo/model/types/todoListReducerSchema';
import { UserSchema } from 'entities/Todo/User/model/types/UserSchema';

export interface StateSchema {
  todos: TodoListReducerSchema;
  users: UserSchema;
  login: LoginSchema;
}
