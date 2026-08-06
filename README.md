# Grazziotin React Components Library

Biblioteca de componentes React reutilizáveis para o projeto Grazziotin, construída com TypeScript, Tailwind CSS, Material UI e Mantine.

## Instalação

```bash
npm install @grazziotin/react-components-next
```

Instale também as peer dependencies necessárias:

```bash
npm install @mui/material @mui/x-data-grid @emotion/react @emotion/styled @mantine/core @mantine/hooks
```

### Requisitos

- React `>= 18`
- Material UI (`@mui/material`, `@mui/x-data-grid`) e Emotion
- Mantine (`@mantine/core`, `@mantine/hooks`)
- `GrazziotinProviders` (ou `ThemeProvider` do MUI + `MantineProvider`) envolvendo a aplicação

### Configuração no projeto consumidor

Configure os providers na raiz da aplicação. Os estilos Tailwind da biblioteca são carregados automaticamente ao importar componentes de `/ui` ou do entry point raiz.

Carregue também a fonte **Poppins** e os estilos do Mantine:

```tsx
import "@mantine/core/styles.css";

import { GrazziotinProviders } from "@grazziotin/react-components-next/providers";
```

No HTML ou CSS global do projeto consumidor:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
/>
```

```css
:root {
  --primary-color: #00b2a6;
  --font-family: "Poppins", sans-serif;
}
```

```tsx
export function AppProviders({ children }: { children: React.ReactNode }) {
  return <GrazziotinProviders>{children}</GrazziotinProviders>;
}
```

> **Atenção:** a biblioteca referencia `Poppins` via variáveis CSS, mas **não embute o arquivo da fonte** — o projeto consumidor precisa carregá-la. Os estilos do Mantine (`@mantine/core/styles.css`) também são obrigatórios.

## Componentes disponíveis

| Componente    | Descrição                                                       |
| ------------- | --------------------------------------------------------------- |
| `Card`        | Container com cabeçalho colorido, título, ícone e tooltip       |
| `Dialog`      | Modal baseado no MUI com título, conteúdo e ações opcionais     |
| `DataTable`   | Tabela de dados com MUI DataGrid, filtros e textos em português |
| `Tab`/`Tabs`  | Abas estilizadas com indicador e tipografia customizáveis       |
| `Input`       | Campo de texto com máscaras e estilização MUI                   |
| `InputSelect` | Select com grid de opções                                       |
| `Filter`      | Drawer de filtros com campos configuráveis                      |

## Acessibilidade

| Export   | Descrição                             |
| -------- | ------------------------------------- |
| `Say`    | Componente de leitura de tela (toast) |
| `useSay` | Hook para disparar feedback por voz   |

## Funções utilitárias

| Função               | Descrição                                        |
| -------------------- | ------------------------------------------------ |
| `cn`                 | Mescla classes CSS com `clsx` e `tailwind-merge` |
| `nvl`                | Retorna valor padrão quando `null`/`undefined`   |
| `formatCpfCnpj`      | Formata CPF ou CNPJ                              |
| `formatPhoneBr`      | Formata telefone brasileiro                      |
| `formatPriceBrl`     | Formata valor monetário em BRL                   |
| `formatItem170`      | Formata item 170                                 |
| `formatItem150`      | Formata item 150                                 |
| `shortName`          | Extrai o primeiro e o último nome                |
| `removeDigits`       | Mantém apenas dígitos                            |
| `removeNonDigits`    | Remove todos os dígitos                          |
| `removeTextOnly`     | Mantém apenas letras                             |
| `formatElapsedSince` | Formata tempo decorrido como `d HH:MM:SS`        |

## Hooks

| Hook     | Descrição                                             |
| -------- | ----------------------------------------------------- |
| `useNow` | Retorna o timestamp atual atualizado a cada intervalo |

## Uso

```tsx
import {
  Card,
  DataTable,
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

| Import                                            | Conteúdo                                                                      |
| ------------------------------------------------- | ----------------------------------------------------------------------------- |
| `@grazziotin/react-components-next`               | Componentes, funções, hooks, acessibilidade e providers                       |
| `@grazziotin/react-components-next/ui`            | Apenas componentes de UI                                                      |
| `@grazziotin/react-components-next/functions`     | Apenas funções utilitárias                                                    |
| `@grazziotin/react-components-next/hooks`         | Hooks (`useNow`)                                                              |
| `@grazziotin/react-components-next/accessibility` | Componentes de acessibilidade (`Say`, `useSay`)                               |
| `@grazziotin/react-components-next/providers`     | `GrazziotinProviders`                                                         |
| `@grazziotin/react-components-next/styles`        | CSS compilado da biblioteca (opcional — já incluído ao importar `/ui` ou `.`) |

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

### shortName

```tsx
shortName("flavia roseane alves de souza"); // "flavia souza"
shortName("João Silva"); // "João Silva"
shortName("Maria"); // "Maria"
```

### removeDigits / removeNonDigits / removeTextOnly

```tsx
removeDigits("(11) 98765-4321"); // "11987654321"
removeNonDigits("ABC-12.34"); // "ABC-."
removeTextOnly("João 123!"); // "João"
```

### formatElapsedSince

```tsx
formatElapsedSince(
  "2026-08-06T10:00:00.000Z",
  Date.parse("2026-08-06T11:01:05.000Z"),
);
// "0 01:01:05"
```

### useNow

```tsx
import { useNow } from "@grazziotin/react-components-next/hooks";
import { formatElapsedSince } from "@grazziotin/react-components-next/functions";

const now = useNow();
formatElapsedSince(order.createdAt, now);
```

## Licença

MIT
