import { JsonArray } from './collection.types';
import { Key } from './primitive.types';

export type RecordOf<T = any> = Record<Key, T>;

export type AnyObject = Record<Key, any>;

export type PlainObject = Record<string, any>;

export type JsonPrimitive = string | number | boolean | null;

export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

export type JsonObject = { [Key in string]?: JsonValue };
