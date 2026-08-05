/**
 * Mantém apenas dígitos, removendo qualquer outro caractere.
 * @param value - Valor de entrada
 * @returns Somente os dígitos, ou string vazia se ausente
 * @example
 * removeDigits("ABC-12.34") // "1234"
 * removeDigits("(11) 98765-4321") // "11987654321"
 */
export function removeDigits(value?: string): string {
  if (!value) return "";
  return value.replace(/\D/g, "");
}

/**
 * Remove todos os dígitos, mantendo letras e demais caracteres.
 * @param value - Valor de entrada
 * @returns Valor sem dígitos, ou string vazia se ausente
 * @example
 * removeNonDigits("ABC-12.34") // "ABC-."
 * removeNonDigits("João123") // "João"
 */
export function removeNonDigits(value?: string): string {
  if (!value) return "";
  return value.replaceAll(/\d/g, "");
}

/**
 * Mantém apenas letras, removendo números, espaços e símbolos.
 * @param value - Valor de entrada
 * @returns Somente letras, ou string vazia se ausente
 * @example
 * removeTextOnly("João 123!") // "João"
 * removeTextOnly("ABC-12.34") // "ABC"
 */
export function removeTextOnly(value?: string): string {
  if (!value) return "";
  return value.replaceAll(/[^\p{L}]/gu, "");
}
