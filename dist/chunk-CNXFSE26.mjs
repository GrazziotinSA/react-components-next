import { __spreadValues, cn } from './chunk-NHHZBMJL.mjs';
import { Box } from '@mui/material';
import { Tooltip } from '@mantine/core';
import { jsxs, jsx } from 'react/jsx-runtime';
import DialogMui from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function Card({
  margin,
  onClick,
  title,
  toolTip,
  className,
  borderTitle,
  children,
  borderRadius,
  width = "100%",
  height = "auto",
  titleWidth = "100%",
  justifyContent = "space-between",
  titleColor = "var(--color-primary)",
  icon
}) {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      onClick,
      className: cn(className, "text-sm!"),
      sx: __spreadValues({
        width,
        margin,
        height,
        borderRadius,
        "@media (max-width: 768px)": { width: "100%" },
        boxShadow: "0 0.15rem 0.5rem rgba(0, 0, 0, 0.16)"
      }, onClick && { cursor: "pointer !important" }),
      children: [
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              justifyContent,
              height: "24px",
              color: "white",
              display: "flex",
              width: titleWidth,
              overflow: "hidden",
              padding: "0px 15px",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: borderTitle,
              backgroundColor: titleColor
            },
            children: [
              /* @__PURE__ */ jsx("span", { className: "min-w-0 flex-1 font-semibold! truncate!", children: /* @__PURE__ */ jsx(
                Tooltip,
                {
                  withArrow: true,
                  radius: "md",
                  label: title,
                  arrowSize: 6,
                  position: "top",
                  arrowOffset: 15,
                  disabled: !toolTip,
                  color: titleColor,
                  classNames: { tooltip: "text-xs!" },
                  offset: { mainAxis: 11, crossAxis: -21 },
                  transitionProps: { transition: "fade", duration: 100 },
                  children: /* @__PURE__ */ jsx("span", { className: "block! truncate!", children: title })
                }
              ) }),
              /* @__PURE__ */ jsx("div", { children: icon })
            ]
          }
        ),
        children
      ]
    }
  );
}
var card_default = Card;

// src/components/ui/dialog/utils/constants.ts
var DIALOG_BACKDROP_STYLE = {
  backdropFilter: "blur(4px)",
  backgroundColor: "rgba(0, 0, 0, 0.5)"
};
function Dialog({
  open,
  title,
  onClose,
  actions,
  children,
  maxWidth,
  blurBackdrop = false
}) {
  const backdropStyle = blurBackdrop ? DIALOG_BACKDROP_STYLE : {};
  return /* @__PURE__ */ jsxs(
    DialogMui,
    {
      fullWidth: true,
      open,
      onClose,
      maxWidth,
      slotProps: { backdrop: { sx: backdropStyle } },
      children: [
        title && /* @__PURE__ */ jsx(DialogTitle, { children: /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-black-de", children: title }) }),
        /* @__PURE__ */ jsx(DialogContent, { className: "text-black", children }),
        actions && /* @__PURE__ */ jsx(DialogActions, { children: actions })
      ]
    }
  );
}
var dialog_default = Dialog;

export { card_default, dialog_default };
//# sourceMappingURL=chunk-CNXFSE26.mjs.map
//# sourceMappingURL=chunk-CNXFSE26.mjs.map