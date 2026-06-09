# Grazziotin React Components Library

Biblioteca de componentes React reutilizáveis para o projeto Grazziotin, construída com TypeScript, Tailwind CSS, Material UI e Mantine.

## Instalação

```bash
npm install @grazziotin/react-components-next
```

### Requisitos

- React `>= 18`
- Tailwind CSS v4 configurado no projeto consumidor
- `ThemeProvider` do MUI e `MantineProvider` do Mantine envolvendo a aplicação

### Configuração no projeto consumidor

Importe os estilos da biblioteca e configure as variáveis CSS do tema:

```tsx
import "@grazziotin/react-components-next/styles";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  typography: { fontFamily: "var(--font-family, inherit)" },
});

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MantineProvider>{children}</MantineProvider>
    </ThemeProvider>
  );
}
```

```css
:root {
  --primary-color: #00b2a6;
  --font-family: "Poppins", sans-serif;
}
```

> **Atenção:** vários componentes usam classes do Tailwind CSS e dependem do MUI/Mantine. Certifique-se de que o Tailwind esteja configurado e os providers estejam na raiz da aplicação.

## Componentes disponíveis


| Componente   | Descrição                                                       |
| ------------ | --------------------------------------------------------------- |
| `Card`       | Container com cabeçalho colorido, título, ícone e tooltip       |
| `Dialog`     | Modal baseado no MUI com título, conteúdo e ações opcionais     |
| `DataTable`  | Tabela de dados com MUI DataGrid, filtros e textos em português |
| `Tab`/`Tabs` | Abas estilizadas com indicador e tipografia customizáveis       |


## Funções utilitárias


| Função          | Descrição                                        |
| --------------- | ------------------------------------------------ |
| `cn`            | Mescla classes CSS com `clsx` e `tailwind-merge` |
| `nvl`           | Retorna valor padrão quando `null`/`undefined`   |
| `formatCpfCnpj` | Formata CPF ou CNPJ                              |
| `formatPhoneBr` | Formata telefone brasileiro                      |


## Uso

```tsx
import {
  Card,
  Dialog,
  DataTable,
  Tab,
  Tabs,
  cn,
  formatCpfCnpj,
} from "@grazziotin/react-components-next";
import type { GridColDef } from "@mui/x-data-grid";

const colunas: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "nome", headerName: "Nome", flex: 1 },
  { field: "documento", headerName: "CPF/CNPJ", width: 180 },
];

const linhas = [
  { id: 1, nome: "Ana Silva", documento: formatCpfCnpj("12345678901") },
];

export function Example() {
  return (
    <Card title="Colaboradores" toolTip className={cn("max-w-3xl")}>
      <DataTable rows={linhas} columns={colunas} pageSizeOptions={[10, 20]} />
    </Card>
  );
}
```

## Entry points

A biblioteca expõe múltiplos pontos de entrada:


| Import                                        | Conteúdo                                 |
| --------------------------------------------- | ---------------------------------------- |
| `@grazziotin/react-components-next`           | Componentes e funções (export principal) |
| `@grazziotin/react-components-next/ui`        | Apenas componentes de UI                 |
| `@grazziotin/react-components-next/functions` | Apenas funções utilitárias               |
| `@grazziotin/react-components-next/styles`    | CSS compilado da biblioteca              |


## Componentes

### Card

```tsx
<Card
  title="Título do card"
  toolTip={false}
  width="100%"
  height="auto"
  titleColor="var(--primary-color)"
  borderRadius="10px"
  borderTitle="10px 10px 0 0"
  icon={<Icon />}
  onClick={() => {}}
  className="text-sm"
>
  Conteúdo do card
</Card>
```

### Dialog

```tsx
<Dialog
  open={open}
  title="Confirmar exclusão"
  onClose={() => setOpen(false)}
  maxWidth="sm"
  blurBackdrop={false}
  actions={<button onClick={() => setOpen(false)}>OK</button>}
>
  Deseja realmente excluir este item?
</Dialog>
```

### DataTable

Wrapper sobre o MUI `DataGrid` com estilização, textos em português e operador de filtro "entre" automático para colunas `string` e `number`. Aceita todas as props do `DataGrid`.

```tsx
<DataTable
  rows={dados}
  columns={colunas}
  loading={carregando}
  pageSizeOptions={[10, 20, 50]}
/>
```

### Tab / Tabs

```tsx
const [value, setValue] = useState(0);

<Tabs
  value={value}
  onChange={(_, newValue) => setValue(newValue)}
  color="var(--primary-color)"
>
  <Tab label="Geral" />
  <Tab label="Detalhes" />
</Tabs>;
```

## Funções

### cn

```tsx
cn("px-4 py-2", condicao && "bg-teal-500", "px-6");
```

### nvl

```tsx
nvl(valor, "padrão"); // retorna "padrão" se valor for null/undefined
```

### formatCpfCnpj

```tsx
formatCpfCnpj("12345678901"); // "123.456.789-01"
formatCpfCnpj("12345678000199"); // "12.345.678/0001-99"
```

### formatPhoneBr

```tsx
formatPhoneBr("11987654321"); // "(11) 98765-4321"
formatPhoneBr("1133334444"); // "(11) 3333-4444"
```

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Storybook (visualização e documentação dos componentes)
npm run storybook

# Build estático do Storybook
npm run build-storybook

# Build da biblioteca para npm
npm run build:lib

# Verificar tipos TypeScript
npm run type-check

# Lint
npm run lint
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
├── app/                        # Next.js App Router (página inicial mínima)
│   ├── globals.css             # Variáveis CSS e tema
│   ├── layout.tsx              # Providers MUI + Mantine
│   └── page.tsx
├── components/
│   ├── index.ts
│   └── ui/
│       ├── card/
│       ├── dialog/
│       ├── data-table/
│       └── tab/
├── core/                       # Utilitários internos
├── functions/
│   ├── cn/
│   ├── nvl/
│   ├── format-cpf-cnpj/
│   └── format-phone-br/
├── providers/
├── styles/
│   └── index.css               # Entrada do Tailwind para o build CSS
└── index.ts                    # Entrypoint principal da biblioteca
```

## Licença

MIT