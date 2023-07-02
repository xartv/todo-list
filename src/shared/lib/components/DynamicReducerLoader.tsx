import { Fragment, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { DeepPartial, Reducer } from 'redux';

import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

interface DynamicReducerLoaderProps {
  children: ReactNode;
  asyncReducers: DeepPartial<Record<StateSchemaKey, Reducer>>;
  removeOnUnmount?: boolean;
}

type ReducersEntries = [StateSchemaKey, Reducer];

export const DynamicReducerLoader = ({ children, asyncReducers, removeOnUnmount }: DynamicReducerLoaderProps) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(asyncReducers).forEach(([name, reducer]: ReducersEntries) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeOnUnmount) {
        // @ts-ignore
        // eslint-disable-next-line
        Object.entries(asyncReducers).forEach(([name, reducer]: ReducersEntries) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <Fragment>{children}</Fragment>;
};
