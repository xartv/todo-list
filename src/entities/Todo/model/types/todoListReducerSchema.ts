import { Todo } from 'entities/Todo/model/types/types';

export interface TodoListReducerSchema {
  todos: Todo[];
  error: string | null;
}
