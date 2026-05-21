import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Botão reutilizável com suporte a variantes, tamanhos, estado de loading e ícones.

**Importação:**
\`\`\`tsx
import { Button } from "react-components-next";
\`\`\`

**Uso básico:**
\`\`\`tsx
<Button variant="primary" size="md" onClick={() => {}}>
  Clique aqui
</Button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "destructive"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Botão Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Botão Secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Botão Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Botão Ghost",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Deletar",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Carregando...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Desabilitado",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Pequeno",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Grande",
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: "Adicionar",
    leftIcon: (
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
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Botão de largura total",
  },
  parameters: {
    layout: "padded",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
