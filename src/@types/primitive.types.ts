export type Literal = string | number | bigint | boolean;

export type Numeric = number | bigint;

export type True = true | '1';

export type False = false | '' | 0 | null | undefined;

export type Bool = False | True;

export type PromiseOr<T> = Promise<T> | T;

export type Null = null | undefined;

export type Key = string | number | symbol;
