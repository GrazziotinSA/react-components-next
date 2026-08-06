/**
 * Retorna o timestamp atual atualizado a cada `ms` (padrão 1s).
 * @param ms - Intervalo de atualização em milissegundos
 * @returns Timestamp atual em ms
 * @example
 * const now = useNow();
 * const nowFast = useNow(500);
 */
declare function useNow(ms?: number): number;

export { useNow };
