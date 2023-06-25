import { TodoEntity } from 'entities/Todo/model/types/TodoEntity';

export interface TodoListReducerSchema {
  list: TodoEntity[];
  error: string | null;
}
