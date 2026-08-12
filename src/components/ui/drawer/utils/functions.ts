import type { CSSProperties } from "react";
import type { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import {
  DRAWER_BASE_CSS,
  DRAWER_DEFAULT_SNAP_POINTS,
  DRAWER_FLOATING_INSET,
  DRAWER_LEGACY_FLOATING_STYLE_ID,
  DRAWER_OVERLAY_BLUR,
  DRAWER_OVERLAY_BLUR_TOKENS,
  DRAWER_ROUNDED_TOKENS,
  DRAWER_STYLE_ID,
} from "./constants";
import type { DrawerOverlayBlur, DrawerRounded } from "./interface";

/**
 * Resolve snap points: `snapPoints` explícito vence; senão `points` usa o padrão.
 */
export function resolveDrawerSnapPoints(
  points?: boolean,
  snapPoints?: DrawerPrimitive.Root.SnapPoint[] | null,
): DrawerPrimitive.Root.SnapPoint[] | undefined {
  if (snapPoints != null && snapPoints.length > 0) {
    return [...snapPoints];
  }
  if (points) return [...DRAWER_DEFAULT_SNAP_POINTS];
  return undefined;
}

/**
 * Resolve `overlayBlur` para valor CSS de `--drawer-overlay-blur`.
 */
export function resolveDrawerOverlayBlur(
  blur: DrawerOverlayBlur = "md",
): string {
  if (typeof blur === "number" && Number.isFinite(blur)) {
    return `${blur}px`;
  }

  const value = String(blur).trim();

  if (value in DRAWER_OVERLAY_BLUR_TOKENS) {
    return DRAWER_OVERLAY_BLUR_TOKENS[
      value as keyof typeof DRAWER_OVERLAY_BLUR_TOKENS
    ];
  }

  if (/^\d+(\.\d+)?$/.test(value)) return `${value}px`;

  return value || DRAWER_OVERLAY_BLUR;
}

/** Garante o CSS do Drawer no `<head>` (idempotente; migra id legado). */
export function ensureDrawerStyles(): void {
  if (typeof document === "undefined") return;

  const existing = document.getElementById(DRAWER_STYLE_ID);
  if (existing) {
    existing.textContent = DRAWER_BASE_CSS;
    return;
  }

  const legacy = document.getElementById(DRAWER_LEGACY_FLOATING_STYLE_ID);
  if (legacy) {
    legacy.id = DRAWER_STYLE_ID;
    legacy.textContent = DRAWER_BASE_CSS;
    return;
  }

  const style = document.createElement("style");
  style.id = DRAWER_STYLE_ID;
  style.textContent = DRAWER_BASE_CSS;
  document.head.appendChild(style);
}

/** @deprecated Use {@link ensureDrawerStyles}. */
export const ensureDrawerFloatingStyles = ensureDrawerStyles;

/**
 * Resolve `rounded` para valor CSS de `--drawer-radius`.
 */
export function resolveDrawerRadius(rounded: DrawerRounded = "3xl"): string {
  if (typeof rounded === "number" && Number.isFinite(rounded)) {
    return `${rounded}px`;
  }

  const value = String(rounded).trim();

  if (value in DRAWER_ROUNDED_TOKENS) {
    return DRAWER_ROUNDED_TOKENS[value as keyof typeof DRAWER_ROUNDED_TOKENS];
  }

  // "32" / "24.5" → px (Storybook/controles costumam mandar string)
  if (/^\d+(\.\d+)?$/.test(value)) return `${value}px`;

  return value;
}

/**
 * Variáveis CSS do modo flutuante (inset + raio).
 * `--drawer-radius` e `borderRadius` juntos garantem que a prop `rounded` vença.
 * Posição/borda ficam no stylesheet injetado.
 */
export function getDrawerFloatingStyle(
  rounded: DrawerRounded = "3xl",
): CSSProperties {
  const radius = resolveDrawerRadius(rounded);

  return {
    ["--drawer-inset" as string]: DRAWER_FLOATING_INSET,
    ["--drawer-radius" as string]: radius,
    borderRadius: radius,
  };
}
