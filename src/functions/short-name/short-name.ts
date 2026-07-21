/**
 * Extrai o primeiro e o último nome de um nome completo.
 * @param name - Nome completo
 * @returns Primeiro e último nome separados por espaço, ou string vazia se ausente
 * @example
 * shortName("flavia roseane alves de souza") // "flavia souza"
 * shortName("João Silva") // "João Silva"
 * shortName("Maria") // "Maria"
 */
export function shortName(name?: string): string {
  if (!name) return "";

  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];

  return `${parts[0]} ${parts.at(-1)}`;
}
