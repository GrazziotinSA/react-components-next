# React Components Library

Biblioteca de componentes React reutilizáveis, construída com TypeScript e Tailwind CSS.

## Instalação

```bash
npm install react-components-next
```

> **Atenção:** esta biblioteca usa classes do Tailwind CSS. Certifique-se de que o Tailwind esteja configurado no seu projeto.

## Componentes disponíveis

| Componente | Descrição                                        |
| ---------- | ------------------------------------------------ |
| `Button`   | Botão com variantes, tamanhos, loading e ícones  |
| `Input`    | Campo de entrada com label, hint, erro e addons  |
| `Card`     | Container com header, content e footer compostos |
| `Badge`    | Etiqueta colorida para status e categorias       |
| `Avatar`   | Foto de perfil com fallback de iniciais          |

## Uso

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  Badge,
  Avatar,
} from "react-components-next";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Perfil</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          <Avatar fallback="João Silva" size="md" />
          <div>
            <p>João Silva</p>
            <Badge variant="success" dot>
              Online
            </Badge>
          </div>
        </div>
        <Input label="E-mail" type="email" placeholder="joao@exemplo.com" />
        <Button variant="primary" fullWidth>
          Salvar
        </Button>
      </CardContent>
    </Card>
  );
}
```

## Componentes

### Button

```tsx
<Button
  variant="primary" // "primary" | "secondary" | "outline" | "ghost" | "destructive"
  size="md" // "sm" | "md" | "lg"
  loading={false} // boolean
  fullWidth={false} // boolean
  leftIcon={<Icon />} // ReactNode
  rightIcon={<Icon />} // ReactNode
>
  Clique aqui
</Button>
```

### Input

```tsx
<Input
  label="Nome"
  placeholder="Digite..."
  hint="Texto de ajuda"
  error="Mensagem de erro"
  size="md" // "sm" | "md" | "lg"
  leftAddon={<Icon />} // ReactNode
  rightAddon={<Icon />} // ReactNode
  fullWidth={false}
/>
```

### Card

```tsx
<Card shadow="sm" padding="md" hoverable bordered>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descrição</CardDescription>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>
```

### Badge

```tsx
<Badge
  variant="success" // "default" | "primary" | "success" | "warning" | "danger" | "info"
  dot={false} // boolean - exibe um ponto colorido
>
  Online
</Badge>
```

### Avatar

```tsx
<Avatar
  src="https://..." // URL da imagem (opcional)
  alt="Nome do usuário"
  fallback="João Silva" // usado para gerar as iniciais
  size="md" // "xs" | "sm" | "md" | "lg" | "xl"
/>
```

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento com showcase
npm run dev

# Build da biblioteca para npm
npm run build:lib

# Build completo (biblioteca + Next.js)
npm run build:all

# Verificar tipos TypeScript
npm run type-check
```

## Publicar no npm

```bash
# Fazer login no npm
npm login

# Publicar (executa build:lib automaticamente via prepublishOnly)
npm publish
```

## Estrutura do projeto

```
src/
├── app/                   # Next.js App Router (showcase)
│   ├── page.tsx           # Página inicial com lista de componentes
│   └── showcase/          # Páginas de demonstração
│       ├── button/
│       ├── input/
│       ├── card/
│       ├── badge/
│       └── avatar/
├── components/            # Biblioteca de componentes (publicada no npm)
│   ├── index.ts           # Entrypoint principal
│   └── ui/
│       ├── Button/
│       ├── Input/
│       ├── Card/
│       ├── Badge/
│       └── Avatar/
└── lib/
    └── utils.ts           # Utilitário cn() para classes CSS
```

## Licença

MIT
