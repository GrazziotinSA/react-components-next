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
import drawerConstants from "./utils/constants";

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
] as const;

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
    showSwipeHandle: false,
    swipeDirection: "down",
  },
  render: (args) => (
    <Drawer
      floating={args.floating}
      rounded={args.rounded}
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
    swipeDirection: "right",
    showSwipeHandle: false,
  },
  render: (args) => (
    <Drawer
      floating={args.floating}
      rounded={args.rounded}
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
