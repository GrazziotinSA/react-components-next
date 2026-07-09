'use strict';

var material = require('@mui/material');
var core = require('@mantine/core');
var jsxRuntime = require('react/jsx-runtime');

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
function MantineAppProvider({ children }) {
  return /* @__PURE__ */ jsxRuntime.jsx(core.MantineProvider, { children });
}

exports.GrazziotinProviders = GrazziotinProviders;
exports.MantineAppProvider = MantineAppProvider;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map