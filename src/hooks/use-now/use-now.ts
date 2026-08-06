"use client";

import { useEffect, useState } from "react";

/**
 * Retorna o timestamp atual atualizado a cada `ms` (padrão 1s).
 * @param ms - Intervalo de atualização em milissegundos
 * @returns Timestamp atual em ms
 * @example
 * const now = useNow();
 * const nowFast = useNow(500);
 */
export function useNow(ms = 1000) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), ms);
    return () => clearInterval(id);
  }, [ms]);

  return now;
}
