import { useState, useEffect } from 'react';

// src/hooks/use-now/use-now.ts
function useNow(ms = 1e3) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), ms);
    return () => clearInterval(id);
  }, [ms]);
  return now;
}

export { useNow };
//# sourceMappingURL=chunk-MTVX7QEW.mjs.map
//# sourceMappingURL=chunk-MTVX7QEW.mjs.map