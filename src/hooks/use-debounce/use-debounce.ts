"use client";

import { useEffect, useState } from "react";

/**
 * Retorna o valor com debounce após o `delay` informado.
 * @param value - Valor de entrada
 * @param delay - Delay em milissegundos
 * @returns Valor debounced
 * @example
 * const debouncedSearch = useDebounce(search, 300);
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debounced;
}
