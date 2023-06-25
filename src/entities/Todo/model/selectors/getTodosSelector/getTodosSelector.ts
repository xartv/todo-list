import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getTodosSelector = (state: StateSchema) => state.todos.todos;
