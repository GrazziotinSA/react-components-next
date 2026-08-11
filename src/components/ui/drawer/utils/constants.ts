import type { CSSProperties } from "react";
import type { DrawerRounded } from "./interface";

/** Inset padrão do modo flutuante (margem em relação à borda da tela). */
export const DRAWER_FLOATING_INSET = "1rem";

/** Desfoque do overlay — mesmo valor em floating e telas maiores. */
export const DRAWER_OVERLAY_BLUR = "12px";

/**
 * Classes Tailwind padrão do overlay (backdrop) do Drawer.
 * O blur real vem do CSS injetado {@link DRAWER_BASE_CSS} (igual em todos os modos).
 */
export const DRAWER_OVERLAY_CLASSNAME =
  "fixed inset-0 z-50 min-h-dvh bg-black/40 opacity-[max(var(--drawer-overlay-min-opacity,0),calc(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] select-none data-ending-style:pointer-events-none data-ending-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-snap-points:[--drawer-overlay-min-opacity:0.5] data-starting-style:opacity-0 data-swiping:duration-0 supports-[-webkit-touch-callout:none]:absolute";

/**
 * Visual do painel flutuante (raio, sombra, sem bleed).
 * Margem e borda vêm do CSS injetado {@link DRAWER_FLOATING_CSS} (`!important`),
 * para vencer `bottom-0` / `inset-*` / `border-t` do Base UI + Tailwind.
 */
export const DRAWER_FLOATING_CLASSNAME = [
  "[--drawer-bleed-background:transparent] [--bleed:0px] [--drawer-border-width:1px] [--drawer-border-color:#e5e7eb]",
  "overflow-hidden bg-white shadow-xl after:hidden",
].join(" ");

/**
 * CSS do overlay — desfoque único para floating e telas maiores.
 */
export const DRAWER_OVERLAY_CSS = `
[data-slot="drawer-overlay"] {
  -webkit-backdrop-filter: blur(var(--drawer-overlay-blur, ${DRAWER_OVERLAY_BLUR})) !important;
  backdrop-filter: blur(var(--drawer-overlay-blur, ${DRAWER_OVERLAY_BLUR})) !important;
}
`.trim();

/**
 * CSS com `!important` para o modo flutuante.
 * Injetado uma vez no documento; posicionamento e borda não dependem do cascade Tailwind.
 */
export const DRAWER_FLOATING_CSS = `
[data-slot="drawer-popup"][data-floating] {
  --drawer-inset: ${DRAWER_FLOATING_INSET};
  margin: 0 !important;
  overflow: hidden !important;
  background-color: #fff !important;
  border-style: solid !important;
  border-width: var(--drawer-border-width, 1px) !important;
  border-color: var(--drawer-border-color, #e5e7eb) !important;
  border-radius: var(--drawer-radius, 1.5rem) !important;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
}
[data-slot="drawer-popup"][data-floating][data-swipe-direction="down"] {
  top: auto !important;
  left: var(--drawer-inset) !important;
  right: var(--drawer-inset) !important;
  bottom: var(--drawer-inset) !important;
}
[data-slot="drawer-popup"][data-floating][data-swipe-direction="up"] {
  bottom: auto !important;
  left: var(--drawer-inset) !important;
  right: var(--drawer-inset) !important;
  top: var(--drawer-inset) !important;
}
[data-slot="drawer-popup"][data-floating][data-swipe-direction="right"] {
  left: auto !important;
  top: var(--drawer-inset) !important;
  bottom: var(--drawer-inset) !important;
  right: var(--drawer-inset) !important;
}
[data-slot="drawer-popup"][data-floating][data-swipe-direction="left"] {
  right: auto !important;
  top: var(--drawer-inset) !important;
  bottom: var(--drawer-inset) !important;
  left: var(--drawer-inset) !important;
}
`.trim();

/** CSS base do Drawer (overlay + floating). */
export const DRAWER_BASE_CSS = `${DRAWER_OVERLAY_CSS}\n${DRAWER_FLOATING_CSS}`;

const DRAWER_STYLE_ID = "grazziotin-drawer-styles";
const DRAWER_LEGACY_FLOATING_STYLE_ID = "grazziotin-drawer-floating-styles";

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

/** Tokens Tailwind → valor CSS de `--drawer-radius`. */
export const DRAWER_ROUNDED_TOKENS = {
  none: "0px",
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.5rem",
  full: "9999px",
};

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

/**
 * Classes Tailwind do handle de swipe (barra de arraste).
 */
