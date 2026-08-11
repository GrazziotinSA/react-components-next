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
import drawerConstants, {
  DRAWER_OVERLAY_BLUR_TOKENS,
  resolveDrawerOverlayBlur,
} from "./utils/constants";

const triggerClassName =
  "rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white";

const secondaryButtonClassName =
  "w-full rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900";

const primaryButtonClassName =
  "w-full rounded-full bg-gray-900 px-4 py-3 text-sm font-medium text-white";

const deliveryOptions = [
  {
    id: "standard",
    label: "Standard delivery",
    hint: "Fastest",
  },
  {
    id: "1700",
    label: "5:00 PM – 5:15 PM",
    hint: "Prep starts at 4:45 PM",
  },
  {
    id: "1715",
    label: "5:15 PM – 5:30 PM",
    hint: "Prep starts at 5:00 PM",
  },
  {
    id: "1730",
    label: "5:30 PM – 5:45 PM",
    hint: "Prep starts at 5:15 PM",
  },
  {
    id: "1745",
    label: "5:45 PM – 6:00 PM",
    hint: "Prep starts at 5:30 PM",
  },
];

const meta = {
  title: "UI/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: drawerConstants } },
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
    showSwipeHandle: { control: "boolean" },
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
    showSwipeHandle: false,
    swipeDirection: "down",
    modal: true,
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    floating: true,
    rounded: "3xl",
    overlayBlur: "md",
    showSwipeHandle: false,
    swipeDirection: "down",
  },
  render: (args) => (
    <Drawer
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
        Abrir drawer
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Tem certeza?</DrawerTitle>
          <DrawerDescription>
            Esta ação não pode ser desfeita.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 text-sm text-gray-700">
          Conteúdo principal do drawer. Use o rodapé para confirmar ou cancelar.
        </div>
        <DrawerFooter>
          <DrawerClose
            render={<button type="button" className={primaryButtonClassName} />}
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
      </DrawerContent>
    </Drawer>
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
  render: () => (
    <Drawer
      showSwipeHandle
      snapPoints={[0.3, 0.9]}
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
        Abrir com snap
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Snap points</DrawerTitle>
          <DrawerDescription>
            Arraste o handle ou o painel entre 30% e 90% da altura.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-sm text-gray-600">
            Área de conteúdo. Use o swipe handle no topo para ajustar a altura.
          </div>
        </div>
      </DrawerContent>
    </Drawer>
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
  render: (args) => {
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
          defaultOpen
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
