export type ClassValue =
  | string
  | number
  | bigint
  | boolean
  | undefined
  | null
  | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const result: string[] = [];

  for (const input of inputs) {
    if (!input && input !== 0) continue;
    if (typeof input === "string") {
      result.push(input);
    } else if (typeof input === "number" || typeof input === "bigint") {
      result.push(String(input));
    } else if (Array.isArray(input)) {
      const nested = cn(...(input as ClassValue[]));
      if (nested) result.push(nested);
    }
  }

  return result.join(" ").replace(/\s+/g, " ").trim();
}
