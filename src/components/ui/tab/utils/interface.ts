import type {
  TabProps as MuiTabProps,
  TabsProps as MuiTabsProps,
} from "@mui/material";

/**
 * Propriedades de estilo compartilhadas entre {@link Tab} e {@link Tabs}.
 */
export interface TabColorProps {
  /**
   * Cor do indicador ativo e do rótulo da aba selecionada.
   * @default "var(--primary-color)"
   */
  color?: string;

  /**
   * Família tipográfica do rótulo da aba.
   * Defina `--font-family` no CSS do projeto ou passe esta prop diretamente.
   * @default "var(--font-family, inherit)"
   */
  fontFamily?: string;
}

/**
 * Propriedades do componente {@link Tab}.
 * Estende o `Tab` do MUI com suporte a cor customizada via `color`.
 */
export type TabProps = MuiTabProps & TabColorProps;

/**
 * Propriedades do componente {@link Tabs}.
 * Estende o `Tabs` do MUI com suporte a cor customizada do indicador via `color`.
 */
export type TabsProps = MuiTabsProps & TabColorProps;
