import "@mantine/core/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { MantineAppProvider } from "../providers/mantine-provider";

export const metadata: Metadata = {
  title: "Grazziotin React Components Library",
  description:
    "Biblioteca de componentes React reutilizáveis para o projeto Grazziotin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased">
        <MantineAppProvider>{children}</MantineAppProvider>
      </body>
    </html>
  );
}
