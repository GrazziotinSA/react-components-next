# Guia de Desenvolvimento

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm 9 ou superior

---

## Instalação

```bash
git clone <url-do-repositorio>
cd react-components-next
npm install
```

---

## Ambiente de desenvolvimento

O **Storybook** é o ambiente principal para visualizar e documentar componentes:

```bash
npm run storybook
```

Acesse em [http://localhost:6006](http://localhost:6006).

Os providers (`GrazziotinProviders`) e estilos de desenvolvimento são configurados em `.storybook/preview.tsx`.

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

> **Importante:** `build:lib` executa `build:css:src` antes do tsup para gerar `src/styles/tailwind-output.css` (gitignored). Esse arquivo é necessário para o auto-inject de CSS nos bundles JS.

---

## Estrutura do projeto

```
src/
├── components/
│   ├── accessibility/          # Say, useSay
│   └── ui/                       # card, dialog, data-table, tab, input, filter...
├── core/                         # Utilitários internos (não exportados)
├── functions/                    # cn, nvl, formatters
├── providers/                    # GrazziotinProviders
├── styles/
│   ├── index.css                 # Entrada Tailwind para build npm (dist/index.css)
│   └── storybook.css             # Estilos do ambiente Storybook
└── index.ts                      # Entrypoint principal da biblioteca
```

---

## Criando um novo componente

### 1. Estrutura de arquivos

Crie uma pasta em `src/components/ui/` seguindo o padrão **kebab-case**:

```
src/components/ui/meu-componente/
├── index.tsx                     # implementação do componente
├── meu-componente.stories.tsx    # stories do Storybook
└── utils/
    ├── constants.ts              # estilos, configurações
    └── interface.ts              # tipos TypeScript
```

### 2. Implementação (`index.tsx`)

```tsx
import { cn } from "@/functions";
import type { MeuComponenteProps } from "./utils/interface";

export default function MeuComponente({
  className,
  children,
}: Readonly<MeuComponenteProps>) {
  return <div className={cn("text-sm", className)}>{children}</div>;
}
```

> Se o componente usar hooks (`useState`, `useEffect`, etc.), adicione `"use client";` na primeira linha.

### 3. Story (`meu-componente.stories.tsx`)

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import MeuComponente from "./index";

const meta = {
  title: "UI/MeuComponente",
  component: MeuComponente,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MeuComponente>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Exemplo" },
};
```

### 4. Registrar no barrel `ui`

Adicione em `src/components/ui/index.ts`:

```ts
export { default as MeuComponente } from "./meu-componente";
export type { MeuComponenteProps } from "./meu-componente/utils/interface";
```

---

## Build da biblioteca (npm)

```bash
npm run build:lib
```

Pipeline:

```
build:css:src  →  src/styles/tailwind-output.css  (intermediário, gitignored)
tsup           →  dist/ (JS + CSS injetado nos bundles)
build:css      →  dist/index.css  (export /styles)
```

| Arquivo           | Formato                          |
| ----------------- | -------------------------------- |
| `dist/index.js`   | CommonJS (entry raiz)            |
| `dist/index.mjs`  | ES Module (entry raiz)           |
| `dist/index.d.ts` | Tipos TypeScript                 |
| `dist/index.css`  | CSS compilado (export `/styles`) |

A pasta `dist/` é versionada no Git conforme exigência do projeto e também publicada via `prepublishOnly`.

---

## Usando a biblioteca em projetos locais (npm link)

### Passo 1 — Registrar o link (neste repositório)

```bash
npm run build:lib
npm link
```

### Passo 2 — Consumir no projeto de destino

```bash
cd /caminho/do/meu-projeto
npm link @grazziotin/react-components-next
npm install @mui/material @mui/x-data-grid @emotion/react @emotion/styled @mantine/core @mantine/hooks
```

### Passo 3 — Configurar no projeto de destino

```tsx
import "@mantine/core/styles.css";
import { GrazziotinProviders } from "@grazziotin/react-components-next/providers";
import { Card } from "@grazziotin/react-components-next/ui";
```

Os estilos Tailwind da lib são carregados automaticamente ao importar de `/ui` ou do entry raiz.

### Passo 4 — Atualizar após mudanças

```bash
npm run build:lib
```

### Dica: watch mode

```bash
npm run build:lib:watch
```

> O watch recompila JS ao salvar, mas não atualiza CSS automaticamente. Rode `npm run build:lib` completo após mudanças em classes Tailwind.

---

## Publicando no npm

```bash
npm version patch   # ou minor / major
npm login
npm publish
```

O script `prepublishOnly` executa `build:lib` automaticamente.
