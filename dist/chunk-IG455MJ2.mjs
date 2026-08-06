import { createContext, useMemo, useContext } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/providers/auth-provider.tsx
var AuthContext = createContext({
  isAuthenticated: false,
  token: null
});
function AuthProvider({ children, token }) {
  const value = useMemo(
    () => ({ isAuthenticated: Boolean(token), token: token != null ? token : null }),
    [token]
  );
  return /* @__PURE__ */ jsx(AuthContext.Provider, { value, children });
}
function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
//# sourceMappingURL=chunk-IG455MJ2.mjs.map
//# sourceMappingURL=chunk-IG455MJ2.mjs.map