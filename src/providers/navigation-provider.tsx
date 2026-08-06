"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type {
  NavigationContextValue,
  NavigationProviderProps,
} from "./utils/navigation-provider.interface";

const NavigationContext = createContext<NavigationContextValue | undefined>(
  undefined,
);

/**
 * Provider de navegação que controla a visibilidade via `showNavigation`.
 * @example
 * ```tsx
 * <NavigationProvider>
 *   <App />
 * </NavigationProvider>
 * ```
 */
export function NavigationProvider({ children }: NavigationProviderProps) {
  const [showNavigation, setShowNavigation] = useState(true);

  const value = useMemo(
    () => ({ showNavigation, setShowNavigation }),
    [showNavigation],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

/**
 * Consome o contexto de navegação.
 * Deve ser usado dentro de um {@link NavigationProvider}.
 * @example
 * ```tsx
 * const { showNavigation, setShowNavigation } = useNavigation();
 * ```
 */
export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
