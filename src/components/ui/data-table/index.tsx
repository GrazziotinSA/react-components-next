import {
  localeText,
  tableSx,
  filterSx,
  columnMenuSx,
  paginationSx,
  columnPanelSx,
} from "./utils/constants";
import {
  DataGrid,
  GridOverlay,
  GridColumnMenu,
  GridPagination,
  GridFilterPanel,
  GridColumnsPanel,
  GridColumnMenuProps,
  GRID_STRING_COL_DEF,
  GRID_NUMERIC_COL_DEF,
  GridColumnsPanelProps,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";
import type { ComponentProps } from "react";
import type { DataTableProps } from "./utils/interface";
import { getNumberOps, getTextOps } from "./utils/between-filter";
/**
 * Configuração global dos operadores de filtro do DataGrid.
 *
 * Sobrescreve as definições padrão do MUI DataGrid para incluir automaticamente
 * o operador "entre" em todas as colunas do tipo string e number.
 *
 * Isso significa que TODAS as tabelas do projeto que usam o componente DataTable
 * terão o operador "entre" disponível sem necessidade de configuração adicional.
 */
GRID_STRING_COL_DEF.filterOperators = getTextOps();
GRID_NUMERIC_COL_DEF.filterOperators = getNumberOps();

function CustomColumnsPanel(props: Readonly<GridColumnsPanelProps>) {
  return <GridColumnsPanel {...props} sx={columnPanelSx} />;
}

function CustomColumnMenu(props: Readonly<GridColumnMenuProps>) {
  return (
    <Box sx={columnMenuSx}>
      <GridColumnMenu {...props} />
    </Box>
  );
}

function CustomFilterPanel(
  props: Readonly<ComponentProps<typeof GridFilterPanel>>,
) {
  return <GridFilterPanel {...props} sx={filterSx} />;
}

function CustomNoRowsOverlay() {
  return (
    <GridOverlay>
      <Box sx={{ mt: 1 }}>Nenhum dado encontrado.</Box>
    </GridOverlay>
  );
}

function CustomPagination() {
  return (
    <Box sx={paginationSx}>
      <GridPagination />
    </Box>
  );
}

/**
 * Componente DataTable personalizado baseado no MUI DataGrid.
 *
 * Fornece uma tabela de dados com estilização customizada, filtros avançados,
 * paginação, ordenação e gerenciamento de colunas.
 *
 * Recursos incluídos:
 * - Operador de filtro "entre" automático para colunas string e number
 * - Painel de filtros customizado
 * - Painel de gerenciamento de colunas
 * - Paginação estilizada
 * - Overlay personalizado para "sem dados"
 * - Textos em português brasileiro
 *
 * @param props - Todas as props do MUI DataGrid são suportadas. Ver {@link DataTableProps}.
 *
 * @example
 * <DataTable
 *   rows={dados}
 *   columns={colunas}
 *   loading={carregando}
 *   pageSizeOptions={[10, 20, 50]}
 * />
 */
const DataTable = ({ ...rest }: DataTableProps) => {
  return (
    <Box sx={{ mb: 2, mt: 2, height: "100%" }}>
      <DataGrid
        sx={tableSx}
        {...rest}
        className="min-h-[210px]!"
        localeText={localeText}
        disableRowSelectionOnClick
        slotProps={{
          loadingOverlay: {
            variant: "linear-progress",
            noRowsVariant: "skeleton",
          },
        }}
        slots={{
          columnMenu: CustomColumnMenu,
          filterPanel: CustomFilterPanel,
          columnsPanel: CustomColumnsPanel,
          noRowsOverlay: CustomNoRowsOverlay,
          pagination: CustomPagination,
        }}
      />
    </Box>
  );
};

export default DataTable;
