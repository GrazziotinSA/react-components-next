import "@mantine/core/styles.css";
import "../src/app/globals.css";

import React from "react";
import { MantineProvider } from "@mantine/core";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { Preview } from "@storybook/react-vite";

const muiTheme = createTheme({
  typography: { fontFamily: "var(--font-family, inherit)" },
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <MantineProvider>
          <Story />
        </MantineProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: { test: "todo" },
  },
};

export default preview;
