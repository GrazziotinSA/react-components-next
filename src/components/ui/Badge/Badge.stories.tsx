import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger", "info"],
    },
    dot: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Default",
    variant: "default",
  },
};

export const Primary: Story = {
  args: { children: "Primary", variant: "primary" },
};

export const Success: Story = {
  args: { children: "Aprovado", variant: "success" },
};

export const Warning: Story = {
  args: { children: "Pendente", variant: "warning" },
};

export const Danger: Story = {
  args: { children: "Rejeitado", variant: "danger" },
};

export const Info: Story = {
  args: { children: "Em análise", variant: "info" },
};

export const WithDot: Story = {
  args: { children: "Online", variant: "success", dot: true },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const AllWithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default" dot>Offline</Badge>
      <Badge variant="success" dot>Online</Badge>
      <Badge variant="warning" dot>Ausente</Badge>
      <Badge variant="danger" dot>Ocupado</Badge>
      <Badge variant="info" dot>Em reunião</Badge>
    </div>
  ),
};
