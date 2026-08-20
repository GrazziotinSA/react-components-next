import type { Breakpoint } from "@mui/material";
import type { DialogProps as MuiDialogProps } from "@mui/material/Dialog";

/**
 * Propriedades do componente {@link Dialog}.
 * Modal baseado no MUI `Dialog`, com título, conteúdo principal e rodapé de ações opcionais.
 * O componente usa `fullWidth` por padrão; a largura máxima é controlada por `maxWidth`.
 */
export interface DialogProps {
  /**
   * Controla se o diálogo está aberto e visível.
   */
  open: boolean;

  /**
   * Texto exibido no cabeçalho do diálogo.
   * Quando omitido, o bloco de título não é renderizado.
   */
  title?: string;

  /**
   * Callback invocado ao fechar o diálogo
   * (clique no backdrop, tecla ESC ou botão de fechar do MUI).
   */
  onClose: () => void;

  /**
   * Aplica desfoque e overlay escuro semitransparente no backdrop.
   * @default false
   */
  blurBackdrop?: boolean;

  /**
   * Conteúdo principal exibido na área central do diálogo.
   */
  children: React.ReactNode;

  /**
   * Conteúdo do rodapé (botões, links ou ações customizadas).
   * Quando omitido, `DialogActions` não é renderizado.
   */
  actions?: React.ReactNode;

  /**
   * Largura máxima do diálogo conforme breakpoints do MUI
   * (`xs`, `sm`, `md`, `lg`, `xl`).
   * Use `false` para desativar o limite de largura.
   */
  maxWidth?: false | Breakpoint;

  /**
   * Desativa o scroll lock do MUI no `body`.
   * Útil ao encadear com outro modal (ex.: Drawer Base UI) para evitar locks concorrentes.
   * @default false
   */
  disableScrollLock?: MuiDialogProps["disableScrollLock"];

  /**
   * Desativa o enforce focus do Modal MUI.
   * @default false
   */
  disableEnforceFocus?: MuiDialogProps["disableEnforceFocus"];

  /**
   * Desativa o auto-focus ao abrir.
   * @default false
   */
  disableAutoFocus?: MuiDialogProps["disableAutoFocus"];

  /**
   * Mantém o conteúdo montado quando fechado.
   * @default false
   */
  keepMounted?: MuiDialogProps["keepMounted"];

  /**
   * `slotProps` do MUI Dialog (backdrop, paper, root, transition…).
   * Mesclado com os estilos padrão da lib (`blurBackdrop`, fonte do paper).
   */
  slotProps?: MuiDialogProps["slotProps"];
}
