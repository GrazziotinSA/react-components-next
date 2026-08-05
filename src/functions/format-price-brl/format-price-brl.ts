import { removeDigits } from "../remove";

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
export function formatPriceBrl(value?: string | number | null): string {
  if (value === undefined || value === null) return "";

  if (typeof value === "string") {
    const digits = removeDigits(value);
    if (!digits) return "";
    const price = Number(digits) / 100;
    if (Number.isNaN(price)) return "";
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  if (Number.isNaN(value)) return "";
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
