import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Exibe imagens de perfil com fallback automático de iniciais quando a imagem não carrega.

**Importação:**
\`\`\`tsx
import { Avatar } from "react-components-next";
\`\`\`

**Uso básico:**
\`\`\`tsx
// Com imagem
<Avatar src="https://..." alt="João Silva" size="md" />

// Com fallback de iniciais
<Avatar fallback="João Silva" size="md" />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    src: { control: "text" },
    alt: { control: "text" },
    fallback: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    fallback: "João Silva",
    size: "md",
  },
};

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=1",
    alt: "Usuário",
    size: "md",
  },
};

export const FallbackInitials: Story = {
  args: {
    fallback: "Maria Oliveira",
    size: "md",
  },
};

export const BrokenImage: Story = {
  args: {
    src: "https://url-invalida.example.com/foto.jpg",
    fallback: "Carlos Mendes",
    size: "lg",
  },
};

export const ExtraSmall: Story = {
  args: { fallback: "XS", size: "xs" },
};

export const Small: Story = {
  args: { fallback: "SM", size: "sm" },
};

export const Large: Story = {
  args: { fallback: "LG", size: "lg" },
};

export const ExtraLarge: Story = {
  args: { fallback: "XL", size: "xl" },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" fallback="XS" />
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
      <Avatar size="xl" fallback="XL" />
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" size="md" className="ring-2 ring-white" />
      <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" size="md" className="ring-2 ring-white" />
      <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" size="md" className="ring-2 ring-white" />
      <Avatar fallback="+3" size="md" className="ring-2 ring-white bg-gray-300" />
    </div>
  ),
};
