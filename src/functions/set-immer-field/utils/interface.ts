import type { Updater } from "use-immer";

export interface SetImmerFieldParams<T, K extends keyof T> {
  readonly setData: Updater<T>;
  readonly key: K;
  readonly value: T[K];
}

export interface SetImmerFieldExampleState {
  readonly name: string;
  readonly age: number;
}
