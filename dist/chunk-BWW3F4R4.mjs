import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

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
function cn(...values) {
  return twMerge(clsx(values));
}

// src/functions/nvl/nvl.ts
function nvl(value, defaultValue) {
  return value != null ? value : defaultValue;
}

// src/core/remove-digits.ts
function removeDigits(value) {
  return value.replace(/\D/g, "");
}
function removeNonDigits(value) {
  return value.replaceAll(/\d/g, "");
}
function removeTextOnly(value) {
  return value.replaceAll(/[^\p{L}]/gu, "");
}

// src/functions/format-cpf-cnpj/format-cpf-cnpj.ts
function formatCpfCnpj(data) {
  if (!data) return "";
  const value = removeDigits(data);
  if (!value) return "";
  if (value.length <= 11) {
    const cpf = value.slice(0, 11);
    return cpf.replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  const cnpj = value.slice(0, 14);
  return cnpj.replace(/^(\d{2})(\d)/, "$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3").replace(/\.(\d{3})(\d)/, ".$1/$2").replace(/(\d{4})(\d)/, "$1-$2");
}

// src/functions/format-phone-br/format-phone-br.ts
function formatPhoneBr(phone) {
  if (!phone) return "";
  const digits = removeDigits(phone).slice(0, 11);
  if (!digits) return "";
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) {
    return digits.replace(/(\d{2})(\d+)/, "($1) $2");
  }
  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d{4})(\d+)/, "($1) $2-$3");
  }
  return digits.replace(/(\d{2})(\d{5})(\d+)/, "($1) $2-$3");
}

// src/functions/format-price-brl/format-price-brl.ts
function formatPriceBrl(value) {
  if (value === void 0 || value === null) return "";
  if (typeof value === "string") {
    const digits = removeDigits(value);
    if (!digits) return "";
    const price = Number(digits) / 100;
    if (Number.isNaN(price)) return "";
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }
  if (Number.isNaN(value)) return "";
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// src/functions/format-item-170/format-item-170.ts
function formatItem170(item) {
  if (!item) return "";
  const digits = removeDigits(item).slice(0, 12);
  if (!digits) return "";
  return digits.replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{2})\.(\d)(\d{1,3})$/, "$1.$2.$3");
}

// src/functions/format-item-150/format-item-150.ts
function formatItem150(item) {
  if (!item) return "";
  const digits = removeDigits(item).slice(0, 10);
  if (!digits) return "";
  return digits.replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{2})\.(\d)(\d{1,3})$/, "$1.$2.$3");
}

export { __objRest, __spreadProps, __spreadValues, cn, formatCpfCnpj, formatItem150, formatItem170, formatPhoneBr, formatPriceBrl, nvl, removeDigits, removeNonDigits, removeTextOnly };
//# sourceMappingURL=chunk-BWW3F4R4.mjs.map
//# sourceMappingURL=chunk-BWW3F4R4.mjs.map