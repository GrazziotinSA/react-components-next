import { removeDigits } from "../../core/remove-digits";

/**
 * Formata CPF (até 11 dígitos) ou CNPJ (12–14 dígitos) conforme o tamanho.
 * @param data - Valor com ou sem formatação
 * @returns CPF `000.000.000-00` ou CNPJ `00.000.000/0000-00`; string vazia se ausente
 * @example
 * formatCpfCnpj("12345678901") // "123.456.789-01"
 * formatCpfCnpj("12345678000199") // "12.345.678/0001-99"
 */
export function formatCpfCnpj(data?: string): string {
  if (!data) return "";
  const value = removeDigits(data);

  if (!value) return "";
  if (value.length <= 11) {
    const cpf = value.slice(0, 11);
    return cpf
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  const cnpj = value.slice(0, 14);
  return cnpj
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}
