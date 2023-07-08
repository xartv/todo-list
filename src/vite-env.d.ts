/* eslint-disable */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type Procedure = (...args: any[]) => any;
interface Mock<TArgs extends any[] = any, TReturns = any> extends SpyInstance<TArgs, TReturns> {
  new (...args: TArgs): TReturns;
  (...args: TArgs): TReturns;
}
type MockedObjectDeep<T> = MaybeMockedConstructor<T> & {
  [K in Methods<T>]: T[K] extends Procedure ? MockedFunctionDeep<T[K]> : T[K];
} & {
  [K in Properties<T>]: MaybeMockedDeep<T[K]>;
};
type MockedFunctionDeep<T extends Procedure> = Mock<Parameters<T>, ReturnType<T>> & MockedObjectDeep<T>;
