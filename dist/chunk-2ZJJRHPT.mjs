import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { MantineProvider } from '@mantine/core';
import { jsxs, jsx } from 'react/jsx-runtime';

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

export { GrazziotinProviders };
//# sourceMappingURL=chunk-2ZJJRHPT.mjs.map
//# sourceMappingURL=chunk-2ZJJRHPT.mjs.map