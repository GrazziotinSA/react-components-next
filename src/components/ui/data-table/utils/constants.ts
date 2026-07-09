import { ptBR } from "@mui/x-data-grid/locales";
import { GridLocaleText } from "@mui/x-data-grid";
import { createTheme, SxProps, Theme } from "@mui/material";

const tableFont =
  "var(--font-family, var(--font-poppins, Poppins, sans-serif))";

export const localeText: Partial<GridLocaleText> = {
  ...ptBR.components.MuiDataGrid.defaultProps.localeText,
  noColumnsOverlayLabel: "Nenhuma coluna disponível",
  noColumnsOverlayManageColumns: "Gerenciar colunas",

  columnsManagementSearchTitle: "Buscar coluna",
  columnsManagementNoColumns: "Nenhuma coluna para mostrar",
  columnsManagementShowHideAllText: "Mostrar/Ocultar todas",
  columnsManagementReset: "Redefinir",
  columnsManagementDeleteIconLabel: "Excluir",

  columnMenuManageColumns: "Gerenciar colunas",
  columnMenuShowColumns: "Mostrar colunas",
  columnMenuLabel: "Menu da coluna",
  columnMenuHideColumn: "Ocultar",
  columnMenuUnsort: "Remover ordenação",
  columnMenuSortAsc: "Ordenar ASC",
  columnMenuSortDesc: "Ordenar DESC",
  columnMenuFilter: "Filtrar",

  toolbarQuickFilterLabel: "Filtro rápido",
  toolbarQuickFilterPlaceholder: "Filtrar…",
  toolbarQuickFilterDeleteIconLabel: "Limpar filtro",
  toolbarExport: "Exportar",
  toolbarExportLabel: "Exportar",
  toolbarExportCSV: "Baixar como CSV",
  toolbarExportPrint: "Imprimir",
  toolbarColumns: "Colunas",
  toolbarColumnsLabel: "Selecionar colunas",
  toolbarFilters: "Filtros",
  toolbarFiltersLabel: "Mostrar filtros",
  toolbarFiltersTooltipHide: "Ocultar filtros",
  toolbarFiltersTooltipShow: "Mostrar filtros",
  toolbarFiltersTooltipActive: (count) =>
    count === 1 ? `${count} filtro ativo` : `${count} filtros ativos`,
  toolbarDensity: "Densidade",
  toolbarDensityLabel: "Densidade",
  toolbarDensityCompact: "Compacta",
  toolbarDensityStandard: "Padrão",
  toolbarDensityComfortable: "Confortável",

  filterPanelAddFilter: "Adicionar filtro",
  filterPanelDeleteIconLabel: "Excluir",
  filterPanelOperatorAnd: "E",
  filterPanelOperatorOr: "OU",
  filterPanelColumn: "Colunas",
  filterPanelInputLabel: "Valor",
  filterPanelInputPlaceholder: "Valor do filtro",

  filterOperatorContains: "contém",
  filterOperatorEquals: "igual a",
  filterOperatorStartsWith: "começa com",
  filterOperatorEndsWith: "termina com",
  filterOperatorIs: "é",
  filterOperatorNot: "não é",
  filterOperatorAfter: "depois de",
  filterOperatorOnOrAfter: "em ou depois de",
  filterOperatorBefore: "antes de",
  filterOperatorOnOrBefore: "em ou antes de",
  filterOperatorIsEmpty: "está vazio",
  filterOperatorIsNotEmpty: "não está vazio",
  filterOperatorIsAnyOf: "é qualquer um de",

  footerTotalRows: "Total de linhas:",
  footerRowSelected: (count) =>
    count === 1
      ? "1 linha selecionada"
      : `${count.toLocaleString()} linhas selecionadas`,
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,

  paginationRowsPerPage: "Linhas por página:",
  paginationItemAriaLabel: (type) => {
    switch (type) {
      case "first":
        return "Primeira página";
      case "last":
        return "Última página";
      case "next":
        return "Próxima página";
      case "previous":
        return "Página anterior";
      default:
        return "";
    }
  },

  noRowsLabel: "Nenhum dado encontrado",
  noResultsOverlayLabel: "Nenhum resultado encontrado",

  checkboxSelectionHeaderName: "Seleção de checkbox",
  checkboxSelectionSelectAllRows: "Selecionar todas as linhas",
  checkboxSelectionUnselectAllRows: "Desmarcar todas as linhas",
  checkboxSelectionSelectRow: "Selecionar linha",
  checkboxSelectionUnselectRow: "Desmarcar linha",

  columnHeaderSortIconLabel: "Ordenar",

  groupingColumnHeaderName: "Grupo",
  groupColumn: (name) => `Agrupar por ${name}`,
  unGroupColumn: (name) => `Parar de agrupar por ${name}`,

  detailPanelToggle: "Alternar painel de detalhes",
  expandDetailPanel: "Expandir",
  collapseDetailPanel: "Recolher",

  treeDataGroupingHeaderName: "Grupo",
  treeDataExpand: "ver filhos",
  treeDataCollapse: "ocultar filhos",

  aggregationMenuItemHeader: "Agregação",
  aggregationFunctionLabelSum: "soma",
  aggregationFunctionLabelAvg: "média",
  aggregationFunctionLabelMin: "mín",
  aggregationFunctionLabelMax: "máx",
  aggregationFunctionLabelSize: "tamanho",

  paginationDisplayedRows: ({ from, to, count }) => {
    const total = count === -1 ? "mais de " + to : count;
    return `${from}–${to} de ${total}`;
  },
};

