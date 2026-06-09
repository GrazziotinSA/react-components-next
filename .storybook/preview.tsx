import "@mantine/core/styles.css";
import "../src/app/globals.css";

import React from "react";
import { MantineProvider } from "@mantine/core";
import type { Preview } from "@storybook/react-vite";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

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
    options: { storySort: { order: ["UI", "Accessibility", "Functions"] } },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: "todo" },
  },
};

export default preview;
