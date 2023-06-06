import * as React from "react";

import { store } from "../config/store";
import { Provider } from "react-redux";

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
