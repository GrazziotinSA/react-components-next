'use strict';

var tailwindMerge = require('tailwind-merge');
var clsx = require('clsx');

// src/functions/cn/cn.ts
function cn(...values) {
  return tailwindMerge.twMerge(clsx.clsx(values));
}

exports.cn = cn;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map