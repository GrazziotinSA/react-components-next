'use strict';

var material = require('@mui/material');
var core = require('@mantine/core');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

// src/providers/app-providers.tsx
var defaultMuiTheme = material.createTheme({
  typography: { fontFamily: "var(--font-family, inherit)" }
});
function GrazziotinProviders({
  children,
  muiTheme = defaultMuiTheme
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(material.ThemeProvider, { theme: muiTheme, children: [
    /* @__PURE__ */ jsxRuntime.jsx(material.CssBaseline, {}),
    /* @__PURE__ */ jsxRuntime.jsx(core.MantineProvider, { children })
  ] });
}
var AuthContext = react.createContext({
  isAuthenticated: false,
  token: null
});
function AuthProvider({ children, token }) {
  const value = react.useMemo(
    () => ({ isAuthenticated: Boolean(token), token: token != null ? token : null }),
    [token]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(AuthContext.Provider, { value, children });
}
function useAuth() {
  return react.useContext(AuthContext);
}
var NavigationContext = react.createContext(
  void 0
);
function NavigationProvider({ children }) {
  const [showNavigation, setShowNavigation] = react.useState(true);
  const value = react.useMemo(
    () => ({ showNavigation, setShowNavigation }),
    [showNavigation]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(NavigationContext.Provider, { value, children });
}
function useNavigation() {
  const context = react.useContext(NavigationContext);
  if (context === void 0) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}

exports.AuthProvider = AuthProvider;
exports.GrazziotinProviders = GrazziotinProviders;
exports.NavigationProvider = NavigationProvider;
exports.useAuth = useAuth;
exports.useNavigation = useNavigation;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map