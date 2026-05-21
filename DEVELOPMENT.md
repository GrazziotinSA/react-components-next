# Guia de Desenvolvimento

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm 9 ou superior

---

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd react-components-next
npm install
```

---

## Subindo o Storybook

```bash
npm run storybook
```

Acesse em [http://localhost:6006](http://localhost:6006).

---

## Scripts disponíveis

| Comando                   | Descrição                                               |
| ------------------------- | ------------------------------------------------------- |
| `npm run storybook`       | Inicia o Storybook em modo desenvolvimento (porta 6006) |
| `npm run build-storybook` | Gera o build estático do Storybook                      |
| `npm run build:lib`       | Gera o bundle da biblioteca para publicação no npm      |
| `npm run build:lib:watch` | Rebuild automático da biblioteca ao salvar              |
| `npm run type-check`      | Verifica os tipos com TypeScript                        |
| `npm run lint`            | Verifica o código com ESLint                            |

---

## Criando um novo componente

### 1. Estrutura de arquivos

Crie uma pasta dentro de `src/components/ui/`:

```
src/components/ui/MeuComponente/
├── MeuComponente.tsx          # implementação do componente
├── MeuComponente.stories.tsx  # stories do Storybook
└── index.ts                   # exports públicos
```

### 2. Implementação (`MeuComponente.tsx`)

```tsx
import React from "react";
import { cn } from "../../../lib/utils";

export interface MeuComponenteProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary";
}

export function MeuComponente({
  variant = "default",
  className,
  children,
  ...props
}: MeuComponenteProps) {
  return (
    <div className={cn("...", className)} {...props}>
      {children}
    </div>
  );
}
```

> Se o componente usar hooks (`useState`, `useEffect`, etc.), adicione `"use client";` na primeira linha do arquivo.

### 3. Story (`MeuComponente.stories.tsx`)

```tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MeuComponente } from "./MeuComponente";

const meta: Meta<typeof MeuComponente> = {
  title: "UI/MeuComponente",
  component: MeuComponente,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof MeuComponente>;

export const Default: Story = {
  args: { children: "Exemplo" },
};
```

### 4. Barrel (`index.ts`)

```ts
export { MeuComponente } from "./MeuComponente";
export type { MeuComponenteProps } from "./MeuComponente";
```

### 5. Registrar no index da pasta `ui`

Adicione a linha em `src/components/ui/index.ts`:

```ts
export * from "./MeuComponente";
```

---

## Build da biblioteca (npm)

```bash
npm run build:lib
```

Os arquivos gerados ficam em `dist/` com os seguintes formatos:

| Arquivo           | Formato                                            |
| ----------------- | -------------------------------------------------- |
| `dist/index.js`   | CommonJS (CJS)                                     |
| `dist/index.mjs`  | ES Module (ESM)                                    |
| `dist/index.d.ts` | Tipos TypeScript                                   |
| `dist/index.css`  | CSS compilado com todas as classes dos componentes |

---

## Configurando estilos no projeto consumidor

A biblioteca usa Tailwind CSS. Escolha uma das opções abaixo dependendo do seu projeto.

### Opção A — Projeto com Tailwind CSS v4 (recomendado)

Adicione uma linha no arquivo CSS onde o Tailwind é importado (geralmente `globals.css`):

```css
@import "tailwindcss";
@source "../node_modules/react-components-next/dist/index.mjs";
```

O Tailwind vai escanear os componentes da biblioteca e incluir todos os estilos automaticamente. **Nenhuma outra configuração é necessária.**

### Opção B — Projeto sem Tailwind CSS

Importe o CSS pré-compilado uma vez no ponto de entrada da aplicação (`layout.tsx`, `_app.tsx`, etc.):

```tsx
import "react-components-next/styles";
```

---

## Usando a biblioteca em projetos locais (npm link)

O `npm link` cria um link simbólico global da biblioteca, permitindo testá-la em outros projetos sem publicar no npm.

### Passo 1 — Registrar o link (neste repositório)

```bash
# Gere o build da biblioteca primeiro
npm run build:lib

# Registre o pacote globalmente via link
npm link
```

### Passo 2 — Consumir o link no projeto de destino

```bash
# Vá para o outro projeto
cd /caminho/do/meu-outro-projeto

# Vincule a biblioteca local
npm link react-components-next
```

A partir deste momento, `import { Button } from "react-components-next"` apontará para os arquivos locais em `dist/`.

> **Se o projeto de destino for Next.js** e continuar com erro "Module not found" mesmo após o link, adicione o pacote ao `transpilePackages` no `next.config` do projeto de destino:
>
> ```js
> const nextConfig = {
>   transpilePackages: ["react-components-next"],
> };
> ```
>
> Reinicie o servidor de dev depois.

### Passo 3 — Atualizar após mudanças

Sempre que alterar componentes, refaça o build:

```bash
npm run build:lib
```

O projeto vinculado já reflete as mudanças automaticamente.

### Passo 4 — Desfazer o link

```bash
# No projeto de destino
npm unlink react-components-next

# Neste repositório (remove o link global)
npm unlink
```

### Dica: watch mode

Para recompilar automaticamente enquanto desenvolve, rode em dois terminais:

**Terminal 1 — rebuild da lib ao salvar:**

```bash
npm run build:lib:watch
```

**Terminal 2 — projeto de destino em dev:**

```bash
npm run dev
```

---

## Publicando no npm

```bash
# 1. Atualizar a versão no package.json
npm version patch   # ou minor / major

# 2. Fazer login no npm (apenas na primeira vez)
npm login

# 3. Publicar (o build:lib roda automaticamente via prepublishOnly)
npm publish
```
