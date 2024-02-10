export type Enum<T extends Record<K, unknown>, K extends string = string & keyof T> = {
  [P in K]: readonly [P, T[P]]
}[K]

export type Match = <V extends readonly [string, unknown], T extends Record<V[0], unknown> = { [K in V[0]]: (V & readonly [K, unknown])[1] }>(
  [key, value]: V) => <R>(
    options: { [P in V[0]]: (x: T[P]) => R }
  ) => R

export type Cast = <V extends readonly [string, unknown], T extends Record<V[0], unknown>>(v: V, _: { [P in V[0]]: (x: T[P]) => unknown; }) => Enum<T, V[0]>
