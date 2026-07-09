import { cn, formatItem150, formatItem170, removeNonDigits, removeTextOnly, formatPriceBrl, formatPhoneBr, removeDigits, formatCpfCnpj } from './chunk-EQFYVCIZ.mjs';
import { __spreadProps, __spreadValues, __objRest } from './chunk-YOSPWY5K.mjs';
import { createTheme, styled, Tabs as Tabs$1, Tab as Tab$1, TextField, Box, ThemeProvider, useMediaQuery, Drawer, Grid, InputAdornment, IconButton } from '@mui/material';
import { Tooltip, ActionIcon, Button } from '@mantine/core';
import { jsxs, jsx } from 'react/jsx-runtime';
import DialogMui from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { ptBR } from '@mui/x-data-grid/locales';
import { GRID_STRING_COL_DEF, GRID_NUMERIC_COL_DEF, getGridStringOperators, getGridNumericOperators, DataGrid, GridPagination, GridOverlay, GridColumnsPanel, GridFilterPanel, GridColumnMenu } from '@mui/x-data-grid';
import { memo, useState, useMemo, useCallback } from 'react';
import { MdVisibilityOff, MdVisibility } from 'react-icons/md';
import Autocomplete from '@mui/material/Autocomplete';
import { FaFilter } from 'react-icons/fa';

// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/styles/tailwind-output.css
styleInject('/*! tailwindcss v4.3.0 | MIT License | https://tailwindcss.com */\n@layer properties {\n  @supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))) {\n    *,\n    :before,\n    :after,\n    ::backdrop {\n      --tw-space-x-reverse:0;\n      --tw-border-style:solid;\n      --tw-font-weight:initial;\n      --tw-shadow:0 0 #0000;\n      --tw-shadow-color:initial;\n      --tw-shadow-alpha:100%;\n      --tw-inset-shadow:0 0 #0000;\n      --tw-inset-shadow-color:initial;\n      --tw-inset-shadow-alpha:100%;\n      --tw-ring-color:initial;\n      --tw-ring-shadow:0 0 #0000;\n      --tw-inset-ring-color:initial;\n      --tw-inset-ring-shadow:0 0 #0000;\n      --tw-ring-inset:initial;\n      --tw-ring-offset-width:0px;\n      --tw-ring-offset-color:#fff;\n      --tw-ring-offset-shadow:0 0 #0000;\n      --tw-outline-style:solid;\n      --tw-blur:initial;\n      --tw-brightness:initial;\n      --tw-contrast:initial;\n      --tw-grayscale:initial;\n      --tw-hue-rotate:initial;\n      --tw-invert:initial;\n      --tw-opacity:initial;\n      --tw-saturate:initial;\n      --tw-sepia:initial;\n      --tw-drop-shadow:initial;\n      --tw-drop-shadow-color:initial;\n      --tw-drop-shadow-alpha:100%;\n      --tw-drop-shadow-size:initial;\n    }\n  }\n}\n@layer theme {\n  :root,\n  :host {\n    --font-sans:ui-sans-serif,\n      system-ui,\n      sans-serif,\n      "Apple Color Emoji",\n      "Segoe UI Emoji",\n      "Segoe UI Symbol",\n      "Noto Color Emoji";\n    --font-mono:ui-monospace,\n      SFMono-Regular,\n      Menlo,\n      Monaco,\n      Consolas,\n      "Liberation Mono",\n      "Courier New",\n      monospace;\n    --color-red-600:oklch(57.7% .245 27.325);\n    --color-green-50:oklch(98.2% .018 155.826);\n    --color-green-100:oklch(96.2% .044 156.743);\n    --color-green-400:oklch(79.2% .209 151.711);\n    --color-green-500:oklch(72.3% .219 149.579);\n    --color-green-800:oklch(44.8% .119 151.328);\n    --color-teal-500:oklch(70.4% .14 182.503);\n    --color-blue-500:oklch(62.3% .214 259.815);\n    --color-gray-50:oklch(98.5% .002 247.839);\n    --color-gray-100:oklch(96.7% .003 264.542);\n    --color-gray-200:oklch(92.8% .006 264.531);\n    --color-gray-300:oklch(87.2% .01 258.338);\n    --color-gray-500:oklch(55.1% .027 264.364);\n    --color-gray-600:oklch(44.6% .03 256.802);\n    --color-gray-700:oklch(37.3% .034 259.733);\n    --color-gray-900:oklch(21% .034 264.665);\n    --color-black:#000;\n    --color-white:#fff;\n    --spacing:.25rem;\n    --container-3xl:48rem;\n    --container-5xl:64rem;\n    --text-xs:.75rem;\n    --text-xs--line-height:calc(1 / .75);\n    --text-sm:.875rem;\n    --text-sm--line-height:calc(1.25 / .875);\n    --text-lg:1.125rem;\n    --text-lg--line-height:calc(1.75 / 1.125);\n    --text-2xl:1.5rem;\n    --text-2xl--line-height:calc(2 / 1.5);\n    --font-weight-medium:500;\n    --font-weight-semibold:600;\n    --font-weight-bold:700;\n    --radius-md:.375rem;\n    --radius-lg:.5rem;\n    --default-transition-duration:.15s;\n    --default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);\n    --default-font-family:var(--font-sans);\n    --default-mono-font-family:var(--font-mono);\n  }\n  :root {\n    --primary-color:#00b2a6;\n    --font-poppins:"Poppins", sans-serif;\n    --font-family:var(--font-poppins);\n    --default-font-family:var(--font-poppins);\n    --mui-font-family:var(--font-poppins);\n    --mantine-font-family:var(--font-poppins);\n  }\n}\n@layer base {\n  *,\n  :after,\n  :before,\n  ::backdrop {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n  ::file-selector-button {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n  html,\n  :host {\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    line-height: 1.5;\n    font-family: var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");\n    font-feature-settings: var(--default-font-feature-settings,normal);\n    font-variation-settings: var(--default-font-variation-settings,normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n  b,\n  strong {\n    font-weight: bolder;\n  }\n  code,\n  kbd,\n  samp,\n  pre {\n    font-family: var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings,normal);\n    font-variation-settings: var(--default-mono-font-variation-settings,normal);\n    font-size: 1em;\n  }\n  small {\n    font-size: 80%;\n  }\n  sub,\n  sup {\n    vertical-align: baseline;\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n  }\n  sub {\n    bottom: -.25em;\n  }\n  sup {\n    top: -.5em;\n  }\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n  :-moz-focusring {\n    outline: auto;\n  }\n  progress {\n    vertical-align: baseline;\n  }\n  summary {\n    display: list-item;\n  }\n  ol,\n  ul,\n  menu {\n    list-style: none;\n  }\n  img,\n  svg,\n  video,\n  canvas,\n  audio,\n  iframe,\n  embed,\n  object {\n    vertical-align: middle;\n    display: block;\n  }\n  img,\n  video {\n    max-width: 100%;\n    height: auto;\n  }\n  button,\n  input,\n  select,\n  optgroup,\n  textarea {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n  ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n  ::placeholder {\n    opacity: 1;\n  }\n  @supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px) {\n    ::placeholder {\n      color: currentColor;\n    }\n    @supports (color:color-mix(in lab, red, red)) {\n      ::placeholder {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n  textarea {\n    resize: vertical;\n  }\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n  ::-webkit-datetime-edit {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-year-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-month-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-day-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-hour-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-minute-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-second-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-millisecond-field {\n    padding-block: 0;\n  }\n  ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n  ::-webkit-calendar-picker-indicator {\n    line-height: 1;\n  }\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n  button,\n  input:where([type=button], [type=reset], [type=submit]) {\n    appearance: button;\n  }\n  ::file-selector-button {\n    appearance: button;\n  }\n  ::-webkit-inner-spin-button {\n    height: auto;\n  }\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n  [hidden]:where(:not([hidden=until-found])) {\n    display: none !important;\n  }\n}\n@layer components;\n@layer utilities {\n  .container {\n    width: 100%;\n  }\n  @media (min-width: 40rem) {\n    .container {\n      max-width: 40rem;\n    }\n  }\n  @media (min-width: 48rem) {\n    .container {\n      max-width: 48rem;\n    }\n  }\n  @media (min-width: 64rem) {\n    .container {\n      max-width: 64rem;\n    }\n  }\n  @media (min-width: 80rem) {\n    .container {\n      max-width: 80rem;\n    }\n  }\n  @media (min-width: 96rem) {\n    .container {\n      max-width: 96rem;\n    }\n  }\n  .mt-2 {\n    margin-top: calc(var(--spacing) * 2);\n  }\n  .mt-4 {\n    margin-top: calc(var(--spacing) * 4);\n  }\n  .mb-2 {\n    margin-bottom: calc(var(--spacing) * 2);\n  }\n  .ml-1 {\n    margin-left: calc(var(--spacing) * 1);\n  }\n  .block {\n    display: block;\n  }\n  .block\\! {\n    display: block !important;\n  }\n  .flex {\n    display: flex;\n  }\n  .grid {\n    display: grid;\n  }\n  .hidden {\n    display: none;\n  }\n  .inline-block {\n    display: inline-block;\n  }\n  .table {\n    display: table;\n  }\n  .h-5 {\n    height: calc(var(--spacing) * 5);\n  }\n  .h-15 {\n    height: calc(var(--spacing) * 15);\n  }\n  .h-full {\n    height: 100%;\n  }\n  .min-h-\\[210px\\]\\! {\n    min-height: 210px !important;\n  }\n  .min-h-screen {\n    min-height: 100vh;\n  }\n  .w-2 {\n    width: calc(var(--spacing) * 2);\n  }\n  .w-5 {\n    width: calc(var(--spacing) * 5);\n  }\n  .w-80 {\n    width: calc(var(--spacing) * 80);\n  }\n  .w-full {\n    width: 100%;\n  }\n  .max-w-3xl {\n    max-width: var(--container-3xl);\n  }\n  .max-w-5xl {\n    max-width: var(--container-5xl);\n  }\n  .min-w-0 {\n    min-width: calc(var(--spacing) * 0);\n  }\n  .flex-1 {\n    flex: 1;\n  }\n  .border-collapse {\n    border-collapse: collapse;\n  }\n  .resize {\n    resize: both;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .justify-end {\n    justify-content: flex-end;\n  }\n  .gap-1 {\n    gap: calc(var(--spacing) * 1);\n  }\n  .gap-2 {\n    gap: calc(var(--spacing) * 2);\n  }\n  .gap-3 {\n    gap: calc(var(--spacing) * 3);\n  }\n  .gap-4 {\n    gap: calc(var(--spacing) * 4);\n  }\n  :where(.space-x-4 > :not(:last-child)) {\n    --tw-space-x-reverse:0;\n    margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));\n  }\n  .truncate {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n  .truncate\\! {\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    overflow: hidden !important;\n  }\n  .overflow-hidden {\n    overflow: hidden;\n  }\n  .rounded {\n    border-radius: .25rem;\n  }\n  .rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .rounded-md {\n    border-radius: var(--radius-md);\n  }\n  .rounded-tl-md {\n    border-top-left-radius: var(--radius-md);\n  }\n  .rounded-bl-md {\n    border-bottom-left-radius: var(--radius-md);\n  }\n  .border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .border-gray-300 {\n    border-color: var(--color-gray-300);\n  }\n  .border-green-500 {\n    border-color: var(--color-green-500);\n  }\n  .bg-\\(--primary-color\\) {\n    background-color: var(--primary-color);\n  }\n  .bg-blue-500 {\n    background-color: var(--color-blue-500);\n  }\n  .bg-gray-50 {\n    background-color: var(--color-gray-50);\n  }\n  .bg-gray-100 {\n    background-color: var(--color-gray-100);\n  }\n  .bg-gray-200 {\n    background-color: var(--color-gray-200);\n  }\n  .bg-gray-900 {\n    background-color: var(--color-gray-900);\n  }\n  .bg-green-50 {\n    background-color: var(--color-green-50);\n  }\n  .bg-green-100 {\n    background-color: var(--color-green-100);\n  }\n  .bg-red-600 {\n    background-color: var(--color-red-600);\n  }\n  .bg-teal-500 {\n    background-color: var(--color-teal-500);\n  }\n  .bg-white {\n    background-color: var(--color-white);\n  }\n  .p-2 {\n    padding: calc(var(--spacing) * 2);\n  }\n  .p-3 {\n    padding: calc(var(--spacing) * 3);\n  }\n  .p-4 {\n    padding: calc(var(--spacing) * 4);\n  }\n  .px-2 {\n    padding-inline: calc(var(--spacing) * 2);\n  }\n  .px-4 {\n    padding-inline: calc(var(--spacing) * 4);\n  }\n  .px-6 {\n    padding-inline: calc(var(--spacing) * 6);\n  }\n  .py-0 {\n    padding-block: calc(var(--spacing) * 0);\n  }\n  .py-0\\.5 {\n    padding-block: calc(var(--spacing) * .5);\n  }\n  .py-1 {\n    padding-block: calc(var(--spacing) * 1);\n  }\n  .py-2 {\n    padding-block: calc(var(--spacing) * 2);\n  }\n  .py-3 {\n    padding-block: calc(var(--spacing) * 3);\n  }\n  .py-4 {\n    padding-block: calc(var(--spacing) * 4);\n  }\n  .pt-1 {\n    padding-top: calc(var(--spacing) * 1);\n  }\n  .pt-4 {\n    padding-top: calc(var(--spacing) * 4);\n  }\n  .pr-4 {\n    padding-right: calc(var(--spacing) * 4);\n  }\n  .pr-5 {\n    padding-right: calc(var(--spacing) * 5);\n  }\n  .pb-5 {\n    padding-bottom: calc(var(--spacing) * 5);\n  }\n  .pl-5 {\n    padding-left: calc(var(--spacing) * 5);\n  }\n  .text-center {\n    text-align: center;\n  }\n  .font-mono {\n    font-family: var(--font-mono);\n  }\n  .text-2xl {\n    font-size: var(--text-2xl);\n    line-height: var(--tw-leading,var(--text-2xl--line-height));\n  }\n  .text-lg {\n    font-size: var(--text-lg);\n    line-height: var(--tw-leading,var(--text-lg--line-height));\n  }\n  .text-sm {\n    font-size: var(--text-sm);\n    line-height: var(--tw-leading,var(--text-sm--line-height));\n  }\n  .text-sm\\! {\n    font-size: var(--text-sm) !important;\n    line-height: var(--tw-leading,var(--text-sm--line-height)) !important;\n  }\n  .text-xs {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading,var(--text-xs--line-height));\n  }\n  .text-xs\\! {\n    font-size: var(--text-xs) !important;\n    line-height: var(--tw-leading,var(--text-xs--line-height)) !important;\n  }\n  .font-bold {\n    --tw-font-weight:var(--font-weight-bold);\n    font-weight: var(--font-weight-bold);\n  }\n  .font-medium {\n    --tw-font-weight:var(--font-weight-medium);\n    font-weight: var(--font-weight-medium);\n  }\n  .font-semibold {\n    --tw-font-weight:var(--font-weight-semibold);\n    font-weight: var(--font-weight-semibold);\n  }\n  .font-semibold\\! {\n    --tw-font-weight:var(--font-weight-semibold) !important;\n    font-weight: var(--font-weight-semibold) !important;\n  }\n  .text-ellipsis {\n    text-overflow: ellipsis;\n  }\n  .whitespace-nowrap {\n    white-space: nowrap;\n  }\n  .text-black {\n    color: var(--color-black);\n  }\n  .text-black\\/80 {\n    color: #000c;\n  }\n  @supports (color:color-mix(in lab, red, red)) {\n    .text-black\\/80 {\n      color: color-mix(in oklab, var(--color-black) 80%, transparent);\n    }\n  }\n  .text-gray-500 {\n    color: var(--color-gray-500);\n  }\n  .text-gray-600 {\n    color: var(--color-gray-600);\n  }\n  .text-gray-700 {\n    color: var(--color-gray-700);\n  }\n  .text-gray-900 {\n    color: var(--color-gray-900);\n  }\n  .text-green-400 {\n    color: var(--color-green-400);\n  }\n  .text-green-800 {\n    color: var(--color-green-800);\n  }\n  .text-white {\n    color: var(--color-white);\n  }\n  .uppercase {\n    text-transform: uppercase;\n  }\n  .underline {\n    text-decoration-line: underline;\n  }\n  .shadow-\\[0_2px_6px_-1px_rgba\\(0\\,0\\,0\\,\\.16\\)\\,0_6px_18px_-1px_rgba\\(0\\,0\\,0\\,\\.06\\)\\] {\n    --tw-shadow:0 2px 6px -1px var(--tw-shadow-color,#00000029), 0 6px 18px -1px var(--tw-shadow-color,#0000000f);\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .outline {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n  .blur {\n    --tw-blur:blur(8px);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .filter {\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .transition {\n    transition-property:\n      color,\n      background-color,\n      border-color,\n      outline-color,\n      text-decoration-color,\n      fill,\n      stroke,\n      --tw-gradient-from,\n      --tw-gradient-via,\n      --tw-gradient-to,\n      opacity,\n      box-shadow,\n      transform,\n      translate,\n      scale,\n      rotate,\n      filter,\n      -webkit-backdrop-filter,\n      backdrop-filter,\n      display,\n      content-visibility,\n      overlay,\n      pointer-events;\n    transition-timing-function: var(--tw-ease,var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration,var(--default-transition-duration));\n  }\n  .select-none {\n    -webkit-user-select: none;\n    user-select: none;\n  }\n  .disabled\\:opacity-50:disabled {\n    opacity: .5;\n  }\n}\n@layer mui, mantine;\n@property --tw-space-x-reverse { syntax:"*";inherits:false;initial-value:0 }\n@property --tw-border-style { syntax:"*";inherits:false;initial-value:solid }\n@property --tw-font-weight { syntax:"*";inherits:false }\n@property --tw-shadow { syntax:"*";inherits:false;initial-value:0 0 #0000 }\n@property --tw-shadow-color { syntax:"*";inherits:false }\n@property --tw-shadow-alpha { syntax:"<percentage>";inherits:false;initial-value:100% }\n@property --tw-inset-shadow { syntax:"*";inherits:false;initial-value:0 0 #0000 }\n@property --tw-inset-shadow-color { syntax:"*";inherits:false }\n@property --tw-inset-shadow-alpha { syntax:"<percentage>";inherits:false;initial-value:100% }\n@property --tw-ring-color { syntax:"*";inherits:false }\n@property --tw-ring-shadow { syntax:"*";inherits:false;initial-value:0 0 #0000 }\n@property --tw-inset-ring-color { syntax:"*";inherits:false }\n@property --tw-inset-ring-shadow { syntax:"*";inherits:false;initial-value:0 0 #0000 }\n@property --tw-ring-inset { syntax:"*";inherits:false }\n@property --tw-ring-offset-width { syntax:"<length>";inherits:false;initial-value:0 }\n@property --tw-ring-offset-color { syntax:"*";inherits:false;initial-value:#fff }\n@property --tw-ring-offset-shadow { syntax:"*";inherits:false;initial-value:0 0 #0000 }\n@property --tw-outline-style { syntax:"*";inherits:false;initial-value:solid }\n@property --tw-blur { syntax:"*";inherits:false }\n@property --tw-brightness { syntax:"*";inherits:false }\n@property --tw-contrast { syntax:"*";inherits:false }\n@property --tw-grayscale { syntax:"*";inherits:false }\n@property --tw-hue-rotate { syntax:"*";inherits:false }\n@property --tw-invert { syntax:"*";inherits:false }\n@property --tw-opacity { syntax:"*";inherits:false }\n@property --tw-saturate { syntax:"*";inherits:false }\n@property --tw-sepia { syntax:"*";inherits:false }\n@property --tw-drop-shadow { syntax:"*";inherits:false }\n@property --tw-drop-shadow-color { syntax:"*";inherits:false }\n@property --tw-drop-shadow-alpha { syntax:"<percentage>";inherits:false;initial-value:100% }\n@property --tw-drop-shadow-size { syntax:"*";inherits:false }\n');
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
  titleColor = "var(--primary-color)",
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
var DIALOG_PAPER_FONT_SX = {
  fontFamily: "var(--font-family, inherit) !important",
  "& .MuiDialogTitle-root, & .MuiDialogContent-root, & .MuiDialogActions-root, & .MuiTypography-root": {
    fontFamily: "inherit !important"
  }
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
      slotProps: {
        backdrop: { sx: backdropStyle },
        paper: { sx: DIALOG_PAPER_FONT_SX }
      },
      children: [
        title && /* @__PURE__ */ jsx(DialogTitle, { children: /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-black", children: title }) }),
        /* @__PURE__ */ jsx(DialogContent, { className: "text-black", children }),
        actions && /* @__PURE__ */ jsx(DialogActions, { children: actions })
      ]
    }
  );
}
var dialog_default = Dialog;
var tableFont = "var(--font-family, var(--font-poppins, Poppins, sans-serif))";
var localeText = __spreadProps(__spreadValues({}, ptBR.components.MuiDataGrid.defaultProps.localeText), {
  noColumnsOverlayLabel: "Nenhuma coluna dispon\xEDvel",
  noColumnsOverlayManageColumns: "Gerenciar colunas",
  columnsManagementSearchTitle: "Buscar coluna",
  columnsManagementNoColumns: "Nenhuma coluna para mostrar",
  columnsManagementShowHideAllText: "Mostrar/Ocultar todas",
  columnsManagementReset: "Redefinir",
  columnsManagementDeleteIconLabel: "Excluir",
  columnMenuManageColumns: "Gerenciar colunas",
  columnMenuShowColumns: "Mostrar colunas",
  columnMenuLabel: "Menu da coluna",
  columnMenuHideColumn: "Ocultar",
  columnMenuUnsort: "Remover ordena\xE7\xE3o",
  columnMenuSortAsc: "Ordenar ASC",
  columnMenuSortDesc: "Ordenar DESC",
  columnMenuFilter: "Filtrar",
  toolbarQuickFilterLabel: "Filtro r\xE1pido",
  toolbarQuickFilterPlaceholder: "Filtrar\u2026",
  toolbarQuickFilterDeleteIconLabel: "Limpar filtro",
  toolbarExport: "Exportar",
  toolbarExportLabel: "Exportar",
  toolbarExportCSV: "Baixar como CSV",
  toolbarExportPrint: "Imprimir",
  toolbarColumns: "Colunas",
  toolbarColumnsLabel: "Selecionar colunas",
  toolbarFilters: "Filtros",
  toolbarFiltersLabel: "Mostrar filtros",
  toolbarFiltersTooltipHide: "Ocultar filtros",
  toolbarFiltersTooltipShow: "Mostrar filtros",
  toolbarFiltersTooltipActive: (count) => count === 1 ? `${count} filtro ativo` : `${count} filtros ativos`,
  toolbarDensity: "Densidade",
  toolbarDensityLabel: "Densidade",
  toolbarDensityCompact: "Compacta",
  toolbarDensityStandard: "Padr\xE3o",
  toolbarDensityComfortable: "Confort\xE1vel",
  filterPanelAddFilter: "Adicionar filtro",
  filterPanelDeleteIconLabel: "Excluir",
  filterPanelOperatorAnd: "E",
  filterPanelOperatorOr: "OU",
  filterPanelColumn: "Colunas",
  filterPanelInputLabel: "Valor",
  filterPanelInputPlaceholder: "Valor do filtro",
  filterOperatorContains: "cont\xE9m",
  filterOperatorEquals: "igual a",
  filterOperatorStartsWith: "come\xE7a com",
  filterOperatorEndsWith: "termina com",
  filterOperatorIs: "\xE9",
  filterOperatorNot: "n\xE3o \xE9",
  filterOperatorAfter: "depois de",
  filterOperatorOnOrAfter: "em ou depois de",
  filterOperatorBefore: "antes de",
  filterOperatorOnOrBefore: "em ou antes de",
  filterOperatorIsEmpty: "est\xE1 vazio",
  filterOperatorIsNotEmpty: "n\xE3o est\xE1 vazio",
  filterOperatorIsAnyOf: "\xE9 qualquer um de",
  footerTotalRows: "Total de linhas:",
  footerRowSelected: (count) => count === 1 ? "1 linha selecionada" : `${count.toLocaleString()} linhas selecionadas`,
  footerTotalVisibleRows: (visibleCount, totalCount) => `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
  paginationRowsPerPage: "Linhas por p\xE1gina:",
  paginationItemAriaLabel: (type) => {
    switch (type) {
      case "first":
        return "Primeira p\xE1gina";
      case "last":
        return "\xDAltima p\xE1gina";
      case "next":
        return "Pr\xF3xima p\xE1gina";
      case "previous":
        return "P\xE1gina anterior";
      default:
        return "";
    }
  },
  noRowsLabel: "Nenhum dado encontrado",
  noResultsOverlayLabel: "Nenhum resultado encontrado",
  checkboxSelectionHeaderName: "Sele\xE7\xE3o de checkbox",
  checkboxSelectionSelectAllRows: "Selecionar todas as linhas",
  checkboxSelectionUnselectAllRows: "Desmarcar todas as linhas",
  checkboxSelectionSelectRow: "Selecionar linha",
  checkboxSelectionUnselectRow: "Desmarcar linha",
  columnHeaderSortIconLabel: "Ordenar",
  groupingColumnHeaderName: "Grupo",
  groupColumn: (name) => `Agrupar por ${name}`,
  unGroupColumn: (name) => `Parar de agrupar por ${name}`,
  detailPanelToggle: "Alternar painel de detalhes",
  expandDetailPanel: "Expandir",
  collapseDetailPanel: "Recolher",
  treeDataGroupingHeaderName: "Grupo",
  treeDataExpand: "ver filhos",
  treeDataCollapse: "ocultar filhos",
  aggregationMenuItemHeader: "Agrega\xE7\xE3o",
  aggregationFunctionLabelSum: "soma",
  aggregationFunctionLabelAvg: "m\xE9dia",
  aggregationFunctionLabelMin: "m\xEDn",
  aggregationFunctionLabelMax: "m\xE1x",
  aggregationFunctionLabelSize: "tamanho",
  paginationDisplayedRows: ({ from, to, count }) => {
    const total = count === -1 ? "mais de " + to : count;
    return `${from}\u2013${to} de ${total}`;
  }
});
var columnPanelSx = {
  padding: 2,
  width: "350px",
  color: "#000000DE",
  "*": { fontFamily: `${tableFont} !important` }
};
var columnMenuSx = {
  "*": { fontFamily: `${tableFont} !important` },
  "& .MuiListItemText-primary": {
    fontSize: "14px !important"
  }
};
var filterSx = {
  width: "750px",
  "*": {
    fontSize: "14px !important",
    fontFamily: `${tableFont} !important`
  },
  "& .MuiDataGrid-filterFormColumnInput": { width: "230px" },
  "& .MuiDataGrid-filterFormOperatorInput": { width: "230px" }
};
var filterTheme = createTheme({
  typography: { fontFamily: tableFont },
  components: {
    MuiList: {
      styleOverrides: {
        root: { fontFamily: tableFont }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: { fontFamily: tableFont }
      }
    }
  }
});
var paginationSx = {
  "& .MuiTablePagination-root": {
    fontSize: "12px !important",
    fontFamily: `${tableFont} !important`
  },
  "& .MuiTablePagination-selectLabel": {
    fontSize: "12px !important",
    fontFamily: `${tableFont} !important`
  },
  "& .MuiTablePagination-displayedRows": {
    fontSize: "12px !important",
    fontFamily: `${tableFont} !important`
  },
  "& .MuiTablePagination-select": {
    fontSize: "12px !important",
    fontFamily: `${tableFont} !important`
  },
  "& .MuiTablePagination-toolbar": {
    minHeight: "40px !important",
    padding: "0 8px !important"
  }
};
var tableSx = {
  fontSize: "13px",
  fontFamily: `${tableFont} !important`,
  "& *": {
    fontFamily: `${tableFont} !important`
  },
  "& .MuiDataGrid-row:nth-of-type(even)": {
    backgroundColor: "#F9FAFB"
  },
  "& .MuiDataGrid-row:nth-of-type(odd)": {
    backgroundColor: "#FFFFFF"
  },
  "& .MuiDataGrid-row.Mui-selected:nth-of-type(even)": {
    backgroundColor: "#F9FAFB !important"
  },
  "& .MuiDataGrid-row.Mui-selected:nth-of-type(odd)": {
    backgroundColor: "#FFFFFF !important"
  },
  "& .MuiDataGrid-row:hover": { backgroundColor: "#F3F4F6 !important" },
  "& .MuiDataGrid-columnHeaderTitleContainer": {
    color: "#FFFFFF",
    justifyContent: "center",
    "& svg": { color: "#FFFFFF" }
  },
  "& .MuiDataGrid-iconButtonContainer .MuiIconButton-root, & .MuiDataGrid-menuIconButton": {
    color: "#FFFFFF"
  },
  "& .MuiDataGrid-iconButtonContainer .MuiIconButton-root:hover, & .MuiDataGrid-menuIconButton:hover": { backgroundColor: "transparent" },
  "& .MuiDataGrid-iconButtonContainer .MuiIconButton-root.Mui-focusVisible, & .MuiDataGrid-menuIconButton.Mui-focusVisible": { backgroundColor: "transparent" },
  "& .MuiDataGrid-columnHeaders": {
    background: "linear-gradient(to right, #00B2A6 0%, #0AAEB2 100%)"
  },
  "& .MuiDataGrid-columnHeader": {
    color: "#FFFFFF",
    fontWeight: "bold",
    backgroundColor: "transparent",
    "& svg": { color: "#FFFFFF" }
  },
  "& .MuiDataGrid-columnHeader:hover": { backgroundColor: "transparent" },
  "& .MuiDataGrid-columnHeader:hover .MuiIconButton-root": {
    backgroundColor: "transparent"
  },
  "& .MuiDataGrid-columnHeader:focus-within": {
    backgroundColor: "transparent"
  },
  "& .MuiDataGrid-columnHeader--sorted": { backgroundColor: "transparent" },
  "& .MuiDataGrid-columnHeader--sorted .MuiIconButton-root": {
    backgroundColor: "transparent"
  },
  "& .MuiDataGrid-sortIcon": { color: "#FFFFFF" },
  "& .MuiDataGrid-sortIcon:hover": { backgroundColor: "transparent" },
  "& .MuiDataGrid-columnHeaderTitle": { fontWeight: "500", color: "#FFFFFF" }
};
var createChange = (item, applyValue) => (index) => ({ target }) => {
  const [start = "", end = ""] = Array.isArray(item.value) ? item.value : [];
  applyValue(__spreadProps(__spreadValues({}, item), {
    value: index === 0 ? [target.value, end] : [start, target.value]
  }));
};
var textBetweenOp = {
  label: "entre",
  value: "between",
  getApplyFilterFn: (filter) => {
    if (!filter.value || !Array.isArray(filter.value)) return null;
    const [start, end] = filter.value;
    if (!start || !end) return null;
    return (value) => {
      const cell = (value == null ? void 0 : value.toString()) || "";
      return cell >= start && cell <= end;
    };
  },
  InputComponent: ({ item, applyValue, focusElementRef }) => {
    const onChange = createChange(item, applyValue);
    return /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          size: "small",
          label: "De",
          variant: "outlined",
          inputRef: focusElementRef,
          value: (item.value || ["", ""])[0] || "",
          onChange: onChange(0),
          placeholder: "Inicial"
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          size: "small",
          label: "At\xE9",
          variant: "outlined",
          value: (item.value || ["", ""])[1] || "",
          onChange: onChange(1),
          placeholder: "Final"
        }
      )
    ] });
  }
};
var numberBetweenOp = {
  label: "entre",
  value: "between",
  getApplyFilterFn: (filter) => {
    if (!filter.value || !Array.isArray(filter.value)) return null;
    const [start, end] = filter.value;
    if (start === "" || end === "" || start == null || end == null) return null;
    return (value) => {
      const number = Number(value);
      return number >= Number(start) && number <= Number(end);
    };
  },
  InputComponent: ({ item, applyValue, focusElementRef }) => {
    const onChange = createChange(item, applyValue);
    return /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          size: "small",
          label: "De",
          type: "number",
          variant: "outlined",
          inputRef: focusElementRef,
          value: (item.value || ["", ""])[0] || "",
          onChange: onChange(0),
          placeholder: "M\xEDnimo"
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          size: "small",
          label: "At\xE9",
          type: "number",
          variant: "outlined",
          value: (item.value || ["", ""])[1] || "",
          onChange: onChange(1),
          placeholder: "M\xE1ximo"
        }
      )
    ] });
  }
};
var getTextOps = () => {
  return [...getGridStringOperators(), textBetweenOp];
};
var getNumberOps = () => {
  return [...getGridNumericOperators(), numberBetweenOp];
};
GRID_STRING_COL_DEF.filterOperators = getTextOps();
GRID_NUMERIC_COL_DEF.filterOperators = getNumberOps();
function CustomColumnsPanel(props) {
  return /* @__PURE__ */ jsx(GridColumnsPanel, __spreadProps(__spreadValues({}, props), { sx: columnPanelSx }));
}
function CustomColumnMenu(props) {
  return /* @__PURE__ */ jsx(Box, { sx: columnMenuSx, children: /* @__PURE__ */ jsx(GridColumnMenu, __spreadValues({}, props)) });
}
function CustomFilterPanel(props) {
  return /* @__PURE__ */ jsx(ThemeProvider, { theme: filterTheme, children: /* @__PURE__ */ jsx(GridFilterPanel, __spreadProps(__spreadValues({}, props), { sx: filterSx })) });
}
function CustomNoRowsOverlay() {
  return /* @__PURE__ */ jsx(GridOverlay, { children: /* @__PURE__ */ jsx(Box, { sx: { mt: 1 }, children: "Nenhum dado encontrado." }) });
}
function CustomPagination() {
  return /* @__PURE__ */ jsx(Box, { sx: paginationSx, children: /* @__PURE__ */ jsx(GridPagination, {}) });
}
var DataTable = (_a) => {
  var rest = __objRest(_a, []);
  return /* @__PURE__ */ jsx(Box, { sx: { mb: 2, mt: 2, height: "100%" }, children: /* @__PURE__ */ jsx(
    DataGrid,
    __spreadProps(__spreadValues({
      sx: tableSx
    }, rest), {
      className: "min-h-[210px]!",
      localeText,
      disableRowSelectionOnClick: true,
      slotProps: {
        loadingOverlay: {
          variant: "linear-progress",
          noRowsVariant: "skeleton"
        }
      },
      slots: {
        columnMenu: CustomColumnMenu,
        filterPanel: CustomFilterPanel,
        columnsPanel: CustomColumnsPanel,
        noRowsOverlay: CustomNoRowsOverlay,
        pagination: CustomPagination
      }
    })
  ) });
};
var data_table_default = DataTable;
var DEFAULT_TAB_COLOR = "var(--primary-color)";
var DEFAULT_TAB_FONT_FAMILY = "var(--font-family, inherit)";
var Tabs = styled(Tabs$1, {
  shouldForwardProp: (prop) => prop !== "color"
})(({ color = DEFAULT_TAB_COLOR }) => ({
  fontFamily: `${DEFAULT_TAB_FONT_FAMILY} !important`,
  "& .MuiTabs-indicator": { backgroundColor: color }
}));
var Tab = styled(Tab$1, {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "fontFamily"
})(
  ({ color = DEFAULT_TAB_COLOR, fontFamily = DEFAULT_TAB_FONT_FAMILY }) => ({
    fontWeight: "500 !important",
    color: "#000000CC !important",
    fontSize: "14px !important",
    textTransform: "uppercase !important",
    fontFamily: `${fontFamily} !important`,
    "&.Mui-selected": { color: `${color} !important` }
  })
);

// src/core/css-var.ts
function withCssVar(style, name, value) {
  if (value == null || value === "") return style;
  return __spreadProps(__spreadValues({}, style), { [name]: value });
}
var DEFAULT_ACCENT = "var(--primary-color)";
var accent = "var(--primary-color)";
var errorColor = "#D32F2F";
var focusLabel = { color: accent };
var errorLabel = { color: errorColor };
var borderAccent = { borderColor: accent };
var borderError = { borderColor: errorColor };
var underlineAccent = { borderBottomColor: accent };
var underlineError = { borderBottomColor: errorColor };
var disabledText = { color: "#9E9E9E", cursor: "not-allowed" };
var disabledBorder = { borderColor: "#9E9E9E", cursor: "not-allowed" };
var input = {
  color: "#333",
  fontSize: "13px !important",
  fontFamily: "var(--font-poppins) !important"
};
var InputTextField = styled(TextField)({
  fontFamily: "var(--font-poppins) !important",
  "& input": input,
  "& label": input,
  "& label.Mui-focused": focusLabel,
  "& label.Mui-error": errorLabel,
  "& .MuiInput-underline:after": underlineAccent,
  "& .MuiInput-underline.Mui-error:after": underlineError,
  "& .MuiOutlinedInput-root": {
    "& fieldset": borderAccent,
    "&:hover fieldset": borderAccent,
    "&.Mui-disabled fieldset": disabledBorder,
    "&.Mui-focused fieldset": borderAccent,
    "&.Mui-error fieldset": borderError,
    "&.Mui-error:hover fieldset": borderError,
    "&.Mui-error.Mui-focused fieldset": borderError
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "#F9FAFB",
    "&:after": underlineAccent,
    "&:before": underlineAccent,
    "&:hover:before": underlineAccent,
    "&.Mui-error:after": underlineError,
    "&.Mui-error:before": underlineError,
    "&:hover": { backgroundColor: "#F5F5F5" },
    "&.Mui-error:hover:before": underlineError,
    fontFamily: "var(--font-poppins) !important",
    "&.Mui-disabled": __spreadProps(__spreadValues({}, disabledText), { backgroundColor: "#F9FAFB" })
  },
  "& .MuiInputBase-input": __spreadProps(__spreadValues({}, input), { "&.Mui-disabled": disabledText }),
  "& .MuiFormHelperText-root": {
    fontSize: "11px",
    marginLeft: 2,
    fontFamily: "var(--font-poppins) !important"
  },
  "& .MuiFormHelperText-root.Mui-error": { color: errorColor },
  "& .Mui-disabled": disabledText
});
var css_default = memo(InputTextField);
function useInputMasker({ type, onChange }) {
  const formatValue = useCallback(
    (v) => {
      if (!v) return "";
      switch (type) {
        case "cpf-cnpj":
          return formatCpfCnpj(v);
        case "numeric":
          return removeDigits(v);
        case "tel":
          return formatPhoneBr(v);
        case "price":
          return formatPriceBrl(v);
        case "text-only":
          return removeTextOnly(v);
        case "text-no-number":
          return removeNonDigits(v);
        case "item-170":
          return formatItem170(v);
        case "item-150":
          return formatItem150(v);
        default:
          return v;
      }
    },
    [type]
  );
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange == null ? void 0 : onChange(__spreadProps(__spreadValues({}, e), {
      target: __spreadProps(__spreadValues({}, e.target), { value: formatValue(newValue) })
    }));
  };
  return { handleChange };
}
function withPasswordToggle({
  showPwd,
  canToggle,
  slotProps,
  setShowPwd,
  color = DEFAULT_ACCENT
}) {
  if (!canToggle) return slotProps;
  const Icon = showPwd ? MdVisibilityOff : MdVisibility;
  return __spreadProps(__spreadValues({}, slotProps), {
    input: __spreadProps(__spreadValues({}, slotProps == null ? void 0 : slotProps.input), {
      endAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsx(
        IconButton,
        {
          edge: "end",
          size: "small",
          sx: { color },
          onClick: () => setShowPwd((prev) => !prev),
          children: /* @__PURE__ */ jsx(Icon, { size: 20 })
        }
      ) })
    })
  });
}
function buildSlotProps(args) {
  return withPasswordToggle(args);
}
var CUSTOM_INPUT_TYPES = /* @__PURE__ */ new Set([
  "cpf-cnpj",
  "numeric",
  "price",
  "item-170",
  "item-150",
  "text-only",
  "text-no-number"
]);
function resolveHtmlInputType(type) {
  if (!type || CUSTOM_INPUT_TYPES.has(type)) return "text";
  return type;
}
var Input = (_a) => {
  var _b = _a, {
    color,
    onChange,
    isPassword,
    type = "text",
    size = "small"
  } = _b, rest = __objRest(_b, [
    "color",
    "onChange",
    "isPassword",
    "type",
    "size"
  ]);
  const [showPwd, setShowPwd] = useState(false);
  const isPwd = type === "password";
  const canToggle = isPwd && isPassword;
  const htmlType = resolveHtmlInputType(type);
  const inputType = canToggle && showPwd ? "text" : htmlType;
  const style = useMemo(
    () => withCssVar(rest.style, "--primary-color", color),
    [color, rest.style]
  );
  const slotProps = useMemo(
    () => buildSlotProps({
      color,
      showPwd,
      canToggle,
      setShowPwd,
      slotProps: rest.slotProps
    }),
    [canToggle, color, showPwd, rest.slotProps]
  );
  const { handleChange } = useInputMasker({ type, onChange });
  return /* @__PURE__ */ jsx(
    css_default,
    __spreadProps(__spreadValues({}, rest), {
      size,
      style,
      type: inputType,
      slotProps,
      onChange: handleChange,
      className: cn("select-none", rest.className)
    })
  );
};
var input_default = Input;

// src/components/ui/input-select/utils/css.ts
var optionText = {
  fontSize: "13px !important",
  fontFamily: "var(--font-poppins) !important"
};
var selectMui = {
  "& .MuiAutocomplete-option": __spreadProps(__spreadValues({
    padding: "8px 12px"
  }, optionText), {
    lineHeight: "25px !important"
  }),
  "& .MuiAutocomplete-noOptions": optionText,
  "& .MuiAutocomplete-listbox": { padding: "5px" }
};

// src/components/ui/input-select/utils/constants.ts
var locale = {
  noOptionsText: "Nenhum resultado encontrado"
};
function InputSelect(_a) {
  var _b = _a, {
    input: input2,
    multiple,
    onChange,
    optionLabel,
    noOptionsText = locale.noOptionsText
  } = _b, rest = __objRest(_b, [
    "input",
    "multiple",
    "onChange",
    "optionLabel",
    "noOptionsText"
  ]);
  const handleChange = (event, value, reason, details) => {
    onChange == null ? void 0 : onChange(event, value, reason, details);
  };
  return /* @__PURE__ */ jsx(
    Autocomplete,
    __spreadProps(__spreadValues({}, rest), {
      size: "small",
      multiple,
      onChange: handleChange,
      noOptionsText,
      slotProps: { paper: { sx: selectMui } },
      getOptionLabel: (option) => typeof option === "string" ? "" : optionLabel(option),
      isOptionEqualToValue: (option, value) => JSON.stringify(option) === JSON.stringify(value),
      renderInput: (params) => {
        var _a2;
        return /* @__PURE__ */ jsx(input_default, __spreadProps(__spreadValues(__spreadValues({}, params), input2), { size: (_a2 = input2 == null ? void 0 : input2.size) != null ? _a2 : "small" }));
      }
    })
  );
}
var input_select_default = InputSelect;
var FilterCard = ({
  title,
  setOpen,
  renderFilter
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "h-15 flex items-center w-full bg-white mb-2 rounded-md shadow-[0_2px_6px_-1px_rgba(0,0,0,.16),0_6px_18px_-1px_rgba(0,0,0,.06)]", children: [
    /* @__PURE__ */ jsx("div", { className: "h-full w-2 bg-(--primary-color) rounded-tl-md rounded-bl-md" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex justify-between items-center p-3", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-medium text-lg whitespace-nowrap text-ellipsis overflow-hidden ml-1 text-black/80", children: title }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: renderFilter && /* @__PURE__ */ jsx(
        Tooltip,
        {
          withArrow: true,
          arrowSize: 4,
          color: "#00b2a6",
          arrowOffset: 20,
          label: "Ver filtros",
          className: "text-xs!",
          transitionProps: { transition: "pop", duration: 300 },
          children: /* @__PURE__ */ jsx("span", { className: "flex items-center", children: /* @__PURE__ */ jsx(
            ActionIcon,
            {
              size: 40,
              radius: "md",
              "aria-label": "Ver filtros",
              color: "var(--primary-color)",
              onClick: () => setOpen(true),
              children: /* @__PURE__ */ jsx(FaFilter, { className: "h-5 w-5 text-white" })
            }
          ) })
        }
      ) })
    ] })
  ] });
};
var card_default2 = FilterCard;

// src/components/ui/filter/utils/constants.ts
var FILTER_DEFAULT_ORDER = 99;
var FILTER_DRAWER_PAPER_SX = {
  ["& .MuiDrawer-paper"]: { borderRadius: "0px 0px 20px 20px" }
};
function hasFilterFields(inputs, inputSelect) {
  var _a, _b;
  return ((_a = inputs == null ? void 0 : inputs.length) != null ? _a : 0) > 0 || ((_b = inputSelect == null ? void 0 : inputSelect.length) != null ? _b : 0) > 0;
}
function isInputSelect(field) {
  return "options" in field;
}
function filterInputSelect(props) {
  return props;
}
function sortFilterFields(fields) {
  return [...fields].sort(
    (a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : FILTER_DEFAULT_ORDER) - ((_b = b.order) != null ? _b : FILTER_DEFAULT_ORDER);
    }
  );
}
function mergeFilterFields(inputs, inputSelect) {
  return sortFilterFields([...inputs, ...inputSelect]);
}
function getFilterGridColumns(isMobile, isTablet) {
  if (isMobile) return 1;
  if (isTablet) return 3;
  return 7;
}
var FilterDrawer = ({
  open,
  setOpen,
  onClear,
  onSubmit,
  inputs = [],
  inputSelect = []
}) => {
  const m640 = useMediaQuery("(max-width:640px)");
  const m1120 = useMediaQuery("(max-width:1120px)");
  const allInputs = mergeFilterFields(inputs, inputSelect);
  const renderField = (field, index) => {
    var _a, _b, _c;
    if (isInputSelect(field)) {
      if (field.multiple) {
        return /* @__PURE__ */ jsx(Grid, { size: (_a = field.xs) != null ? _a : 1, children: /* @__PURE__ */ jsx(
          input_select_default,
          __spreadProps(__spreadValues({}, field), {
            id: `inputSM${index}`,
            fullWidth: true
          })
        ) }, `inputSelect-${index}`);
      }
      return /* @__PURE__ */ jsx(Grid, { size: (_b = field.xs) != null ? _b : 1, children: /* @__PURE__ */ jsx(
        input_select_default,
        __spreadProps(__spreadValues({}, field), {
          id: `inputSM${index}`,
          fullWidth: true
        })
      ) }, `inputSelect-${index}`);
    }
    return /* @__PURE__ */ jsx(Grid, { size: (_c = field.xs) != null ? _c : 1, children: /* @__PURE__ */ jsx(input_default, __spreadProps(__spreadValues({}, field), { fullWidth: true })) }, `input-${index}`);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!onSubmit) return;
    onSubmit(event);
    setOpen(false);
  };
  return /* @__PURE__ */ jsx(
    Drawer,
    {
      open,
      anchor: "top",
      onClose: () => setOpen(false),
      sx: FILTER_DRAWER_PAPER_SX,
      children: /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "flex w-full select-none flex-col py-4 pl-5",
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-system-900", children: "Filtros" }),
            /* @__PURE__ */ jsx("p", { className: "pb-5 pt-1 text-sm text-black/80", children: "Para que possamos apresentar dados espec\xEDficos, por favor, preencha os campos abaixo." }),
            /* @__PURE__ */ jsx(
              Grid,
              {
                container: true,
                rowSpacing: 2,
                className: "pr-5",
                columnSpacing: 1,
                columns: getFilterGridColumns(Boolean(m640), Boolean(m1120)),
                children: allInputs.map((field, index) => renderField(field, index))
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-end space-x-4 pr-4 pt-4", children: [
              onClear && /* @__PURE__ */ jsx(
                Button,
                {
                  radius: "sm",
                  color: "#253E56",
                  variant: "outline",
                  onClick: onClear,
                  size: "xs",
                  children: "LIMPAR FILTROS"
                }
              ),
              onSubmit && /* @__PURE__ */ jsx(
                Button,
                {
                  size: "xs",
                  radius: "sm",
                  type: "submit",
                  variant: "filled",
                  color: "var(--primary-color)",
                  children: "PESQUISAR"
                }
              )
            ] })
          ]
        }
      )
    }
  );
};
var filter_default = FilterDrawer;
var Filter = ({
  title,
  inputs,
  onClear,
  onSubmit,
  inputSelect
}) => {
  const [open, setOpen] = useState(false);
  const hasFields = hasFilterFields(inputs, inputSelect);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(card_default2, { title, setOpen, renderFilter: hasFields }),
    /* @__PURE__ */ jsx(
      filter_default,
      {
        open,
        inputs,
        setOpen,
        onClear,
        onSubmit,
        inputSelect
      }
    )
  ] });
};
var filter_default2 = Filter;

export { Tab, Tabs, card_default, data_table_default, dialog_default, filterInputSelect, filter_default2 as filter_default, input_default, input_select_default };
//# sourceMappingURL=chunk-KBUOICGE.mjs.map
//# sourceMappingURL=chunk-KBUOICGE.mjs.map