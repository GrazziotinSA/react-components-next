import { removeDigits } from "../remove";

/**
 * Formata telefone brasileiro (até 11 dígitos): fixo `(00) 0000-0000` ou celular `(00) 00000-0000`.
 * @param phone - Valor com ou sem formatação
 * @returns Telefone formatado ou string vazia se ausente
 * @example
 * formatPhoneBr("11987654321") // "(11) 98765-4321"
 * formatPhoneBr("1133334444") // "(11) 3333-4444"
 */
export function formatPhoneBr(phone?: string): string {
  if (!phone) return "";
  const digits = removeDigits(phone).slice(0, 11);

  if (!digits) return "";
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) {
    return digits.replace(/(\d{2})(\d+)/, "($1) $2");
  }
  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d{4})(\d+)/, "($1) $2-$3");
  }
  return digits.replace(/(\d{2})(\d{5})(\d+)/, "($1) $2-$3");
}
