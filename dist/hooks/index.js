'use strict';

var react = require('react');

// src/hooks/use-now/use-now.ts
function useNow(ms = 1e3) {
  const [now, setNow] = react.useState(() => Date.now());
  react.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), ms);
    return () => clearInterval(id);
  }, [ms]);
  return now;
}

exports.useNow = useNow;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map