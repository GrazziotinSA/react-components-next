import { useAuth } from './chunk-IG455MJ2.mjs';
import { __spreadProps, __spreadValues } from './chunk-YOSPWY5K.mjs';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

function useNow(ms = 1e3) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), ms);
    return () => clearInterval(id);
  }, [ms]);
  return now;
}
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timeoutId = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timeoutId);
  }, [value, delay]);
  return debounced;
}
function useQueryAuth(options) {
  const { isAuthenticated } = useAuth();
  const baseEnabled = options.enabled;
  const enabled = (query) => {
    if (!isAuthenticated) return false;
    if (typeof baseEnabled === "function") return baseEnabled(query);
    return baseEnabled != null ? baseEnabled : true;
  };
  return useQuery(__spreadProps(__spreadValues({}, options), { enabled }));
}

export { useDebounce, useNow, useQueryAuth };
//# sourceMappingURL=chunk-FXO2YVL7.mjs.map
//# sourceMappingURL=chunk-FXO2YVL7.mjs.map