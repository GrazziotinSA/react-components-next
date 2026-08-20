/** Inset padrão do modo flutuante (margem em relação à borda da tela). */
export const DRAWER_FLOATING_INSET = "1rem";

/** Snap points padrão do modo `points` (30% e 90% da altura). */
export const DRAWER_DEFAULT_SNAP_POINTS = [0.3, 0.9];

/** Desfoque padrão do overlay (`md` → 8px). */
export const DRAWER_OVERLAY_BLUR = "8px";

/** Tokens de desfoque do overlay → valor CSS. */
export const DRAWER_OVERLAY_BLUR_TOKENS = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "24px",
  "3xl": "40px",
};

/**
 * Classes Tailwind padrão do overlay (backdrop) do Drawer.
 * Escurecimento + blur iguais em todos os modos (sheet, floating, snap points).
 * O blur também é forçado via {@link DRAWER_BASE_CSS} / style inline.
 */
export const DRAWER_OVERLAY_CLASSNAME =
  "fixed inset-0 z-50 min-h-dvh bg-black/40 transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] select-none data-ending-style:pointer-events-none data-ending-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:opacity-0 data-swiping:duration-0 supports-[-webkit-touch-callout:none]:absolute";

/** Opacidade do overlay em snap points (comportamento iOS — varia com a altura). */
export const DRAWER_OVERLAY_SNAP_OPACITY_CLASSNAME =
  "opacity-[max(var(--drawer-overlay-min-opacity,0.5),calc(1-var(--drawer-swipe-progress)))] [--drawer-overlay-min-opacity:0.5]";

/** Opacidade do overlay modal (sempre escurecido, igual floating/sheet). */
export const DRAWER_OVERLAY_MODAL_OPACITY_CLASSNAME = "opacity-100";

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
 * CSS do overlay — mesmo escurecimento + desfoque em sheet, floating e snap points.
 */
export const DRAWER_OVERLAY_CSS = `
html body [data-slot="drawer-overlay"] {
  -webkit-backdrop-filter: blur(var(--drawer-overlay-blur, ${DRAWER_OVERLAY_BLUR})) !important;
  backdrop-filter: blur(var(--drawer-overlay-blur, ${DRAWER_OVERLAY_BLUR})) !important;
}
html body [data-slot="drawer-overlay"][data-overlay-modal] {
  inset: 0 !important;
  width: 100% !important;
  height: auto !important;
  min-height: 100dvh !important;
  --drawer-swipe-progress: 0 !important;
  --drawer-overlay-min-opacity: 1 !important;
}
html body [data-slot="drawer-overlay"][data-overlay-modal]:not([data-ending-style]):not([data-starting-style]) {
  opacity: 1 !important;
}
html body [data-slot="drawer-popup"]:not([data-floating]) {
  box-shadow: 0 -10px 40px rgb(0 0 0 / 0.18), 0 -2px 10px rgb(0 0 0 / 0.08) !important;
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

export const DRAWER_STYLE_ID = "grazziotin-drawer-styles";
export const DRAWER_LEGACY_FLOATING_STYLE_ID =
  "grazziotin-drawer-floating-styles";

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
 * Classes Tailwind do handle de swipe (barra de arraste).
 */
export const DRAWER_SWIPE_HANDLE_CLASSNAME =
  "relative z-10 flex shrink-0 cursor-grab transition-opacity duration-200 group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-[swipe-axis=x]/drawer-popup:h-full group-data-[swipe-axis=x]/drawer-popup:w-3 group-data-[swipe-axis=x]/drawer-popup:items-center group-data-[swipe-axis=y]/drawer-popup:h-3 group-data-[swipe-axis=y]/drawer-popup:w-full group-data-[swipe-axis=y]/drawer-popup:justify-center group-data-[swipe-direction=down]/drawer-popup:items-end group-data-[swipe-direction=left]/drawer-popup:order-last group-data-[swipe-direction=left]/drawer-popup:justify-start group-data-[swipe-direction=right]/drawer-popup:justify-end group-data-[swipe-direction=up]/drawer-popup:order-last group-data-[swipe-direction=up]/drawer-popup:items-start after:block after:shrink-0 after:rounded-full after:bg-gray-300 group-data-[swipe-axis=x]/drawer-popup:after:h-24 group-data-[swipe-axis=x]/drawer-popup:after:w-1 group-data-[swipe-axis=y]/drawer-popup:after:h-1 group-data-[swipe-axis=y]/drawer-popup:after:w-24 active:cursor-grabbing";

/**
 * Classes Tailwind base do popup do Drawer (posição, animação, sizing).
 * Cores locais: fundo branco, texto preto, borda cinza.
 */
export const DRAWER_POPUP_CLASSNAME = [
  "group/drawer-popup pointer-events-auto fixed z-50 m-(--drawer-inset,0px) flex h-(--drawer-content-height) max-h-(--drawer-content-max-height,none) min-h-0 w-(--drawer-content-width,auto) transform-[translate3d(var(--translate-x,0px),var(--translate-y,0px),0)_scale(var(--stack-scale))] flex-col bg-white text-sm text-black shadow-lg transition-[transform,height,opacity,filter] duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform outline-none select-none [interpolate-size:allow-keywords] data-[swipe-direction=down]:rounded-t-xl data-[swipe-direction=down]:border-t data-[swipe-direction=down]:border-gray-200 data-[swipe-direction=left]:rounded-r-xl data-[swipe-direction=left]:border-r data-[swipe-direction=left]:border-gray-200 data-[swipe-direction=right]:rounded-l-xl data-[swipe-direction=right]:border-l data-[swipe-direction=right]:border-gray-200 data-[swipe-direction=up]:rounded-b-xl data-[swipe-direction=up]:border-b data-[swipe-direction=up]:border-gray-200",
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
