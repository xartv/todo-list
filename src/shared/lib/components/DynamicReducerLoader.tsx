import { Fragment, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from 'redux';

import { ReduxStoreWithManager, StateSchema } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};
interface DynamicReducerLoaderProps {
  children: ReactNode;
  asyncReducers: ReducersList;
  removeOnUnmount?: boolean;
}

export const DynamicReducerLoader = ({
  children,
  asyncReducers,
  removeOnUnmount = true,
}: DynamicReducerLoaderProps) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = Object.keys(store.reducerManager.getReducerMap());

    Object.entries(asyncReducers).forEach(([name, reducer]) => {
      if (mountedReducers.includes(name)) return;

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
