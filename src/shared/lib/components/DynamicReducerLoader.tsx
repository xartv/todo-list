import { Fragment, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from 'redux';

import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};
interface DynamicReducerLoaderProps {
  children: ReactNode;
  asyncReducers: ReducersList;
  removeOnUnmount?: boolean;
}

export const DynamicReducerLoader = ({ children, asyncReducers, removeOnUnmount }: DynamicReducerLoaderProps) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(asyncReducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeOnUnmount) {
        Object.entries(asyncReducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, [store]);

  return <Fragment>{children}</Fragment>;
};
