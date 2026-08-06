"use client";

import {
  type Theme,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { MantineProvider } from "@mantine/core";

type GrazziotinProvidersProps = {
  readonly children: React.ReactNode;
  readonly muiTheme?: Theme;
};

const defaultMuiTheme = createTheme({
  typography: { fontFamily: "var(--font-family, inherit)" },
});

export function GrazziotinProviders({
  children,
  muiTheme = defaultMuiTheme,
}: GrazziotinProvidersProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <MantineProvider>{children}</MantineProvider>
    </ThemeProvider>
  );
}
