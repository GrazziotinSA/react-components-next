/**
 * Função NVL (Null Value Logic) - retorna valor padrão se o valor for null/undefined
 * @param {T | null | undefined} value - Valor a ser verificado
 * @param {T} defaultValue - Valor padrão a ser retornado se value for null/undefined
 * @returns {T} Value se não for null/undefined, senão defaultValue
 * @template T - Tipo do valor
 * @example
 * nvl(null, 'padrão') // Retorna: 'padrão'
 * nvl('valor', 'padrão') // Retorna: 'valor'
 */
export function nvl<T>(value: T | null | undefined, defaultValue: T): T {
  return value ?? defaultValue;
}
