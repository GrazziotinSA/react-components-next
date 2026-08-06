'use strict';

var react = require('react');
var reactQuery = require('@tanstack/react-query');
require('react/jsx-runtime');

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
function useNow(ms = 1e3) {
  const [now, setNow] = react.useState(() => Date.now());
  react.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), ms);
    return () => clearInterval(id);
  }, [ms]);
  return now;
}
function useDebounce(value, delay) {
  const [debounced, setDebounced] = react.useState(value);
  react.useEffect(() => {
    const timeoutId = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timeoutId);
  }, [value, delay]);
  return debounced;
}
var AuthContext = react.createContext({
  isAuthenticated: false,
  token: null
});
function useAuth() {
  return react.useContext(AuthContext);
}

// src/hooks/use-query-auth/use-query-auth.ts
function useQueryAuth(options) {
  const { isAuthenticated } = useAuth();
  const baseEnabled = options.enabled;
  const enabled = (query) => {
    if (!isAuthenticated) return false;
    if (typeof baseEnabled === "function") return baseEnabled(query);
    return baseEnabled != null ? baseEnabled : true;
  };
  return reactQuery.useQuery(__spreadProps(__spreadValues({}, options), { enabled }));
}

exports.useDebounce = useDebounce;
exports.useNow = useNow;
exports.useQueryAuth = useQueryAuth;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map