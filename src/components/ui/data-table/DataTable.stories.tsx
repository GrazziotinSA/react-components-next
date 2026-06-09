import { Box } from "@mui/material";
import type { GridColDef } from "@mui/x-data-grid";
import type { Meta, StoryObj } from "@storybook/react-vite";
import DataTable from "./index";
import dataTableConstants from "./utils/constants";
import type { DataTableProps } from "./utils/interface";

const colunas: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "nome", headerName: "Nome", flex: 1, minWidth: 140 },
  { field: "departamento", headerName: "Departamento", width: 150 },
  { field: "idade", headerName: "Idade", type: "number", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: ({ value }) => (
      <span
        className={
          value === "Ativo"
            ? "rounded bg-green-100 px-2 py-0.5 text-xs text-green-800"
            : "rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
        }
      >
        {value}
      </span>
    ),
  },
];

const linhas = [
  {
    id: 1,
    nome: "Ana Silva",
    departamento: "Comercial",
    idade: 28,
    status: "Ativo",
  },
  {
    id: 2,
    nome: "Bruno Costa",
    departamento: "TI",
    idade: 34,
    status: "Ativo",
  },
  {
    id: 3,
    nome: "Carla Mendes",
    departamento: "Financeiro",
    idade: 41,
    status: "Inativo",
  },
  {
    id: 4,
    nome: "Diego Alves",
    departamento: "RH",
    idade: 29,
    status: "Ativo",
  },
  {
    id: 5,
    nome: "Elena Rocha",
    departamento: "Comercial",
    idade: 36,
    status: "Ativo",
  },
  {
    id: 6,
    nome: "Felipe Nunes",
    departamento: "TI",
    idade: 31,
    status: "Inativo",
  },
  {
    id: 7,
    nome: "Gabriela Lima",
    departamento: "Marketing",
    idade: 27,
    status: "Ativo",
  },
  {
    id: 8,
    nome: "Henrique Souza",
    departamento: "Financeiro",
    idade: 45,
    status: "Ativo",
  },
];

function DataTableAmostra(props: Readonly<DataTableProps>) {
  return (
    <Box sx={{ width: "100%", height: 420 }}>
      <DataTable {...props} />
    </Box>
  );
}

const meta = {
  title: "UI/DataTable",
  component: DataTableAmostra,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: { description: { component: dataTableConstants } },
  },
  argTypes: {
    rows: { control: false },
    columns: { control: false },
    loading: { control: "boolean" },
    checkboxSelection: { control: "boolean" },
    disableColumnFilter: { control: "boolean" },
    disableColumnMenu: { control: "boolean" },
  },
  args: {
    rows: linhas,
    columns: colunas,
    loading: false,
    checkboxSelection: false,
    pageSizeOptions: [5, 10, 25],
    initialState: { pagination: { paginationModel: { pageSize: 5 } } },
  },
} satisfies Meta<typeof DataTableAmostra>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {};

export const ComSelecao: Story = {
  args: { checkboxSelection: true },
};

export const Carregando: Story = {
  args: { loading: true },
};

export const SemDados: Story = {
  args: { rows: [] },
};

export const SemFiltros: Story = {
  args: { disableColumnFilter: true, disableColumnMenu: true },
};
