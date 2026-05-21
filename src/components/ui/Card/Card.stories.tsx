import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import Card from "./index";
import cardConstants from "./utils/constants";

const meta = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: cardConstants } },
  },
  argTypes: {
    title: { control: "text" },
    toolTip: { control: "boolean" },
    width: { control: "text" },
    height: { control: "text" },
    margin: { control: "text" },
    titleWidth: { control: "text" },
    titleColor: { control: "color" },
    borderTitle: { control: "text" },
    borderRadius: { control: "text" },
    justifyContent: {
      control: "select",
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
      ],
    },
    onClick: { action: "clicked" },
    className: { control: "text" },
    icon: { control: false },
    children: { control: false },
  },
  args: {
    title: "Título do card",
    toolTip: false,
    width: "360px",
    borderRadius: "10px",
    borderTitle: "10px 10px 0 0",
    children: (
      <div className="p-4 text-gray-700">
        Conteúdo principal do card. Ajuste as props no painel Controls.
      </div>
    ),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {};

export const ComTooltip: Story = {
  args: {
    title:
      "Título muito longo que será truncado no cabeçalho mas aparece completo no tooltip",
    toolTip: true,
    width: "280px",
  },
};

export const ComIcone: Story = {
  args: {
    title: "Novo pedido",
    icon: (
      <button
        type="button"
        className="rounded px-2 py-0.5 text-xs font-medium text-white"
      >
        +
      </button>
    ),
  },
};

export const Clicavel: Story = {
  args: {
    title: "Card clicável",
    onClick: action("card-click"),
    width: "320px",
    children: (
      <p className="p-4 text-gray-600">
        Passe o mouse: o cursor deve ser <code>pointer</code>.
      </p>
    ),
  },
};

export const TituloTruncado: Story = {
  args: {
    title: "Relatório consolidado de vendas do trimestre",
    width: "240px",
    toolTip: false,
  },
};

export const CorCabecalhoCustomizada: Story = {
  args: {
    title: "Alerta",
    titleColor: "#e03131",
    children: (
      <p className="p-4 text-gray-700">Cabeçalho com cor customizada.</p>
    ),
  },
};

export const TituloMetadeDoCard: Story = {
  args: {
    title: "Título com 55% da largura",
    titleWidth: "55%",
    width: "400px",
    borderTitle: "10px 0 10px 0",
    children: (
      <p className="p-4 text-gray-700">
        O cabeçalho colorido usa <code>titleWidth=&quot;55%&quot;</code> — cerca
        da metade da largura do card.
      </p>
    ),
  },
};
