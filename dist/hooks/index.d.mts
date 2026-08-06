import { QueryKey, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

/**
 * Retorna o timestamp atual atualizado a cada `ms` (padrão 1s).
 * @param ms - Intervalo de atualização em milissegundos
 * @returns Timestamp atual em ms
 * @example
 * const now = useNow();
 * const nowFast = useNow(500);
 */
declare function useNow(ms?: number): number;

/**
 * Retorna o valor com debounce após o `delay` informado.
 * @param value - Valor de entrada
 * @param delay - Delay em milissegundos
 * @returns Valor debounced
 * @example
 * const debouncedSearch = useDebounce(search, 300);
 */
declare function useDebounce<T>(value: T, delay: number): T;

/**
 * Options de `useQuery` usadas por {@link useQueryAuth}.
 */
type QueryAuthOptions<TQueryFnData = unknown, TError = Error, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> = UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;

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
declare function useQueryAuth<TQueryFnData = unknown, TError = Error, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: QueryAuthOptions<TQueryFnData, TError, TData, TQueryKey>): UseQueryResult<TData, TError>;

export { type QueryAuthOptions, useDebounce, useNow, useQueryAuth };
