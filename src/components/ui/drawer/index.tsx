"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import { cn } from "@/functions";
import type {
  DrawerCloseProps,
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerFooterProps,
  DrawerHeaderProps,
  DrawerOverlayProps,
  DrawerPortalProps,
  DrawerProps,
  DrawerSwipeHandleProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "./utils/interface";
import {
  DRAWER_CONTENT_INNER_CLASSNAME,
  DRAWER_DESCRIPTION_CLASSNAME,
  DRAWER_FLOATING_CLASSNAME,
  DRAWER_FOOTER_CLASSNAME,
  DRAWER_HEADER_CLASSNAME,
  DRAWER_OVERLAY_BLUR,
  DRAWER_OVERLAY_CLASSNAME,
  DRAWER_OVERLAY_MODAL_OPACITY_CLASSNAME,
  DRAWER_OVERLAY_SNAP_OPACITY_CLASSNAME,
  DRAWER_POPUP_CLASSNAME,
  DRAWER_SWIPE_HANDLE_CLASSNAME,
  DRAWER_TITLE_CLASSNAME,
} from "./utils/constants";
import {
  ensureDrawerStyles,
  getDrawerFloatingStyle,
  resolveDrawerOverlayBlur,
  resolveDrawerSnapPoints,
} from "./utils/functions";

type DrawerContextValue = {
  floating: boolean;
  hasSnapPoints: boolean;
  modal: DrawerProps["modal"];
  overlayBlur: string;
  overlayModal: boolean;
  rounded: NonNullable<DrawerProps["rounded"]>;
  showSwipeHandle: boolean;
  swipeDirection: NonNullable<DrawerProps["swipeDirection"]>;
};

const DrawerContext = React.createContext<DrawerContextValue | null>(null);

function useDrawerContext() {
  const context = React.useContext(DrawerContext);

  if (!context) {
    throw new Error("useDrawerContext must be used within a Drawer.");
  }

  return context;
}

/**
 * Root do Drawer composto (Base UI). Controla open state, swipe, snap points e modal.
 *
 * @param props - Propriedades do root. Detalhes em {@link DrawerProps}.
 * @param props.open - Modo controlado: se o drawer está aberto.
 * @param props.onOpenChange - Callback ao abrir/fechar.
 * @param props.swipeDirection - Direção do swipe. Padrão: `"down"` (bottom sheet).
 * @param props.snapPoints - Alturas de snap (frações 0–1, px ou rem).
 * @param props.points - Ativa snap points iOS (`[0.3, 0.9]`). Atalho de `snapPoints`.
 * @param props.showSwipeHandle - Renderiza handle de arraste no conteúdo. Padrão: `false` (ou `true` com snap).
 * @param props.floating - Painel flutuante com margem nas bordas. Padrão: `false`.
 * @param props.rounded - Raio dos cantos quando flutuante (`3xl`, `24`, `"1.5rem"`…). Padrão: `"3xl"`.
 * @param props.overlayBlur - Desfoque do overlay (`md`, `12`, `"8px"`…). Padrão: `"md"` (8px).
 * @param props.overlayModal - Overlay sempre escurecido (estilo modal), mesmo com snap points. Padrão: `false`.
 * @param props.modal - Modalidade (`true` | `false` | `"trap-focus"`). Padrão: `true`.
 * @param props.disablePointerDismissal - Impede fechar ao clicar fora.
 *
 * @example
 * ```tsx
 * <Drawer floating rounded="2xl" overlayBlur="lg">
 *   <DrawerTrigger render={<button type="button" />}>Abrir</DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Título</DrawerTitle>
 *       <DrawerDescription>Descrição</DrawerDescription>
 *     </DrawerHeader>
 *     <div className="flex-1 overflow-y-auto p-4">Conteúdo</div>
 *     <DrawerFooter>
 *       <DrawerClose render={<button type="button" />}>Fechar</DrawerClose>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </Drawer>
 * ```
 *
 * @example
 * ```tsx
 * <Drawer points overlayModal>
 *   <DrawerTrigger render={<button type="button" />}>Snap</DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Snap points</DrawerTitle>
 *     </DrawerHeader>
 *   </DrawerContent>
 * </Drawer>
 * ```
 */
function Drawer({
  modal = true,
  showSwipeHandle,
  floating = false,
  rounded = "3xl",
  overlayBlur = "md",
  overlayModal = false,
  points = false,
  snapPoints,
  swipeDirection = "down",
  ...props
}: Readonly<DrawerProps>) {
  const resolvedSnapPoints = resolveDrawerSnapPoints(points, snapPoints);
  const hasSnapPoints =
    resolvedSnapPoints != null && resolvedSnapPoints.length > 0;
  const effectiveShowSwipeHandle = showSwipeHandle ?? hasSnapPoints;
  const resolvedOverlayBlur = resolveDrawerOverlayBlur(overlayBlur);
  const contextValue = React.useMemo(
    () => ({
      floating,
      hasSnapPoints,
      modal,
      overlayBlur: resolvedOverlayBlur,
      overlayModal,
      rounded,
      showSwipeHandle: effectiveShowSwipeHandle,
      swipeDirection,
    }),
    [
      floating,
      hasSnapPoints,
      modal,
      overlayModal,
      effectiveShowSwipeHandle,
      resolvedOverlayBlur,
      rounded,
      swipeDirection,
    ],
  );

  return (
    <DrawerContext.Provider value={contextValue}>
      <DrawerPrimitive.Root
        data-slot="drawer"
        data-points={points ? "" : undefined}
        modal={modal}
        snapPoints={resolvedSnapPoints}
        swipeDirection={swipeDirection}
        {...props}
      />
    </DrawerContext.Provider>
  );
}

/**
 * Elemento que abre o drawer. Prefira `render` para compor com botões customizados.
 */
function DrawerTrigger(props: Readonly<DrawerTriggerProps>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

/**
 * Portal do drawer (uso avançado; já incluso em {@link DrawerContent}).
 */
function DrawerPortal(props: Readonly<DrawerPortalProps>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

/**
 * Fecha o drawer. Prefira `render` para compor com botões customizados.
 */
function DrawerClose(props: Readonly<DrawerCloseProps>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

/**
 * Overlay/backdrop do drawer (uso avançado; já incluso em {@link DrawerContent} quando `modal`).
 * Padrão: `bg-black/40` + blur `md` (8px). Sobrescreva com `overlayBlur`.
 */
function DrawerOverlay({
  className,
  style,
  overlayBlur: overlayBlurProp,
  overlayModal: overlayModalProp,
  ...props
}: Readonly<DrawerOverlayProps>) {
  const context = React.useContext(DrawerContext);
  const blur =
    overlayBlurProp != null
      ? resolveDrawerOverlayBlur(overlayBlurProp)
      : (context?.overlayBlur ?? DRAWER_OVERLAY_BLUR);
  const overlayModal =
    overlayModalProp ?? context?.overlayModal ?? !context?.hasSnapPoints;

  React.useLayoutEffect(() => {
    ensureDrawerStyles();
  }, []);

  const backdropRef = React.useRef<HTMLDivElement>(null);

  // Snap points: Base UI limita overlay à altura do painel. Com overlayModal, força tela cheia.
  React.useLayoutEffect(() => {
    if (!overlayModal) return;

    const el = backdropRef.current;
    if (!el) return;

    const lockModalOverlay = () => {
      el.style.setProperty("--drawer-swipe-progress", "0");
      el.style.removeProperty("height");
      el.style.removeProperty("--drawer-height");
    };

    lockModalOverlay();
    const observer = new MutationObserver(lockModalOverlay);
    observer.observe(el, { attributes: true, attributeFilter: ["style"] });

    return () => observer.disconnect();
  }, [overlayModal]);

  return (
    <DrawerPrimitive.Backdrop
      ref={backdropRef}
      data-slot="drawer-overlay"
      data-overlay-blur={blur}
      data-overlay-modal={overlayModal ? "" : undefined}
      className={cn(
        DRAWER_OVERLAY_CLASSNAME,
        overlayModal
          ? DRAWER_OVERLAY_MODAL_OPACITY_CLASSNAME
          : DRAWER_OVERLAY_SNAP_OPACITY_CLASSNAME,
        className,
      )}
      {...props}
      style={{
        ...style,
        // Regra injetada: backdrop-filter: blur(var(--drawer-overlay-blur)) !important
        ["--drawer-overlay-blur" as string]: blur,
        ...(overlayModal
          ? {
              ["--drawer-swipe-progress" as string]: "0",
              ["--drawer-overlay-min-opacity" as string]: "1",
            }
          : {
              ["--drawer-overlay-min-opacity" as string]: "0.5",
            }),
        WebkitBackdropFilter: `blur(${blur})`,
        backdropFilter: `blur(${blur})`,
      }}
    />
  );
}

/**
 * Handle visual de swipe. Também pode ser renderizado via `showSwipeHandle` no root.
 */
function DrawerSwipeHandle({
  className,
  ...props
}: Readonly<DrawerSwipeHandleProps>) {
  return (
    <div
      data-slot="drawer-swipe-handle"
      aria-hidden="true"
      className={cn(DRAWER_SWIPE_HANDLE_CLASSNAME, className)}
      {...props}
    />
  );
}

/**
 * Conteúdo do drawer: compõe portal, overlay, viewport e popup.
 * Para área scrollável, use um filho `flex-1 overflow-y-auto` (evite `h-full`).
 * Com `floating` (ou `floating` no root), o painel fica com margem e cantos arredondados.
 */
function DrawerContent({
  className,
  children,
  floating: floatingProp,
  rounded: roundedProp,
  overlayBlur: overlayBlurProp,
  overlayModal: overlayModalProp,
  style,
  ...props
}: Readonly<DrawerContentProps>) {
  const {
    floating: floatingFromRoot,
    hasSnapPoints,
    modal,
    rounded: roundedFromRoot,
    showSwipeHandle,
    swipeDirection,
  } = useDrawerContext();
  const floatingRequested = floatingProp ?? floatingFromRoot;
  // Snap ancora no fundo da tela; floating e snapPoints são mutuamente exclusivos.
  const floating = floatingRequested && !hasSnapPoints;
  const rounded = roundedProp ?? roundedFromRoot;
  const swipeAxis =
    swipeDirection === "down" || swipeDirection === "up" ? "y" : "x";
  const floatingStyle = floating ? getDrawerFloatingStyle(rounded) : undefined;

  React.useLayoutEffect(() => {
    ensureDrawerStyles();
  }, []);

  return (
    <DrawerPortal data-slot="drawer-portal">
      {modal === true && (
        <DrawerOverlay
          data-snap-points={hasSnapPoints ? "" : undefined}
          overlayBlur={overlayBlurProp}
          overlayModal={overlayModalProp}
        />
      )}
      <DrawerPrimitive.Viewport
        data-slot="drawer-viewport"
        data-modal={modal}
        className="pointer-events-none fixed inset-0 z-50 select-none data-[modal=true]:pointer-events-auto"
      >
        <DrawerPrimitive.Popup
          data-slot="drawer-popup"
          data-floating={floating ? "" : undefined}
          data-swipe-axis={swipeAxis}
          data-snap-points={hasSnapPoints ? "" : undefined}
          className={cn(
            DRAWER_POPUP_CLASSNAME,
            floating && DRAWER_FLOATING_CLASSNAME,
            className,
          )}
          {...props}
          style={{ ...style, ...floatingStyle }}
        >
          {showSwipeHandle && <DrawerSwipeHandle />}
          <DrawerPrimitive.Content
            data-slot="drawer-content"
            className={DRAWER_CONTENT_INNER_CLASSNAME}
          >
            {children}
          </DrawerPrimitive.Content>
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPortal>
  );
}

/**
 * Cabeçalho do drawer (título + descrição).
 */
function DrawerHeader({ className, ...props }: Readonly<DrawerHeaderProps>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(DRAWER_HEADER_CLASSNAME, className)}
      {...props}
    />
  );
}

/**
 * Rodapé do drawer (ações / botões).
 */
function DrawerFooter({ className, ...props }: Readonly<DrawerFooterProps>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn(DRAWER_FOOTER_CLASSNAME, className)}
      {...props}
    />
  );
}

/**
 * Título acessível do drawer.
 */
function DrawerTitle({ className, ...props }: Readonly<DrawerTitleProps>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn(DRAWER_TITLE_CLASSNAME, className)}
      {...props}
    />
  );
}

/**
 * Descrição acessível do drawer.
 */
function DrawerDescription({
  className,
  ...props
}: Readonly<DrawerDescriptionProps>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn(DRAWER_DESCRIPTION_CLASSNAME, className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerSwipeHandle,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
