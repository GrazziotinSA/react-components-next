import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import type { ClassValue } from "./utils/interfaces";

export function cn(...values: ClassValue[]): string {
  return twMerge(clsx(values));
}
