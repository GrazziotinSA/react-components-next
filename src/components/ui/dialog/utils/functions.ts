import type { DialogProps as MuiDialogProps } from "@mui/material/Dialog";

import { DIALOG_BACKDROP_STYLE, DIALOG_PAPER_FONT_SX } from "./constants";

type SlotSx = { sx?: object };

function mergeSlotSx(
  baseSx: object | undefined,
  slot: unknown,
): object | undefined {
  const slotSx =
    typeof slot === "object" && slot !== null && "sx" in slot
      ? ((slot as SlotSx).sx ?? {})
      : {};

  if (!baseSx && Object.keys(slotSx).length === 0) return undefined;

  return { ...baseSx, ...slotSx };
}

/**

 * Mescla `slotProps` do consumidor com backdrop (`blurBackdrop`) e fonte do paper.

 */

export function mergeDialogSlotProps(
  blurBackdrop: boolean,
  slotProps?: MuiDialogProps["slotProps"],
): MuiDialogProps["slotProps"] {
  const backdropStyle = blurBackdrop ? DIALOG_BACKDROP_STYLE : {};

  const userBackdrop =
    typeof slotProps?.backdrop === "object" && slotProps.backdrop !== null
      ? slotProps.backdrop
      : {};

  const userPaper =
    typeof slotProps?.paper === "object" && slotProps.paper !== null
      ? slotProps.paper
      : {};

  return {
    ...slotProps,
    backdrop: { ...userBackdrop, sx: mergeSlotSx(backdropStyle, userBackdrop) },
    paper: { ...userPaper, sx: mergeSlotSx(DIALOG_PAPER_FONT_SX, userPaper) },
  };
}
