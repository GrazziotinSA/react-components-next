"use client";

import { createContext, useContext, useMemo } from "react";
import type {
  AuthContextValue,
  AuthProviderProps,
} from "./utils/auth-provider.interface";

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  token: null,
});

/**
 * Provider de autenticação que expõe `token` e `isAuthenticated` via `useAuth`.
 * @example
 * ```tsx
 * <AuthProvider token={sessionToken}>
 *   <App />
 * </AuthProvider>
 * ```
 */
export function AuthProvider({ children, token }: AuthProviderProps) {
  const value = useMemo(
    () => ({ isAuthenticated: Boolean(token), token: token ?? null }),
    [token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Consome o contexto de autenticação.
 * @example
 * ```tsx
 * const { isAuthenticated, token } = useAuth();
 * ```
 */
export function useAuth() {
  return useContext(AuthContext);
}
