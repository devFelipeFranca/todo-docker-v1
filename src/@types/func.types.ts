export type AnyFunction<Params extends any[] = any[], Result = any> = (
  ...args: Params
) => Result;

export interface Constructor<T extends object> {
  new (...args: any[]): T;
  prototype: T;
}