export const DRAWER_SWIPE_HANDLE_CLASSNAME =
  "relative z-10 flex shrink-0 cursor-grab transition-opacity duration-200 group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-[swipe-axis=x]/drawer-popup:h-full group-data-[swipe-axis=x]/drawer-popup:w-3 group-data-[swipe-axis=x]/drawer-popup:items-center group-data-[swipe-axis=y]/drawer-popup:h-3 group-data-[swipe-axis=y]/drawer-popup:w-full group-data-[swipe-axis=y]/drawer-popup:justify-center group-data-[swipe-direction=down]/drawer-popup:items-end group-data-[swipe-direction=left]/drawer-popup:order-last group-data-[swipe-direction=left]/drawer-popup:justify-start group-data-[swipe-direction=right]/drawer-popup:justify-end group-data-[swipe-direction=up]/drawer-popup:order-last group-data-[swipe-direction=up]/drawer-popup:items-start after:block after:shrink-0 after:rounded-full after:bg-gray-300 group-data-[swipe-axis=x]/drawer-popup:after:h-24 group-data-[swipe-axis=x]/drawer-popup:after:w-1 group-data-[swipe-axis=y]/drawer-popup:after:h-1 group-data-[swipe-axis=y]/drawer-popup:after:w-24 active:cursor-grabbing";

/**
 * Classes Tailwind base do popup do Drawer (posição, animação, sizing).
 * Cores locais: fundo branco, texto preto, borda cinza.
 */
export const DRAWER_POPUP_CLASSNAME = [
  "group/drawer-popup pointer-events-auto fixed z-50 m-(--drawer-inset,0px) flex h-(--drawer-content-height) max-h-(--drawer-content-max-height,none) min-h-0 w-(--drawer-content-width,auto) transform-[translate3d(var(--translate-x,0px),var(--translate-y,0px),0)_scale(var(--stack-scale))] flex-col bg-white text-sm text-black transition-[transform,height,opacity,filter] duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform outline-none select-none [interpolate-size:allow-keywords] data-[swipe-direction=down]:rounded-t-xl data-[swipe-direction=down]:border-t data-[swipe-direction=down]:border-gray-200 data-[swipe-direction=left]:rounded-r-xl data-[swipe-direction=left]:border-r data-[swipe-direction=left]:border-gray-200 data-[swipe-direction=right]:rounded-l-xl data-[swipe-direction=right]:border-l data-[swipe-direction=right]:border-gray-200 data-[swipe-direction=up]:rounded-b-xl data-[swipe-direction=up]:border-b data-[swipe-direction=up]:border-gray-200",
  "data-nested-drawer-open:overflow-hidden data-nested-drawer-open:brightness-95",
  "after:pointer-events-none after:absolute after:bg-(--drawer-bleed-background,#fff) data-[swipe-axis=x]:after:inset-y-0 data-[swipe-axis=x]:after:w-(--bleed) data-[swipe-axis=y]:after:inset-x-0 data-[swipe-axis=y]:after:h-(--bleed) data-[swipe-direction=down]:after:top-full data-[swipe-direction=left]:after:right-full data-[swipe-direction=right]:after:left-full data-[swipe-direction=up]:after:bottom-full",
  "[--drawer-content-height:var(--drawer-height,auto)] data-[swipe-axis=x]:[--drawer-content-width:75%] data-[swipe-axis=y]:[--drawer-content-max-height:calc(100dvh-6rem)] data-[swipe-axis=y]:data-snap-points:[--drawer-content-height:100dvh] data-[swipe-axis=x]:sm:[--drawer-content-width:24rem]",
  "[--bleed:3rem] [--peek:1rem] [--stack-height:var(--drawer-frontmost-height,var(--drawer-height,0px))] [--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] [--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] [--stack-scale-base:max(0,calc(1-(var(--nested-drawers)*var(--stack-step))))] [--stack-scale:clamp(0,calc(var(--stack-scale-base)+(var(--stack-step)*var(--stack-progress))),1)] [--stack-shrink:calc(1-var(--stack-scale))] [--stack-step:0.05]",
  "data-ending-style:transform-(--closed-transform) data-ending-style:opacity-[0.9999] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-nested-drawer-swiping:duration-0 data-ending-style:data-nested-drawer-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:transform-(--closed-transform) data-swiping:duration-0 data-ending-style:data-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
  "data-[swipe-axis=y]:inset-x-0 data-[swipe-axis=y]:data-nested-drawer-open:h-(--stack-height)",
  "data-[swipe-axis=x]:inset-y-0 data-[swipe-axis=x]:flex-row",
  "data-[swipe-direction=down]:bottom-0 data-[swipe-direction=down]:origin-bottom data-[swipe-direction=down]:[--closed-transform:translate3d(0,calc(100%+var(--drawer-inset,0px)+2px),0)] data-[swipe-direction=down]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--stack-shrink)*var(--stack-height)))]",
  "data-[swipe-direction=up]:top-0 data-[swipe-direction=up]:origin-top data-[swipe-direction=up]:[--closed-transform:translate3d(0,calc(-100%-var(--drawer-inset,0px)-2px),0)] data-[swipe-direction=up]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--stack-shrink)*var(--stack-height)))]",
  "data-[swipe-direction=left]:left-0 data-[swipe-direction=left]:origin-left data-[swipe-direction=left]:[--closed-transform:translate3d(calc(-100%-var(--drawer-inset,0px)-2px),0,0)] data-[swipe-direction=left]:[--translate-x:calc(var(--drawer-swipe-movement-x)+var(--stack-peek-offset)+(var(--stack-shrink)*100%))]",
  "data-[swipe-direction=right]:right-0 data-[swipe-direction=right]:origin-right data-[swipe-direction=right]:[--closed-transform:translate3d(calc(100%+var(--drawer-inset,0px)+2px),0,0)] data-[swipe-direction=right]:[--translate-x:calc(var(--drawer-swipe-movement-x)-var(--stack-peek-offset)-(var(--stack-shrink)*100%))]",
].join(" ");

