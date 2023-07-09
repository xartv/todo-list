/* eslint-disable */

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare const __APP_BASE_URL__: string;

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

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
