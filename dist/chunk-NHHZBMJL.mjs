import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

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

export { __spreadValues, cn, formatCpfCnpj, formatPhoneBr, nvl };
//# sourceMappingURL=chunk-NHHZBMJL.mjs.map
//# sourceMappingURL=chunk-NHHZBMJL.mjs.map