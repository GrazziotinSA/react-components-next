"use client";

import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Grazziotin React Components Library",
  description:
    "Biblioteca de componentes React reutilizáveis para o projeto Grazziotin",
};

const muiTheme = createTheme({
  typography: { fontFamily: "var(--font-poppins)" },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${poppins.variable} ${poppins.className}`}>
        <ThemeProvider theme={muiTheme}>
          <MantineProvider
            withCssVariables={false}
            deduplicateCssVariables={false}
          >
            <CssBaseline />
            {children}
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
