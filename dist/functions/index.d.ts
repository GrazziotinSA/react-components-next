import { ClassValue } from 'clsx';
export { ClassValue } from 'clsx';

declare function cn(...values: ClassValue[]): string;

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
declare function nvl<T>(value: T | null | undefined, defaultValue: T): T;

/**
 * Formata CPF (até 11 dígitos) ou CNPJ (12–14 dígitos) conforme o tamanho.
 * @param data - Valor com ou sem formatação
 * @returns CPF `000.000.000-00` ou CNPJ `00.000.000/0000-00`; string vazia se ausente
 * @example
 * formatCpfCnpj("12345678901") // "123.456.789-01"
 * formatCpfCnpj("12345678000199") // "12.345.678/0001-99"
 */
declare function formatCpfCnpj(data?: string): string;

/**
 * Formata telefone brasileiro (até 11 dígitos): fixo `(00) 0000-0000` ou celular `(00) 00000-0000`.
 * @param phone - Valor com ou sem formatação
 * @returns Telefone formatado ou string vazia se ausente
 * @example
 * formatPhoneBr("11987654321") // "(11) 98765-4321"
 * formatPhoneBr("1133334444") // "(11) 3333-4444"
 */
declare function formatPhoneBr(phone?: string): string;

export { cn, formatCpfCnpj, formatPhoneBr, nvl };
