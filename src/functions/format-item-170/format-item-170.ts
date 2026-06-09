import { removeDigits } from "../../core/remove-digits";

/**
 * Formata máscara de item 170 (até 12 dígitos) no padrão `00.00.00.00.0.000`.
 * Remove caracteres não numéricos antes de formatar.
 * @param item - Valor com ou sem formatação
 * @returns Item formatado ou string vazia se ausente
 * @example
 * formatItem170("123456789012") // "12.34.56.78.9.012"
 */
export function formatItem170(item?: string): string {
  if (!item) return "";
  const digits = removeDigits(item).slice(0, 12);
  if (!digits) return "";

  return digits
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{2})\.(\d)(\d{1,3})$/, "$1.$2.$3");
}