/**
 * Classes do container interno scrollável/conteúdo do popup.
 */
export const DRAWER_CONTENT_INNER_CLASSNAME =
  "flex min-h-0 flex-1 flex-col overflow-hidden overscroll-contain rounded-[inherit] transition-opacity duration-300 ease-[cubic-bezier(0.45,1.005,0,1.005)] select-text group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-swiping/drawer-popup:select-none";

/**
 * Classes do cabeçalho.
 */
export const DRAWER_HEADER_CLASSNAME =
  "flex shrink-0 flex-col gap-0.5 p-4 pb-0 group-data-[swipe-axis=y]/drawer-popup:text-center md:gap-0.5 md:text-left";

/**
 * Classes do rodapé.
 */
export const DRAWER_FOOTER_CLASSNAME =
  "mt-auto flex shrink-0 flex-col gap-2 p-4 pt-0";

/**
 * Classes do título.
 */
export const DRAWER_TITLE_CLASSNAME = "text-base font-medium text-black";

/**
 * Classes da descrição.
 */
export const DRAWER_DESCRIPTION_CLASSNAME =
  "text-sm text-balance text-gray-500";

const drawerConstants = `
Drawer composto no estilo shadcn/Base UI (\`@base-ui/react/drawer\`).
Bottom sheet com header, área scroll, footer, snap points e swipe handle.

**Peer dependency:** \`@base-ui/react\` (^1.7.0)

**Importação:**
\`\`\`tsx
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@grazziotin/react-components-next/ui";
\`\`\`

**Requisito iOS (Safari):** o overlay é \`position: absolute\` e precisa de um
\`body\` posicionado para cobrir o viewport após scroll. Adicione no CSS global
do app consumidor:
\`\`\`css
body {
  position: relative;
}
\`\`\`

**Uso básico (sheet com header / lista / footer):**
\`\`\`tsx
<Drawer>
  <DrawerTrigger render={<button type="button" />}>Abrir</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Escolha um horário</DrawerTitle>
      <DrawerDescription>Selecione a entrega desejada.</DrawerDescription>
    </DrawerHeader>
    <div className="flex-1 overflow-y-auto p-4">{/* lista */}</div>
    <DrawerFooter>
      <button type="button">Confirmar</button>
      <DrawerClose render={<button type="button" />}>Cancelar</DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
\`\`\`

**Snap points com handle (sem \`floating\` — modos exclusivos):**
\`\`\`tsx
<Drawer showSwipeHandle snapPoints={[0.3, 0.9]}>
  <DrawerTrigger render={<button type="button" />}>Abrir</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Detalhes</DrawerTitle>
    </DrawerHeader>
    <div className="flex-1 overflow-y-auto p-4">{/* conteúdo */}</div>
  </DrawerContent>
</Drawer>
\`\`\`

**Visual flutuante (não encosta nas bordas):**
\`\`\`tsx
<Drawer floating rounded="2xl">
  <DrawerTrigger render={<button type="button" />}>Abrir</DrawerTrigger>
  <DrawerContent>
    ...
  </DrawerContent>
</Drawer>
\`\`\`

\`rounded\` aceita tokens (\`sm\`…\`5xl\`, \`full\`), px (\`24\`) ou CSS (\`"1.5rem"\`).
`;

export default drawerConstants;
