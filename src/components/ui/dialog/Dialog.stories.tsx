import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import Dialog from "./index";
import type { DialogProps } from "./utils/interface";
import dialogConstants from "./utils/constants";

function DialogAmostra(args: Readonly<DialogProps>) {
  const [open, setOpen] = useState(args.open);

  return (
    <>
      <button
        type="button"
        className="rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white"
        onClick={() => setOpen(true)}
      >
        Abrir diálogo
      </button>
      <Dialog
        {...args}
        open={open}
        onClose={() => {
          action("onClose")();
          setOpen(false);
        }}
      />
    </>
  );
}

const meta: Meta<typeof Dialog> = {
  title: "UI/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: dialogConstants } },
  },
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
    blurBackdrop: { control: "boolean" },
    maxWidth: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", false],
    },
    onClose: { action: "onClose" },
    children: { control: false },
    actions: { control: false },
  },
  args: {
    open: false,
    title: "Título do diálogo",
    onClose: action("onClose"),
    blurBackdrop: false,
    maxWidth: "sm",
    children: (
      <p className="text-sm text-gray-700">
        Conteúdo principal do diálogo. Use o botão para abrir.
      </p>
    ),
    actions: (
      <>
        <button
          type="button"
          className="rounded px-4 py-2 text-sm text-gray-600"
        >
          Cancelar
        </button>
        <button
          type="button"
          className="rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white"
        >
          Confirmar
        </button>
      </>
    ),
  },
  render: (args) => <DialogAmostra {...args} />,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Padrao: Story = {};

export const SemAcoes: Story = {
  args: {
    title: "Informação",
    actions: undefined,
    children: (
      <p className="text-sm text-gray-700">
        Diálogo somente com título e conteúdo, sem rodapé de ações.
      </p>
    ),
  },
};

export const BackdropBlur: Story = {
  args: {
    title: "Backdrop com blur",
    blurBackdrop: true,
    children: (
      <p className="text-sm text-gray-700">
        O fundo atrás do modal fica desfocado e escurecido.
      </p>
    ),
  },
};

export const Confirmacao: Story = {
  args: {
    title: "Confirmar exclusão",
    maxWidth: "xs",
    children: (
      <p className="text-sm text-gray-700">
        Deseja realmente excluir este item? Esta ação não pode ser desfeita.
      </p>
    ),
    actions: (
      <>
        <button
          type="button"
          className="rounded px-4 py-2 text-sm text-gray-600"
        >
          Cancelar
        </button>
        <button
          type="button"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white"
        >
          Excluir
        </button>
      </>
    ),
  },
};

export const Livre: Story = {
  args: { blurBackdrop: true, maxWidth: "md" },
};
