import type { ComponentProps } from "react";
import type { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

/**
 * Raio dos cantos do drawer flutuante.
 * Tokens Tailwind (`sm` … `5xl`, `full`) ou valor CSS (`16`, `"16px"`, `"1.5rem"`).
 */
export type DrawerRounded =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "full"
  | number
  | (string & {});

/**
 * Intensidade do desfoque do overlay.
 * Tokens (`none` … `3xl`), número em px (`8`) ou CSS (`"8px"`, `"0.5rem"`).
 */
export type DrawerOverlayBlur =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | number
  | (string & {});

/**
 * Props do root composto {@link Drawer}.
 * Estende as props do `Drawer.Root` do Base UI e adiciona helpers de UI
 * (`showSwipeHandle`, `floating`, `rounded`, `overlayBlur`).
 */
export type DrawerProps = DrawerPrimitive.Root.Props & {
  /**
   * Quando `true`, o {@link DrawerContent} renderiza um {@link DrawerSwipeHandle}
   * no topo (ou na lateral, conforme `swipeDirection`).
   * @default false
   */
  showSwipeHandle?: boolean;

  /**
   * Quando `true`, o painel flutua com margem nas bordas (não encosta na tela),
   * cantos arredondados e sem o bleed branco do swipe.
   * Mutuamente exclusivo com `snapPoints` — se houver snap, `floating` é ignorado.
   * @default false
   */
  floating?: boolean;

  /**
   * Raio dos cantos quando `floating` está ativo.
   * Tokens: `none` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl` | `4xl` | `5xl` | `full`.
   * Ou número em px (`24`) / string CSS (`"1.5rem"`).
   * @default "3xl"
   */
  rounded?: DrawerRounded;

  /**
   * Desfoque do overlay/backdrop.
   * Tokens: `none` | `xs` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl`.
   * Ou número em px (`12`) / string CSS (`"8px"`).
   * @default "md" (8px)
   */
  overlayBlur?: DrawerOverlayBlur;

  /**
   * Ativa snap points estilo iOS (bottom sheet em 30% e 90% da altura).
   * Atalho para `snapPoints={[0.3, 0.9]}`; ignorado se `snapPoints` for informado.
   * Mutuamente exclusivo com `floating`. Com snap, o handle de swipe vem ligado por padrão.
   * @default false
   */
  points?: boolean;

  /**
   * Quando `true`, o overlay fica sempre com escurecimento/blur completos (estilo modal),
   * mesmo com `snapPoints`. Sem isso, snap points seguem o comportamento iOS: o fundo
   * fica mais claro conforme o drawer sobe.
   * @default false
   */
  overlayModal?: boolean;
};

/**
 * Props do trigger que abre o drawer.
 * Use `render` para compor com um botão customizado (API Base UI).
 */
export type DrawerTriggerProps = DrawerPrimitive.Trigger.Props;

/**
 * Props do portal do drawer.
 */
export type DrawerPortalProps = DrawerPrimitive.Portal.Props;

/**
 * Props do botão/ação que fecha o drawer.
 * Use `render` para compor com um botão customizado (API Base UI).
 */
export type DrawerCloseProps = DrawerPrimitive.Close.Props;

/**
 * Props do overlay (backdrop) do drawer.
 */
export type DrawerOverlayProps = DrawerPrimitive.Backdrop.Props & {
  /**
   * Desfoque do overlay. Se omitido, usa o `overlayBlur` do {@link Drawer} root.
   */
  overlayBlur?: DrawerOverlayBlur;

  /**
   * Overlay modal completo. Se omitido, usa o `overlayModal` do {@link Drawer} root.
   */
  overlayModal?: boolean;
};

/**
 * Props do popup/conteúdo principal do drawer.
 * Aceita `className` para sobrescrever altura (`h-*`, `max-h-*`) ou largura (`w-*`, `max-w-*`).
 * `floating` / `rounded` / `overlayBlur` sobrescrevem o valor herdado do {@link Drawer} root quando informados.
 */
export type DrawerContentProps = DrawerPrimitive.Popup.Props & {
  /**
   * Quando `true`, aplica o visual flutuante neste content.
   * Se omitido, usa o `floating` do {@link Drawer} root.
   */
  floating?: boolean;

  /**
   * Raio dos cantos quando flutuante.
   * Se omitido, usa o `rounded` do {@link Drawer} root.
   * @default "3xl"
   */
  rounded?: DrawerRounded;

  /**
   * Desfoque do overlay. Se omitido, usa o `overlayBlur` do {@link Drawer} root.
   */
  overlayBlur?: DrawerOverlayBlur;

  /**
   * Overlay modal completo. Se omitido, usa o `overlayModal` do {@link Drawer} root.
   */
  overlayModal?: boolean;
};

/**
 * Props do handle visual de swipe (barra de arraste).
 */
export type DrawerSwipeHandleProps = ComponentProps<"div">;

/**
 * Props do cabeçalho do drawer (título + descrição).
 */
export type DrawerHeaderProps = ComponentProps<"div">;

/**
 * Props do rodapé do drawer (ações / botões).
 */
export type DrawerFooterProps = ComponentProps<"div">;

/**
 * Props do título acessível do drawer.
 */
export type DrawerTitleProps = DrawerPrimitive.Title.Props;

/**
 * Props da descrição acessível do drawer.
 */
export type DrawerDescriptionProps = DrawerPrimitive.Description.Props;
