import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./index";
import { DRAWER_OVERLAY_BLUR_TOKENS } from "./utils/constants";
import { resolveDrawerOverlayBlur } from "./utils/functions";
import drawerStorybookDescription from "./utils/storybook";

const triggerClassName =
  "rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white";

const secondaryButtonClassName =
  "w-full rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900";

const primaryButtonClassName =
  "w-full rounded-full bg-gray-900 px-4 py-3 text-sm font-medium text-white";

const deliveryOptions = [
  { id: "standard", label: "Standard delivery", hint: "Fastest" },
  { id: "1700", label: "5:00 PM – 5:15 PM", hint: "Prep starts at 4:45 PM" },
  { id: "1715", label: "5:15 PM – 5:30 PM", hint: "Prep starts at 5:00 PM" },
  { id: "1730", label: "5:30 PM – 5:45 PM", hint: "Prep starts at 5:15 PM" },
  { id: "1745", label: "5:45 PM – 6:00 PM", hint: "Prep starts at 5:30 PM" },
];

const meta = {
  title: "UI/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: drawerStorybookDescription } },
  },
  argTypes: {
    open: { control: "boolean" },
    floating: {
      control: "boolean",
      description:
        "Painel flutuante com margem. Obrigatório para a prop `rounded` ter efeito.",
    },
    rounded: {
      control: "select",
      options: [
        "none",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "full",
      ],
      description: "Raio dos cantos (só com floating=true). Tokens, px ou CSS.",
    },
    overlayBlur: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      description:
        "Desfoque do overlay. Padrão md (8px). Também aceita px/CSS.",
    },
    points: {
      control: "boolean",
      description:
        "Snap points iOS (30% / 90%). Mutuamente exclusivo com floating.",
    },
    overlayModal: {
      control: "boolean",
      description:
        "Fundo modal completo (escuro + blur). Relevante com points/snapPoints.",
    },
    defaultSnapPoint: {
      control: "select",
      options: [0.3, 0.9],
      description:
        "Snap point inicial ao abrir (30% ou 90%). Só com points=true.",
      if: { arg: "points", eq: true },
    },
    showSwipeHandle: {
      control: "boolean",
      description:
        "Barra de arraste. Com points=true, liga automaticamente (omitido).",
    },
    swipeDirection: {
      control: "select",
      options: ["down", "up", "left", "right"],
    },
    modal: {
      control: "select",
      options: [true, false, "trap-focus"],
    },
    disablePointerDismissal: { control: "boolean" },
    snapPoints: { control: false },
    onOpenChange: { action: "onOpenChange" },
  },
  args: {
    floating: true,
    rounded: "3xl",
    overlayBlur: "md",
    points: false,
    overlayModal: false,
    showSwipeHandle: false,
    swipeDirection: "down",
    modal: true,
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    floating: true,
    rounded: "3xl",
    overlayBlur: "md",
    points: false,
    overlayModal: false,
    defaultSnapPoint: 0.3,
    showSwipeHandle: false,
    swipeDirection: "down",
  },
  render: (args) => (
    <div
      className={
        args.points
          ? "relative flex min-h-screen flex-col bg-gray-100"
          : "flex min-h-[50vh] items-center justify-center"
      }
    >
      <Drawer
        key={`${args.points}-${args.floating}-${args.overlayModal}-${args.defaultSnapPoint}`}
        points={args.points}
        floating={args.points ? false : args.floating}
        rounded={args.rounded}
        overlayBlur={args.overlayBlur}
        overlayModal={args.overlayModal}
        defaultSnapPoint={args.points ? args.defaultSnapPoint : undefined}
        showSwipeHandle={args.points ? undefined : args.showSwipeHandle}
        swipeDirection={args.swipeDirection}
        modal={args.modal}
        disablePointerDismissal={args.disablePointerDismissal}
        onOpenChange={(open) => {
          action("onOpenChange")(open);
        }}
        onSnapPointChange={(snapPoint) => {
          action("onSnapPointChange")(snapPoint);
        }}
      >
        <div className={args.points ? "p-6" : undefined}>
          <DrawerTrigger
            render={<button type="button" className={triggerClassName} />}
          >
            Abrir drawer
          </DrawerTrigger>
        </div>
        <DrawerContent overlayModal={args.overlayModal}>
          <DrawerHeader>
            <DrawerTitle>
              {args.points ? "Snap points" : "Tem certeza?"}
            </DrawerTitle>
            <DrawerDescription>
              {args.points
                ? "Arraste o handle para subir até 90%. Use defaultSnapPoint nos controls."
                : "Esta ação não pode ser desfeita."}
            </DrawerDescription>
          </DrawerHeader>
          <div
            className={`text-sm text-gray-700 ${args.points ? "flex-1 overflow-y-auto p-4" : "p-4"}`}
          >
            {args.points ? (
              <>
                <p className="mb-3">
                  Snap inicial:{" "}
                  <strong>
                    {Math.round(Number(args.defaultSnapPoint ?? 0.3) * 100)}%
                  </strong>
                  {". "}Arraste a barra no topo do painel para alternar entre
                  30% e 90%.
                </p>
                {Array.from({ length: 8 }, (_, i) => (
                  <p key={i} className="mb-2 text-gray-600">
                    Linha {i + 1} — conteúdo scrollável no snap alto.
                  </p>
                ))}
              </>
            ) : (
              "Conteúdo principal do drawer. Use o rodapé para confirmar ou cancelar."
            )}
          </div>
          {!args.points ? (
            <DrawerFooter>
              <DrawerClose
                render={
                  <button type="button" className={primaryButtonClassName} />
                }
              >
                Confirmar
              </DrawerClose>
              <DrawerClose
                render={
                  <button type="button" className={secondaryButtonClassName} />
                }
              >
                Cancelar
              </DrawerClose>
            </DrawerFooter>
          ) : (
            <DrawerFooter>
              <DrawerClose
                render={
                  <button type="button" className={secondaryButtonClassName} />
                }
              >
                Fechar
              </DrawerClose>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  ),
};

export const HorarioDeEntrega: Story = {
  name: "Horário de entrega",
  render: () => {
    const [selected, setSelected] = useState<string>("standard");

    return (
      <Drawer
        floating
        onOpenChange={(open) => {
          action("onOpenChange")(open);
        }}
      >
        <DrawerTrigger
          render={<button type="button" className={triggerClassName} />}
        >
          Escolher horário
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="gap-1 pt-6 text-left md:text-left">
            <DrawerTitle className="text-xl font-semibold">
              Pick a delivery time
            </DrawerTitle>
            <DrawerDescription className="text-sm text-gray-500">
              We&apos;ll prepare your order as soon as possible.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 space-y-2 overflow-y-auto px-4 py-4">
            {deliveryOptions.map((option) => {
              const active = selected === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    action("selectDelivery")(option.id);
                    setSelected(option.id);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-colors ${
                    active
                      ? "border-gray-300 bg-white"
                      : "border-gray-200 bg-white hover:border-gray-400"
                  }`}
                >
                  <span>
                    <span className="block text-sm font-medium text-black">
                      {option.label}
                    </span>
                    <span className="block text-xs text-gray-500">
                      {option.hint}
                    </span>
                  </span>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      active ? "border-gray-900" : "border-gray-300"
                    }`}
                    aria-hidden
                  >
                    {active ? (
                      <span className="h-2.5 w-2.5 rounded-full bg-gray-900" />
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>
          <DrawerFooter className="gap-3 pb-5">
            <DrawerClose
              render={
                <button type="button" className={primaryButtonClassName} />
              }
              onClick={() => {
                action("confirmDelivery")(selected);
              }}
            >
              Confirm Delivery Time
            </DrawerClose>
            <DrawerClose
              render={
                <button type="button" className={secondaryButtonClassName} />
              }
            >
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  },
};

export const SnapPoints: Story = {
  name: "Snap points",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Drawer estilo iOS com snap points. Ative **overlayModal** nos controls para o fundo ficar escuro/blur igual ao drawer modal/flutuante (print desktop).",
      },
    },
  },
  args: {
    overlayModal: true,
    overlayBlur: "md",
    showSwipeHandle: true,
    modal: true,
  },
  argTypes: {
    floating: { control: false },
    rounded: { control: false },
    overlayModal: { control: "boolean" },
    overlayBlur: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
    },
    showSwipeHandle: { control: "boolean" },
    swipeDirection: { control: false },
  },
  render: (args, { viewMode }) => {
    const resolved = resolveDrawerOverlayBlur(args.overlayBlur ?? "md");

    return (
      <div className="relative min-h-screen overflow-hidden bg-teal-700">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-amber-300" />
          <div className="absolute right-8 top-24 h-72 w-72 rounded-full bg-rose-400" />
          <div className="absolute bottom-16 left-1/3 h-64 w-64 rounded-full bg-sky-300" />
        </div>

        <div className="relative mx-auto max-w-3xl space-y-4 p-6 text-white">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-100">
            Teste snap points — fundo visível atrás do overlay
          </p>
          <h1 className="text-3xl font-semibold">Separação</h1>
          <p className="max-w-xl text-base text-teal-50">
            Abra o drawer e arraste entre 30% e 90%. Com{" "}
            <strong>overlayModal=true</strong> (padrão aqui) o fundo fica igual
            ao drawer modal. Desligue para ver o comportamento iOS.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {["CLC SKINNY BRESSIA", "CHIN. MASC PLUSH", "TENIS GLITER"].map(
              (title) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/30 bg-white/15 p-4"
                >
                  <div className="mb-2 rounded bg-orange-400 px-2 py-1 text-xs font-semibold text-white">
                    {title}
                  </div>
                  <p className="text-sm text-teal-50">
                    Situação: Incluído · Pedido 623010 · Qtd 2
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        <Drawer
          key={`${args.overlayModal}-${args.overlayBlur}`}
          defaultOpen={viewMode === "story"}
          points
          showSwipeHandle={args.showSwipeHandle}
          overlayModal={args.overlayModal}
          overlayBlur={args.overlayBlur}
          modal={args.modal}
          onOpenChange={(open) => {
            action("onOpenChange")(open);
          }}
          onSnapPointChange={(snapPoint) => {
            action("onSnapPointChange")(snapPoint);
          }}
        >
          <DrawerTrigger
            render={<button type="button" className={triggerClassName} />}
          >
            Reabrir snap
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Snap points</DrawerTitle>
              <DrawerDescription>
                overlayModal:{" "}
                <strong>{args.overlayModal ? "true" : "false"}</strong>
                {" · "}
                blur: <strong>{String(args.overlayBlur ?? "md")}</strong>
                {" → "}
                <strong>{resolved}</strong>
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm text-gray-700">
              <p>
                Arraste o handle ou o painel. Com{" "}
                <code className="rounded bg-gray-100 px-1">
                  overlayModal=false
                </code>{" "}
                o fundo clareia no snap alto (iOS). Com{" "}
                <code className="rounded bg-gray-100 px-1">
                  overlayModal=true
                </code>{" "}
                fica escuro/blur fixo.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  overlay:{" "}
                  <code className="rounded bg-gray-100 px-1">
                    data-overlay-modal=
                    {args.overlayModal ? '""' : "undefined"}
                  </code>
                </li>
                <li>
                  blur:{" "}
                  <code className="rounded bg-gray-100 px-1">
                    data-overlay-blur=&quot;{resolved}&quot;
                  </code>
                </li>
              </ul>
            </div>
            <DrawerFooter>
              <DrawerClose
                render={
                  <button type="button" className={secondaryButtonClassName} />
                }
              >
                Fechar
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
};

export const SnapPointsComparacao: Story = {
  name: "Snap points — iOS vs modal",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Dois drawers lado a lado: esquerda iOS (`overlayModal=false`), direita modal (`overlayModal=true`).",
      },
    },
  },
  render: () => (
    <div className="relative min-h-screen overflow-hidden bg-gray-200">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0d9488_0%,#1e3a5f_50%,#be185d_100%)] opacity-90" />
        <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-yellow-300/60 blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-cyan-300/60 blur-2xl" />
      </div>
      <div className="relative grid min-h-screen grid-cols-1 gap-4 p-4 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-3 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
            iOS (padrão)
          </p>
          <p className="max-w-xs text-sm text-white/90">
            overlayModal=false — fundo varia com a altura do snap
          </p>
          <Drawer
            showSwipeHandle
            snapPoints={[0.35, 0.85]}
            overlayModal={false}
            overlayBlur="md"
            onOpenChange={(open) => action("ios-onOpenChange")(open)}
          >
            <DrawerTrigger
              render={<button type="button" className={triggerClassName} />}
            >
              Abrir iOS
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Modo iOS</DrawerTitle>
                <DrawerDescription>overlayModal=false</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 text-sm text-gray-600">
                Arraste e observe o fundo clareando.
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
            Modal (desktop)
          </p>
          <p className="max-w-xs text-sm text-white/90">
            overlayModal=true — fundo escuro/blur fixo
          </p>
          <Drawer
            showSwipeHandle
            snapPoints={[0.35, 0.85]}
            overlayModal
            overlayBlur="md"
            onOpenChange={(open) => action("modal-onOpenChange")(open)}
          >
            <DrawerTrigger
              render={<button type="button" className={triggerClassName} />}
            >
              Abrir modal
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Modo modal</DrawerTitle>
                <DrawerDescription>overlayModal=true</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 text-sm text-gray-600">
                Arraste — o fundo permanece escurecido.
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  ),
};

export const Lateral: Story = {
  args: {
    floating: true,
    rounded: "3xl",
    overlayBlur: "md",
    swipeDirection: "right",
    showSwipeHandle: false,
  },
  render: (args) => (
    <Drawer
      floating={args.floating}
      rounded={args.rounded}
      overlayBlur={args.overlayBlur}
      swipeDirection={args.swipeDirection ?? "right"}
      showSwipeHandle={args.showSwipeHandle}
      onOpenChange={(open) => {
        action("onOpenChange")(open);
      }}
    >
      <DrawerTrigger
        render={<button type="button" className={triggerClassName} />}
      >
        Abrir à direita
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer lateral</DrawerTitle>
          <DrawerDescription>
            Flutua na tela com margem nas bordas (não encosta nas laterais).
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto p-4 text-sm text-gray-700">
          Conteúdo do painel lateral flutuante.
        </div>
        <DrawerFooter>
          <DrawerClose
            render={
              <button type="button" className={secondaryButtonClassName} />
            }
          >
            Fechar
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

/**
 * Teste visual do `overlayBlur`: fundo rico + drawer aberto.
 * Troque o control `overlayBlur` e confira o atributo `data-overlay-blur` no overlay.
 */
export const OverlayBlur: Story = {
  name: "Overlay blur",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Valida se `overlayBlur` altera o backdrop. O fundo precisa ter texto/cores para o desfoque aparecer. No DevTools, o overlay deve ter `data-overlay-blur` e `--drawer-overlay-blur` iguais ao valor resolvido.",
      },
    },
  },
  args: {
    floating: true,
    rounded: "3xl",
    overlayBlur: "md",
    swipeDirection: "down",
    showSwipeHandle: true,
    modal: true,
  },
  render: (args, { viewMode }) => {
    const resolved = resolveDrawerOverlayBlur(args.overlayBlur ?? "md");

    return (
      <div className="relative min-h-screen overflow-hidden bg-teal-700">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-amber-300" />
          <div className="absolute right-8 top-24 h-72 w-72 rounded-full bg-rose-400" />
          <div className="absolute bottom-16 left-1/3 h-64 w-64 rounded-full bg-sky-300" />
        </div>

        <div className="relative mx-auto max-w-3xl space-y-4 p-6 text-white">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-100">
            Fundo de teste — texto nítido vs desfocado
          </p>
          <h1 className="text-3xl font-semibold">Separação de itens</h1>
          <p className="max-w-xl text-base text-teal-50">
            Alterne o control <strong>overlayBlur</strong> com o drawer aberto.
            Com <code className="rounded bg-black/30 px-1">none</code> o fundo
            fica nítido; com{" "}
            <code className="rounded bg-black/30 px-1">3xl</code> o desfoque
            fica forte.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {["CLC SKINNY BRESSIA", "CHIN. MASC PLUSH", "CAMISETA BASIC"].map(
              (title) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/30 bg-white/15 p-4 backdrop-blur-0"
                >
                  <div className="mb-2 rounded bg-orange-400 px-2 py-1 text-xs font-semibold text-white">
                    {title}
                  </div>
                  <p className="text-sm text-teal-50">
                    Situação: Incluído · Pedido 623010 · Qtd 2
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        <Drawer
          key={String(args.overlayBlur)}
          defaultOpen={viewMode === "story"}
          floating={args.floating}
          rounded={args.rounded}
          overlayBlur={args.overlayBlur}
          showSwipeHandle={args.showSwipeHandle}
          swipeDirection={args.swipeDirection}
          modal={args.modal}
          disablePointerDismissal={args.disablePointerDismissal}
          onOpenChange={(open) => {
            action("onOpenChange")(open);
          }}
        >
          <DrawerTrigger
            render={<button type="button" className={triggerClassName} />}
          >
            Reabrir drawer
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Teste overlayBlur</DrawerTitle>
              <DrawerDescription>
                Prop: <strong>{String(args.overlayBlur ?? "md")}</strong>
                {" → "}
                resolvido: <strong>{resolved}</strong>
                {" · "}
                tokens:{" "}
                {Object.entries(DRAWER_OVERLAY_BLUR_TOKENS)
                  .map(([token, px]) => `${token}=${px}`)
                  .join(", ")}
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex-1 space-y-2 overflow-y-auto p-4 text-sm text-gray-700">
              <p>
                Inspecione o elemento{" "}
                <code className="rounded bg-gray-100 px-1">
                  [data-slot=&quot;drawer-overlay&quot;]
                </code>{" "}
                e confira:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  atributo{" "}
                  <code className="rounded bg-gray-100 px-1">
                    data-overlay-blur=&quot;{resolved}&quot;
                  </code>
                </li>
                <li>
                  style{" "}
                  <code className="rounded bg-gray-100 px-1">
                    --drawer-overlay-blur: {resolved}
                  </code>
                </li>
                <li>
                  computed{" "}
                  <code className="rounded bg-gray-100 px-1">
                    backdrop-filter: blur({resolved})
                  </code>
                </li>
              </ul>
            </div>
            <DrawerFooter>
              <DrawerClose
                render={
                  <button type="button" className={secondaryButtonClassName} />
                }
              >
                Fechar
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
};
