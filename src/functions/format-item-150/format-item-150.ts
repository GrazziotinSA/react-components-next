import { removeDigits } from "../remove";

/**
 * Formata máscara de item 150 (até 10 dígitos) no padrão `00.00.00.0.000`.
 * Remove caracteres não numéricos antes de formatar.
 * @param item - Valor com ou sem formatação
 * @returns Item formatado ou string vazia se ausente
 * @example
 * formatItem150("1234567890") // "12.34.56.7.890"
 */
export function formatItem150(item?: string): string {
  if (!item) return "";
  const digits = removeDigits(item).slice(0, 10);
  if (!digits) return "";

  return digits
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{2})\.(\d)(\d{1,3})$/, "$1.$2.$3");
}
