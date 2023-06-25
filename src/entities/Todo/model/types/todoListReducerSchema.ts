import { TodoEntity } from 'entities/Todo/model/types/TodoEntity';

export interface TodoListReducerSchema {
  todos: TodoEntity[];
  error: string | null;
}
