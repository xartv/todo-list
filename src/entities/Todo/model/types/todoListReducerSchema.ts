import { TodoEntity } from './TodoEntity';

export interface TodoListReducerSchema {
  list: TodoEntity[];
  error: string | null;
}
