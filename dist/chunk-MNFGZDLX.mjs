import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { MantineProvider } from '@mantine/core';
import { jsxs, jsx } from 'react/jsx-runtime';
import { createContext, useState, useMemo, useContext } from 'react';

// src/providers/app-providers.tsx
var defaultMuiTheme = createTheme({
  typography: { fontFamily: "var(--font-family, inherit)" }
});
function GrazziotinProviders({
  children,
  muiTheme = defaultMuiTheme
}) {
  return /* @__PURE__ */ jsxs(ThemeProvider, { theme: muiTheme, children: [
    /* @__PURE__ */ jsx(CssBaseline, {}),
    /* @__PURE__ */ jsx(MantineProvider, { children })
  ] });
}
var NavigationContext = createContext(
  void 0
);
function NavigationProvider({ children }) {
  const [showNavigation, setShowNavigation] = useState(true);
  const value = useMemo(
    () => ({ showNavigation, setShowNavigation }),
    [showNavigation]
  );
  return /* @__PURE__ */ jsx(NavigationContext.Provider, { value, children });
}
function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === void 0) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}

export { GrazziotinProviders, NavigationProvider, useNavigation };
//# sourceMappingURL=chunk-MNFGZDLX.mjs.map
//# sourceMappingURL=chunk-MNFGZDLX.mjs.map