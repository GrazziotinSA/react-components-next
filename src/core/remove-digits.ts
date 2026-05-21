/** Remove tudo que não for dígito. */
export function removeDigits(value: string): string {
  return value.replace(/\D/g, "");
}
