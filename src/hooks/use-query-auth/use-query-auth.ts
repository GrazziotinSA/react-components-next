"use client";

import {
  useQuery,
  type QueryKey,
  type UseQueryResult,
} from "@tanstack/react-query";
import { useAuth } from "../../providers/auth-provider";
import type { QueryAuthEnabled, QueryAuthOptions } from "./utils/interface";

/**
 * Wrapper de `useQuery` que só executa a query quando o usuário está autenticado.
 * Combina `isAuthenticated` do {@link useAuth} com o `enabled` original das options.
 *
 * @example
 * ```tsx
 * const { data } = useQueryAuth({
 *   queryKey: ["orders"],
 *   queryFn: fetchOrders,
 * });
 * ```
 */
export function useQueryAuth<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: QueryAuthOptions<TQueryFnData, TError, TData, TQueryKey>,
): UseQueryResult<TData, TError> {
  const { isAuthenticated } = useAuth();
  const baseEnabled = options.enabled;

  const enabled: QueryAuthEnabled<TQueryFnData, TError, TData, TQueryKey> = (
    query,
  ) => {
    if (!isAuthenticated) return false;
    if (typeof baseEnabled === "function") return baseEnabled(query);
    return baseEnabled ?? true;
  };

  return useQuery({ ...options, enabled });
}

export type { QueryAuthOptions } from "./utils/interface";
