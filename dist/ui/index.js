'use strict';

var tailwindMerge = require('tailwind-merge');
var clsx = require('clsx');
var material = require('@mui/material');
var core = require('@mantine/core');
var jsxRuntime = require('react/jsx-runtime');
var DialogMui = require('@mui/material/Dialog');
var DialogTitle = require('@mui/material/DialogTitle');
var DialogActions = require('@mui/material/DialogActions');
var DialogContent = require('@mui/material/DialogContent');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var DialogMui__default = /*#__PURE__*/_interopDefault(DialogMui);
var DialogTitle__default = /*#__PURE__*/_interopDefault(DialogTitle);
var DialogActions__default = /*#__PURE__*/_interopDefault(DialogActions);
var DialogContent__default = /*#__PURE__*/_interopDefault(DialogContent);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function cn(...values) {
  return tailwindMerge.twMerge(clsx.clsx(values));
}
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    material.Box,
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
        /* @__PURE__ */ jsxRuntime.jsxs(
          material.Box,
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
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "min-w-0 flex-1 font-semibold! truncate!", children: /* @__PURE__ */ jsxRuntime.jsx(
                core.Tooltip,
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
                  children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "block! truncate!", children: title })
                }
              ) }),
              /* @__PURE__ */ jsxRuntime.jsx("div", { children: icon })
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DialogMui__default.default,
    {
      fullWidth: true,
      open,
      onClose,
      maxWidth,
      slotProps: { backdrop: { sx: backdropStyle } },
      children: [
        title && /* @__PURE__ */ jsxRuntime.jsx(DialogTitle__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-semibold text-black-de", children: title }) }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogContent__default.default, { className: "text-black", children }),
        actions && /* @__PURE__ */ jsxRuntime.jsx(DialogActions__default.default, { children: actions })
      ]
    }
  );
}
var dialog_default = Dialog;

exports.Card = card_default;
exports.Dialog = dialog_default;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map