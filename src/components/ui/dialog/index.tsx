import React from "react";
import DialogMui from "@mui/material/Dialog";
import type { DialogProps } from "./utils/interface";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DIALOG_BACKDROP_STYLE, DIALOG_PAPER_FONT_SX } from "./utils/constants";

/**
 * Modal de diálogo baseado no MUI `Dialog`, com título, conteúdo e ações opcionais.
 *
 * O componente usa `fullWidth` por padrão e permite limitar a largura via `maxWidth`.
 * Com `blurBackdrop`, o fundo recebe desfoque e overlay escuro semitransparente.
 *
 * @param props - Propriedades do componente. Detalhes em {@link DialogProps}.
 * @param props.open - Controla se o diálogo está visível.
 * @param props.title - Título exibido no topo; omitido se não informado.
 * @param props.onClose - Callback ao fechar (clique fora, ESC ou botão de fechar do MUI).
 * @param props.actions - Rodapé com botões ou ações customizadas.
 * @param props.children - Conteúdo principal do diálogo.
 * @param props.maxWidth - Largura máxima do MUI (`xs`, `sm`, `md`, `lg`, `xl` ou `false`).
 * @param props.blurBackdrop - Aplica blur e escurecimento no backdrop. Padrão: `false`.
 *
 * @returns Instância do `Dialog` do Material UI.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <Dialog
 *   open={open}
 *   title="Confirmar exclusão"
 *   onClose={() => setOpen(false)}
 *   actions={<Button onClick={() => setOpen(false)}>OK</Button>}
 * >
 *   Deseja realmente excluir este item?
 * </Dialog>
 * ```
 *
 * @example
 * ```tsx
 * <Dialog
 *   open={open}
 *   onClose={handleClose}
 *   maxWidth="sm"
 *   blurBackdrop
 * >
 *   Conteúdo sem título.
 * </Dialog>
 * ```
 */
function Dialog({
  open,
  title,
  onClose,
  actions,
  children,
  maxWidth,
  blurBackdrop = false,
}: Readonly<DialogProps>): React.ReactElement {
  const backdropStyle = blurBackdrop ? DIALOG_BACKDROP_STYLE : {};

  return (
    <DialogMui
      fullWidth
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      slotProps={{
        backdrop: { sx: backdropStyle },
        paper: { sx: DIALOG_PAPER_FONT_SX },
      }}
    >
      {title && (
        <DialogTitle>
          <p className="text-sm font-semibold text-black">{title}</p>
        </DialogTitle>
      )}
      <DialogContent className="text-black">{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </DialogMui>
  );
}

export default Dialog;
