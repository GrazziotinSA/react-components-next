import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";
import { Button } from "../Button";
import { Badge } from "../Badge";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    hoverable: { control: "boolean" },
    bordered: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-72">
      <CardHeader>
        <CardTitle>Título do Card</CardTitle>
        <CardDescription>Descrição breve do conteúdo</CardDescription>
      </CardHeader>
      <CardContent>
        Conteúdo principal do card com texto de exemplo para demonstrar o
        layout.
      </CardContent>
      <CardFooter>
        <Button size="sm">Ação</Button>
        <Button size="sm" variant="ghost">
          Cancelar
        </Button>
      </CardFooter>
    </Card>
  ),
  args: {
    shadow: "sm",
    padding: "md",
    bordered: true,
    hoverable: false,
  },
};

export const Hoverable: Story = {
  render: () => (
    <Card hoverable className="w-72">
      <CardHeader>
        <CardTitle>Card clicável</CardTitle>
        <CardDescription>Passe o mouse para ver o efeito</CardDescription>
      </CardHeader>
      <CardContent>Este card tem o efeito de hover habilitado.</CardContent>
    </Card>
  ),
};

export const NoBorder: Story = {
  render: () => (
    <Card bordered={false} shadow="md" className="w-72">
      <CardHeader>
        <CardTitle>Sem borda</CardTitle>
      </CardHeader>
      <CardContent>Card com sombra mas sem borda.</CardContent>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card className="w-72">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle>Plano Pro</CardTitle>
          <Badge variant="primary">Popular</Badge>
        </div>
        <CardDescription>Para times em crescimento</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-gray-900">
          R$ 49
          <span className="text-base font-normal text-gray-500">/mês</span>
        </p>
        <ul className="mt-3 space-y-1 text-sm text-gray-600">
          <li>✓ 10 projetos</li>
          <li>✓ 5 colaboradores</li>
          <li>✓ 100 GB de armazenamento</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button fullWidth>Começar agora</Button>
      </CardFooter>
    </Card>
  ),
};

export const AllShadows: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(["none", "sm", "md", "lg"] as const).map((shadow) => (
        <Card key={shadow} shadow={shadow} className="w-36">
          <CardHeader>
            <CardTitle className="text-sm">shadow: {shadow}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  ),
};
