/** Remove tudo que não for dígito. */
export function removeDigits(value: string): string {
  return value.replace(/\D/g, "");
}

/** Remove tudo que não for número. */
export function removeNonDigits(value: string) {
  return value.replaceAll(/\d/g, "");
}

/** Remove tudo que não for letra. */
export function removeTextOnly(value: string) {
  return value.replaceAll(/[^\p{L}]/gu, "");
}