export const columnPanelSx: SxProps<Theme> = {
  padding: 2,
  width: "350px",
  color: "#000000DE",
  "*": { fontFamily: `${tableFont} !important` },
};

export const columnMenuSx: SxProps<Theme> = {
  "*": { fontFamily: `${tableFont} !important` },
  "& .MuiListItemText-primary": {
    fontSize: "14px !important",
  },
};

export const filterSx: SxProps<Theme> = {
  width: "750px",
  "*": {
    fontSize: "14px !important",
    fontFamily: `${tableFont} !important`,
  },
  "& .MuiDataGrid-filterFormColumnInput": { width: "230px" },
  "& .MuiDataGrid-filterFormOperatorInput": { width: "230px" },
};

export const filterTheme = createTheme({
  typography: { fontFamily: tableFont },
  components: {
    MuiList: {
      styleOverrides: {
        root: { fontFamily: tableFont },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: { fontFamily: tableFont },
      },
    },
  },
});

export const paginationSx: SxProps<Theme> = {
  "& .MuiTablePagination-root": {
    fontSize: "12px !important",
    fontFamily: `${tableFont} !important`,
  },
  "& .MuiTablePagination-selectLabel": {
    fontSize: "12px !important",
    fontFamily: `${tableFont} !important`,
  },
  "& .MuiTablePagination-displayedRows": {
    fontSize: "12px !important",
    fontFamily: `${tableFont} !important`,
  },
  "& .MuiTablePagination-select": {
    fontSize: "12px !important",
    fontFamily: `${tableFont} !important`,
  },
  "& .MuiTablePagination-toolbar": {
    minHeight: "40px !important",
    padding: "0 8px !important",
  },
};

export const tableSx: SxProps<Theme> = {
  fontSize: "13px",
  fontFamily: `${tableFont} !important`,
  "& *": {
    fontFamily: `${tableFont} !important`,
  },
  "& .MuiDataGrid-row:nth-of-type(even)": {
    backgroundColor: "#F9FAFB",
  },
  "& .MuiDataGrid-row:nth-of-type(odd)": {
    backgroundColor: "#FFFFFF",
  },
  "& .MuiDataGrid-row.Mui-selected:nth-of-type(even)": {
    backgroundColor: "#F9FAFB !important",
  },
  "& .MuiDataGrid-row.Mui-selected:nth-of-type(odd)": {
    backgroundColor: "#FFFFFF !important",
  },
  "& .MuiDataGrid-row:hover": { backgroundColor: "#F3F4F6 !important" },
  "& .MuiDataGrid-columnHeaderTitleContainer": {
    color: "#FFFFFF",
    justifyContent: "center",
    "& svg": { color: "#FFFFFF" },
  },
  "& .MuiDataGrid-iconButtonContainer .MuiIconButton-root, & .MuiDataGrid-menuIconButton":
    {
      color: "#FFFFFF",
    },
  "& .MuiDataGrid-iconButtonContainer .MuiIconButton-root:hover, & .MuiDataGrid-menuIconButton:hover":
    { backgroundColor: "transparent" },
  "& .MuiDataGrid-iconButtonContainer .MuiIconButton-root.Mui-focusVisible, & .MuiDataGrid-menuIconButton.Mui-focusVisible":
    { backgroundColor: "transparent" },
  "& .MuiDataGrid-columnHeaders": {
    background: "linear-gradient(to right, #00B2A6 0%, #0AAEB2 100%)",
  },
  "& .MuiDataGrid-columnHeader": {
    color: "#FFFFFF",
    fontWeight: "bold",
    backgroundColor: "transparent",
    "& svg": { color: "#FFFFFF" },
  },
  "& .MuiDataGrid-columnHeader:hover": { backgroundColor: "transparent" },
  "& .MuiDataGrid-columnHeader:hover .MuiIconButton-root": {
    backgroundColor: "transparent",
  },
  "& .MuiDataGrid-columnHeader:focus-within": {
    backgroundColor: "transparent",
  },
  "& .MuiDataGrid-columnHeader--sorted": { backgroundColor: "transparent" },
  "& .MuiDataGrid-columnHeader--sorted .MuiIconButton-root": {
    backgroundColor: "transparent",
  },
  "& .MuiDataGrid-sortIcon": { color: "#FFFFFF" },
  "& .MuiDataGrid-sortIcon:hover": { backgroundColor: "transparent" },
  "& .MuiDataGrid-columnHeaderTitle": { fontWeight: "500", color: "#FFFFFF" },
};

const dataTableConstants = `
Tabela de dados baseada no MUI \`DataGrid\`, com estilização Grazziotin, textos em
português e operador de filtro **entre** automático para colunas string e number.

**Importação:**
\`\`\`tsx
import { DataTable } from "@grazziotin/react-components-next/ui";
import type { DataTableProps } from "@grazziotin/react-components-next/ui";
\`\`\`

**Uso básico:**
\`\`\`tsx
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "nome", headerName: "Nome", flex: 1 },
  { field: "idade", headerName: "Idade", type: "number", width: 110 },
];

const rows = [
  { id: 1, nome: "João", idade: 28 },
  { id: 2, nome: "Maria", idade: 34 },
];

<DataTable
  rows={rows}
  columns={columns}
  pageSizeOptions={[5, 10, 25]}
  initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
/>
\`\`\`

**Recursos incluídos:**
- Filtros, ordenação e paginação
- Painel de gerenciamento de colunas
- Operador "entre" em colunas texto e numéricas
- Overlay "Nenhum dado encontrado" em português
`;

export default dataTableConstants;
