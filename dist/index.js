'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/lib/utils.ts
function cn(...inputs) {
  const result = [];
  for (const input of inputs) {
    if (!input && input !== 0) continue;
    if (typeof input === "string") {
      result.push(input);
    } else if (typeof input === "number" || typeof input === "bigint") {
      result.push(String(input));
    } else if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) result.push(nested);
    }
  }
  return result.join(" ").replace(/\s+/g, " ").trim();
}
var variantStyles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-500",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 focus-visible:ring-gray-400",
  outline: "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-50 active:bg-gray-100 focus-visible:ring-gray-400",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-gray-400",
  destructive: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500"
};
var sizeStyles = {
  sm: "h-8 px-3 text-sm gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2.5"
};
function Button(_a) {
  var _b = _a, {
    variant = "primary",
    size = "md",
    loading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    children,
    className,
    disabled
  } = _b, props = __objRest(_b, [
    "variant",
    "size",
    "loading",
    "leftIcon",
    "rightIcon",
    "fullWidth",
    "children",
    "className",
    "disabled"
  ]);
  const isDisabled = disabled || loading;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    __spreadProps(__spreadValues({
      className: cn(
        "inline-flex items-center justify-center rounded-md font-medium",
        "transition-colors duration-150 ease-in-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      ),
      disabled: isDisabled
    }, props), {
      children: [
        loading ? /* @__PURE__ */ jsxRuntime.jsx(Spinner, { size }) : leftIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", children: leftIcon }),
        children,
        !loading && rightIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", children: rightIcon })
      ]
    })
  );
}
function Spinner({ size }) {
  const spinnerSize = size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      className: cn("animate-spin shrink-0", spinnerSize),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "circle",
          {
            className: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          }
        )
      ]
    }
  );
}
var sizeStyles2 = {
  sm: "h-8 px-2.5 text-sm",
  md: "h-10 px-3 text-sm",
  lg: "h-12 px-4 text-base"
};
function Input(_a) {
  var _b = _a, {
    label,
    hint,
    error,
    size = "md",
    leftAddon,
    rightAddon,
    fullWidth = false,
    className,
    id
  } = _b, props = __objRest(_b, [
    "label",
    "hint",
    "error",
    "size",
    "leftAddon",
    "rightAddon",
    "fullWidth",
    "className",
    "id"
  ]);
  const inputId = id != null ? id : label == null ? void 0 : label.toLowerCase().replace(/\s+/g, "-");
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-1.5", fullWidth && "w-full"), children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(
      "label",
      {
        htmlFor: inputId,
        className: "text-sm font-medium text-gray-700",
        children: label
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex items-center", children: [
      leftAddon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-3 flex items-center text-gray-500", children: leftAddon }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        __spreadValues({
          id: inputId,
          className: cn(
            "w-full rounded-md border bg-white text-gray-900 placeholder:text-gray-400",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
            sizeStyles2[size],
            error ? "border-red-400 focus:border-red-400 focus:ring-red-300" : "border-gray-300 focus:border-blue-500 focus:ring-blue-300",
            leftAddon && "pl-9",
            rightAddon && "pr-9",
            className
          )
        }, props)
      ),
      rightAddon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute right-3 flex items-center text-gray-500", children: rightAddon })
    ] }),
    (hint || error) && /* @__PURE__ */ jsxRuntime.jsx("p", { className: cn("text-xs", error ? "text-red-500" : "text-gray-500"), children: error != null ? error : hint })
  ] });
}
var shadowStyles = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg"
};
var paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
};
function Card(_a) {
  var _b = _a, {
    shadow = "sm",
    hoverable = false,
    bordered = true,
    padding = "md",
    className,
    children
  } = _b, props = __objRest(_b, [
    "shadow",
    "hoverable",
    "bordered",
    "padding",
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadProps(__spreadValues({
      className: cn(
        "rounded-xl bg-white",
        shadowStyles[shadow],
        paddingStyles[padding],
        bordered && "border border-gray-200",
        hoverable && "cursor-pointer transition-shadow duration-200 hover:shadow-md",
        className
      )
    }, props), {
      children
    })
  );
}
function CardHeader(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", __spreadProps(__spreadValues({ className: cn("mb-4 flex flex-col gap-1", className) }, props), { children }));
}
function CardTitle(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "h3",
    __spreadProps(__spreadValues({
      className: cn("text-lg font-semibold text-gray-900", className)
    }, props), {
      children
    })
  );
}
function CardDescription(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx("p", __spreadProps(__spreadValues({ className: cn("text-sm text-gray-500", className) }, props), { children }));
}
function CardContent(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", __spreadProps(__spreadValues({ className: cn("text-sm text-gray-700", className) }, props), { children }));
}
function CardFooter(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadProps(__spreadValues({
      className: cn("mt-4 flex items-center gap-2", className)
    }, props), {
      children
    })
  );
}
var variantStyles2 = {
  default: "bg-gray-100 text-gray-700",
  primary: "bg-blue-100 text-blue-700",
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  danger: "bg-red-100 text-red-700",
  info: "bg-sky-100 text-sky-700"
};
var dotStyles = {
  default: "bg-gray-500",
  primary: "bg-blue-500",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
  info: "bg-sky-500"
};
function Badge(_a) {
  var _b = _a, {
    variant = "default",
    dot = false,
    className,
    children
  } = _b, props = __objRest(_b, [
    "variant",
    "dot",
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    __spreadProps(__spreadValues({
      className: cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantStyles2[variant],
        className
      )
    }, props), {
      children: [
        dot && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: cn("h-1.5 w-1.5 rounded-full", dotStyles[variant])
          }
        ),
        children
      ]
    })
  );
}
var sizeStyles3 = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg"
};
function getInitials(name) {
  return name.split(" ").slice(0, 2).map((word) => {
    var _a, _b;
    return (_b = (_a = word[0]) == null ? void 0 : _a.toUpperCase()) != null ? _b : "";
  }).join("");
}
function Avatar(_a) {
  var _b = _a, {
    src,
    alt = "",
    fallback,
    size = "md",
    className
  } = _b, props = __objRest(_b, [
    "src",
    "alt",
    "fallback",
    "size",
    "className"
  ]);
  const [imgError, setImgError] = React__default.default.useState(false);
  const showFallback = !src || imgError;
  const initials = fallback ? getInitials(fallback) : alt ? getInitials(alt) : "?";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    __spreadProps(__spreadValues({
      className: cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-200",
        sizeStyles3[size],
        className
      )
    }, props), {
      children: !showFallback ? (
        // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            src,
            alt,
            className: "h-full w-full object-cover",
            onError: () => setImgError(true)
          }
        )
      ) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-gray-600 select-none", children: initials })
    })
  );
}

exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Input = Input;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map