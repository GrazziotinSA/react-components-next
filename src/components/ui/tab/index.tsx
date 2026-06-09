import type { TabColorProps } from "./utils/interface";
import { styled, Tab as MuiTab, Tabs as MuiTabs } from "@mui/material";

const DEFAULT_TAB_COLOR = "var(--primary-color)";
const DEFAULT_TAB_FONT_FAMILY = "var(--font-family, inherit)";

/**
 * Container de abas baseado no MUI `Tabs`, com indicador colorido customizável.
 *
 * @param props.color - Cor do indicador da aba ativa. Padrão: `var(--primary-color)`.
 *
 * @example
 * ```tsx
 * <Tabs value={value} onChange={handleChange} color="#00B2A6">
 *   <Tab label="Aba 1" />
 * </Tabs>
 * ```
 */
export const Tabs = styled(MuiTabs, {
  shouldForwardProp: (prop) => prop !== "color",
})<TabColorProps>(({ color = DEFAULT_TAB_COLOR }) => ({
  fontFamily: `${DEFAULT_TAB_FONT_FAMILY} !important`,
  "& .MuiTabs-indicator": { backgroundColor: color },
}));

/**
 * Aba individual baseada no MUI `Tab`, com tipografia e cor de seleção customizáveis.
 *
 * @param props.color - Cor do rótulo quando a aba está selecionada. Padrão: `var(--primary-color)`.
 * @param props.fontFamily - Família tipográfica do rótulo. Padrão: `var(--font-family, inherit)`.
 *
 * @example
 * ```tsx
 * <Tab label="Configurações" color="#00B2A6" />
 * ```
 */
export const Tab = styled(MuiTab, {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "fontFamily",
})<TabColorProps>(
  ({ color = DEFAULT_TAB_COLOR, fontFamily = DEFAULT_TAB_FONT_FAMILY }) => ({
    fontWeight: "500 !important",
    color: "#000000CC !important",
    fontSize: "14px !important",
    textTransform: "uppercase !important",
    fontFamily: `${fontFamily} !important`,
    "&.Mui-selected": { color: `${color} !important` },
  }),
);
