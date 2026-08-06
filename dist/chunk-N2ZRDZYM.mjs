import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

// src/functions/cn/cn.ts
function cn(...values) {
  return twMerge(clsx(values));
}

// src/functions/nvl/nvl.ts
function nvl(value, defaultValue) {
  return value != null ? value : defaultValue;
}

// src/functions/remove/remove.ts
function removeDigits(value) {
  if (!value) return "";
  return value.replace(/\D/g, "");
}
function removeNonDigits(value) {
  if (!value) return "";
  return value.replaceAll(/\d/g, "");
}
function removeTextOnly(value) {
  if (!value) return "";
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

// src/functions/set-immer-field/set-immer-field.ts
function setImmerField({
  setData,
  key,
  value
}) {
  setData((draft) => {
    draft[key] = value;
  });
}

// src/functions/short-name/short-name.ts
function shortName(name) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts.at(-1)}`;
}

// src/functions/format-elapsed-since/format-elapsed-since.ts
function padTime(value) {
  return String(value).padStart(2, "0");
}
function formatElapsedSince(isoDate, now = Date.now()) {
  const start = Date.parse(isoDate);
  if (Number.isNaN(start)) return "0 00:00:00";
  const totalSeconds = Math.max(0, Math.floor((now - start) / 1e3));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor(totalSeconds % 86400 / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = totalSeconds % 60;
  return `${days} ${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
}

export { cn, formatCpfCnpj, formatElapsedSince, formatItem150, formatItem170, formatPhoneBr, formatPriceBrl, nvl, removeDigits, removeNonDigits, removeTextOnly, setImmerField, shortName };
//# sourceMappingURL=chunk-N2ZRDZYM.mjs.map
//# sourceMappingURL=chunk-N2ZRDZYM.mjs.map