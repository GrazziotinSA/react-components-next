"use client";

import { MantineProvider } from "@mantine/core";

type MantineAppProviderProps = {
  readonly children: React.ReactNode;
};

export function MantineAppProvider({ children }: MantineAppProviderProps) {
  return <MantineProvider>{children}</MantineProvider>;
}
