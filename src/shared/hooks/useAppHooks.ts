import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
