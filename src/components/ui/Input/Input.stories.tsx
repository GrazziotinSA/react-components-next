import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    label: { control: "text" },
    placeholder: { control: "text" },
    hint: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Digite algo...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Nome completo",
    placeholder: "João Silva",
  },
};

export const WithHint: Story = {
  args: {
    label: "E-mail",
    type: "email",
    placeholder: "joao@exemplo.com",
    hint: "Nunca compartilharemos seu e-mail.",
  },
};

export const WithError: Story = {
  args: {
    label: "E-mail",
    type: "email",
    defaultValue: "email-invalido",
    error: "Por favor, insira um e-mail válido.",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Campo pequeno",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Campo grande",
  },
};

export const Disabled: Story = {
  args: {
    label: "Campo desabilitado",
    defaultValue: "Valor fixo",
    disabled: true,
  },
};

export const WithLeftAddon: Story = {
  args: {
    label: "Pesquisar",
    placeholder: "Buscar...",
    leftAddon: (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
};

export const WithTextAddon: Story = {
  args: {
    label: "Site",
    placeholder: "exemplo.com",
    leftAddon: <span className="text-xs font-medium">https://</span>,
  },
};
