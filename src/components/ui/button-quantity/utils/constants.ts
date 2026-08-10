import type { CSSProperties, InputStylesNames } from "@mantine/core";

/**
 * Variante visual do grupo de botões.
 * - `outline`: fundo branco
 * - `soft`: fundo cinza claro
 */
export type ButtonQuantityModel = "outline" | "soft";

/**
 * Tamanho pré-definido do controle.
 * - `sm`: compacto
 * - `md`: padrão
 * - `lg`: maior
 */
export type ButtonQuantitySize = "sm" | "md" | "lg";

export const SIZE_STYLES: Record<
  ButtonQuantitySize,
  {
    height: number;
    buttonWidth: number;
    inputWidth: number;
    fontSize: number;
    iconSize: number;
  }
> = {
  sm: {
    height: 28,
    buttonWidth: 36,
    inputWidth: 40,
    fontSize: 12,
    iconSize: 10,
  },
  md: {
    height: 32,
    buttonWidth: 42,
    inputWidth: 46,
    fontSize: 13,
    iconSize: 12,
  },
  lg: {
    height: 40,
    buttonWidth: 48,
    inputWidth: 54,
    fontSize: 15,
    iconSize: 14,
  },
};

export const GROUP_STYLES: Record<ButtonQuantityModel, CSSProperties> = {
  outline: {
    width: "fit-content",
    borderRadius: 80,
    overflow: "hidden",
    border: "none",
    boxShadow: "none",
    backgroundColor: "#fff",
  },
  soft: {
    width: "fit-content",
    borderRadius: 80,
    overflow: "hidden",
    border: "none",
    boxShadow: "none",
    backgroundColor: "#F1F3F5",
  },
};

export const GROUP_SECTION_STYLE: CSSProperties = {
  border: 0,
  boxShadow: "none",
};

export const ACTION_BUTTON_STYLE: CSSProperties = { border: 0 };

/** Mantém o fundo igual no hover/active (sem escurecer). */
export const ACTION_BUTTON_STYLES = {
  root: {
    border: 0,
    "&:hover:not([data-disabled])": { backgroundColor: "var(--button-bg)" },
    "&:active:not([data-disabled])": { backgroundColor: "var(--button-bg)" },
  },
};

export const ACTION_BUTTON_DISABLED_STYLE: CSSProperties = {
  border: 0,
  cursor: "not-allowed",
  backgroundColor: "transparent",
};

export const GROUP_DISABLED_STYLE: CSSProperties = {
  opacity: 0.45,
};

/** Teclas de navegação/edição permitidas no input numérico. */
export const ALLOWED_CONTROL_KEYS = [
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
  "Tab",
  "Escape",
  "Home",
  "End",
];

export const INPUT_STYLES: Partial<Record<InputStylesNames, CSSProperties>> = {
  wrapper: { border: 0, boxShadow: "none" },
  input: {
    border: 0,
    height: 32,
    opacity: 1,
    fontSize: 13,
    fontWeight: 600,
    outline: "none",
    boxShadow: "none",
    textAlign: "center",
    backgroundColor: "transparent",
  },
};

const buttonQuantityConstants = `
Controle de quantidade com botões de diminuir/aumentar e input numérico editável.

**Importação:**
\`\`\`tsx
import { ButtonQuantity } from "@grazziotin/react-components-next/ui";
\`\`\`

**Uso básico:**
\`\`\`tsx
<ButtonQuantity
  quantity={value}
  minValue={0}
  maxValue={99}
  onChangeQuantity={setValue}
/>
\`\`\`
`;

export default buttonQuantityConstants;
