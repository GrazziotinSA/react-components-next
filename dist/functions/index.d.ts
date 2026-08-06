import { ClassValue } from 'clsx';
export { ClassValue } from 'clsx';
import { Updater } from 'use-immer';

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

/**
 * Formata um valor como moeda brasileira (BRL).
 *
 * - **string** — máscara de input: remove não dígitos, divide por 100 (centavos)
 * - **number** — valor já em reais
 *
 * @param value - Valor digitado ou numérico em reais
 * @returns Valor formatado (ex.: `R$ 1.234,56`) ou string vazia se ausente
 * @example
 * formatPriceBrl("123456") // "R$ 1.234,56" (input)
 * formatPriceBrl(1234.56) // "R$ 1.234,56" (número)
 * formatPriceBrl(0) // "R$ 0,00"
 */
declare function formatPriceBrl(value?: string | number | null): string;

/**
 * Formata máscara de item 170 (até 12 dígitos) no padrão `00.00.00.00.0.000`.
 * Remove caracteres não numéricos antes de formatar.
 * @param item - Valor com ou sem formatação
 * @returns Item formatado ou string vazia se ausente
 * @example
 * formatItem170("123456789012") // "12.34.56.78.9.012"
 */
declare function formatItem170(item?: string): string;

/**
 * Formata máscara de item 150 (até 10 dígitos) no padrão `00.00.00.0.000`.
 * Remove caracteres não numéricos antes de formatar.
 * @param item - Valor com ou sem formatação
 * @returns Item formatado ou string vazia se ausente
 * @example
 * formatItem150("1234567890") // "12.34.56.7.890"
 */
declare function formatItem150(item?: string): string;

interface SetImmerFieldParams<T, K extends keyof T> {
    readonly setData: Updater<T>;
    readonly key: K;
    readonly value: T[K];
}
interface SetImmerFieldExampleState {
    readonly name: string;
    readonly age: number;
}

/**
 * Atualiza uma chave específica de um estado gerenciado com `useImmer`.
 *
 * @param params.setData - Função setter retornada por `useImmer`
 * @param params.key - Chave do objeto a ser atualizada
 * @param params.value - Novo valor para a chave
 *
 * @example
 * ```tsx
 * const [data, setData] = useImmer({ name: "", age: 0 });
 *
 * setImmerField({ setData, key: "name", value: "João" });
 * ```
 */
declare function setImmerField<T, K extends keyof T>({ setData, key, value, }: SetImmerFieldParams<T, K>): void;

/**
 * Extrai o primeiro e o último nome de um nome completo.
 * @param name - Nome completo
 * @returns Primeiro e último nome separados por espaço, ou string vazia se ausente
 * @example
 * shortName("flavia roseane alves de souza") // "flavia souza"
 * shortName("João Silva") // "João Silva"
 * shortName("Maria") // "Maria"
 */
declare function shortName(name?: string): string;

/**
 * Mantém apenas dígitos, removendo qualquer outro caractere.
 * @param value - Valor de entrada
 * @returns Somente os dígitos, ou string vazia se ausente
 * @example
 * removeDigits("ABC-12.34") // "1234"
 * removeDigits("(11) 98765-4321") // "11987654321"
 */
declare function removeDigits(value?: string): string;
/**
 * Remove todos os dígitos, mantendo letras e demais caracteres.
 * @param value - Valor de entrada
 * @returns Valor sem dígitos, ou string vazia se ausente
 * @example
 * removeNonDigits("ABC-12.34") // "ABC-."
 * removeNonDigits("João123") // "João"
 */
declare function removeNonDigits(value?: string): string;
/**
 * Mantém apenas letras, removendo números, espaços e símbolos.
 * @param value - Valor de entrada
 * @returns Somente letras, ou string vazia se ausente
 * @example
 * removeTextOnly("João 123!") // "João"
 * removeTextOnly("ABC-12.34") // "ABC"
 */
declare function removeTextOnly(value?: string): string;

/**
 * Formata o tempo decorrido desde uma data ISO como `d HH:MM:SS`.
 * @param isoDate - Data de início em ISO
 * @param now - Timestamp atual em ms (padrão `Date.now()`)
 * @returns Tempo decorrido formatado, ou `"0 00:00:00"` se a data for inválida
 * @example
 * formatElapsedSince("2026-08-06T10:00:00.000Z", Date.parse("2026-08-06T11:01:05.000Z"))
 * // "0 01:01:05"
 */
declare function formatElapsedSince(isoDate: string, now?: number): string;

export { type SetImmerFieldExampleState, type SetImmerFieldParams, cn, formatCpfCnpj, formatElapsedSince, formatItem150, formatItem170, formatPhoneBr, formatPriceBrl, nvl, removeDigits, removeNonDigits, removeTextOnly, setImmerField, shortName };
