import type { QueryKey, UseQueryOptions } from "@tanstack/react-query";

/**
 * Options de `useQuery` usadas por {@link useQueryAuth}.
 */
export type QueryAuthOptions<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;

/**
 * Tipo do callback/flag `enabled` derivado de {@link QueryAuthOptions}.
 */
export type QueryAuthEnabled<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = NonNullable<
  QueryAuthOptions<TQueryFnData, TError, TData, TQueryKey>["enabled"]
>;

/**
 * Propriedades do exemplo do Storybook do {@link useQueryAuth}.
 */
export interface UseQueryAuthExampleProps {
  /** Token passado ao {@link AuthProvider}. */
  readonly token?: string | null;
}
