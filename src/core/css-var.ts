import type { CSSProperties } from "react";

export type CssVarName = `--${string}`;

export function withCssVar<T extends CSSProperties | undefined>(
  style: T,
  name: CssVarName,
  value?: string | null,
): T {
  if (value == null || value === "") return style;
  return { ...style, [name]: value };
}
