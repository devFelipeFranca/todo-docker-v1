import { JsonValue } from './dictionary.types';

export type AnyArray<T = any> = Array<T> | ReadonlyArray<T>;

export type JsonArray = JsonValue[];

export type Tuple<T = any> = [T] | T[];

export type List<A = any> = ReadonlyArray<A>;

export type ArrayOrSingle<T> = T | T[];
