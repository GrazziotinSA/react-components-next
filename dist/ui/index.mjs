import { __spreadProps, __spreadValues, cn, __objRest, formatItem150, formatItem170, removeNonDigits, removeTextOnly, formatPriceBrl, formatPhoneBr, removeDigits, formatCpfCnpj } from '../chunk-BWW3F4R4.mjs';
import { styled, Tabs as Tabs$1, Tab as Tab$1, TextField, Box, useMediaQuery, Drawer, Grid, InputAdornment, IconButton } from '@mui/material';
import { Tooltip, ActionIcon, Button } from '@mantine/core';
import { jsxs, jsx } from 'react/jsx-runtime';
import DialogMui from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { ptBR } from '@mui/x-data-grid/locales';
import { GRID_STRING_COL_DEF, GRID_NUMERIC_COL_DEF, getGridStringOperators, getGridNumericOperators, DataGrid, GridPagination, GridOverlay, GridColumnsPanel, GridFilterPanel, GridColumnMenu } from '@mui/x-data-grid';
import { memo, useState, useMemo, useCallback } from 'react';
import { MdVisibilityOff, MdVisibility } from 'react-icons/md';
import Autocomplete from '@mui/material/Autocomplete';
import { FaFilter } from 'react-icons/fa';

function Card({
  margin,
  onClick,
  title,
  toolTip,
  className,
  borderTitle,
  children,
  borderRadius,
  width = "100%",
  height = "auto",
  titleWidth = "100%",
  justifyContent = "space-between",
  titleColor = "var(--primary-color)",
  icon
}) {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      onClick,
      className: cn(className, "text-sm!"),
      sx: __spreadValues({
        width,
        margin,
        height,
        borderRadius,
        "@media (max-width: 768px)": { width: "100%" },
        boxShadow: "0 0.15rem 0.5rem rgba(0, 0, 0, 0.16)"
      }, onClick && { cursor: "pointer !important" }),
      children: [
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              justifyContent,
              height: "24px",
              color: "white",
              display: "flex",
              width: titleWidth,
              overflow: "hidden",
              padding: "0px 15px",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: borderTitle,
              backgroundColor: titleColor
            },
            children: [
              /* @__PURE__ */ jsx("span", { className: "min-w-0 flex-1 font-semibold! truncate!", children: /* @__PURE__ */ jsx(
                Tooltip,
                {
                  withArrow: true,
                  radius: "md",
                  label: title,
                  arrowSize: 6,
                  position: "top",
                  arrowOffset: 15,
                  disabled: !toolTip,
                  color: titleColor,
                  classNames: { tooltip: "text-xs!" },
                  offset: { mainAxis: 11, crossAxis: -21 },
                  transitionProps: { transition: "fade", duration: 100 },
                  children: /* @__PURE__ */ jsx("span", { className: "block! truncate!", children: title })
                }
              ) }),
              /* @__PURE__ */ jsx("div", { children: icon })
            ]
          }
        ),
        children
      ]
    }
  );
}
var card_default = Card;

// src/components/ui/dialog/utils/constants.ts
var DIALOG_BACKDROP_STYLE = {
  backdropFilter: "blur(4px)",
  backgroundColor: "rgba(0, 0, 0, 0.5)"
};
var DIALOG_PAPER_FONT_SX = {
  fontFamily: "var(--font-family, inherit) !important",
  "& .MuiDialogTitle-root, & .MuiDialogContent-root, & .MuiDialogActions-root, & .MuiTypography-root": {
    fontFamily: "inherit !important"
  }
};
function Dialog({
  open,
  title,
  onClose,
  actions,
  children,
  maxWidth,
  blurBackdrop = false
}) {
  const backdropStyle = blurBackdrop ? DIALOG_BACKDROP_STYLE : {};
  return /* @__PURE__ */ jsxs(
    DialogMui,
    {
      fullWidth: true,
      open,
      onClose,
      maxWidth,
      slotProps: {
        backdrop: { sx: backdropStyle },
        paper: { sx: DIALOG_PAPER_FONT_SX }
      },
      children: [
        title && /* @__PURE__ */ jsx(DialogTitle, { children: /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-black-de", children: title }) }),
        /* @__PURE__ */ jsx(DialogContent, { className: "text-black", children }),
        actions && /* @__PURE__ */ jsx(DialogActions, { children: actions })
      ]
    }
  );
}
var dialog_default = Dialog;
var localeText = __spreadProps(__spreadValues({}, ptBR.components.MuiDataGrid.defaultProps.localeText), {
  noColumnsOverlayLabel: "Nenhuma coluna dispon\xEDvel",
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
  columnMenuUnsort: "Remover ordena\xE7\xE3o",
  columnMenuSortAsc: "Ordenar ASC",
  columnMenuSortDesc: "Ordenar DESC",
  columnMenuFilter: "Filtrar",
  toolbarQuickFilterLabel: "Filtro r\xE1pido",
  toolbarQuickFilterPlaceholder: "Filtrar\u2026",
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
  toolbarFiltersTooltipActive: (count) => count === 1 ? `${count} filtro ativo` : `${count} filtros ativos`,
  toolbarDensity: "Densidade",
  toolbarDensityLabel: "Densidade",
  toolbarDensityCompact: "Compacta",
  toolbarDensityStandard: "Padr\xE3o",
  toolbarDensityComfortable: "Confort\xE1vel",
  filterPanelAddFilter: "Adicionar filtro",
  filterPanelDeleteIconLabel: "Excluir",
  filterPanelOperatorAnd: "E",
  filterPanelOperatorOr: "OU",
  filterPanelColumn: "Colunas",
  filterPanelInputLabel: "Valor",
  filterPanelInputPlaceholder: "Valor do filtro",
  filterOperatorContains: "cont\xE9m",
  filterOperatorEquals: "igual a",
  filterOperatorStartsWith: "come\xE7a com",
  filterOperatorEndsWith: "termina com",
  filterOperatorIs: "\xE9",
  filterOperatorNot: "n\xE3o \xE9",
  filterOperatorAfter: "depois de",
  filterOperatorOnOrAfter: "em ou depois de",
  filterOperatorBefore: "antes de",
  filterOperatorOnOrBefore: "em ou antes de",
  filterOperatorIsEmpty: "est\xE1 vazio",
  filterOperatorIsNotEmpty: "n\xE3o est\xE1 vazio",
  filterOperatorIsAnyOf: "\xE9 qualquer um de",
  footerTotalRows: "Total de linhas:",
  footerRowSelected: (count) => count === 1 ? "1 linha selecionada" : `${count.toLocaleString()} linhas selecionadas`,
  footerTotalVisibleRows: (visibleCount, totalCount) => `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
  paginationRowsPerPage: "Linhas por p\xE1gina:",
  paginationItemAriaLabel: (type) => {
    switch (type) {
      case "first":
        return "Primeira p\xE1gina";
      case "last":
        return "\xDAltima p\xE1gina";
      case "next":
        return "Pr\xF3xima p\xE1gina";
      case "previous":
        return "P\xE1gina anterior";
      default:
        return "";
    }
  },
  noRowsLabel: "Nenhum dado encontrado",
  noResultsOverlayLabel: "Nenhum resultado encontrado",
  checkboxSelectionHeaderName: "Sele\xE7\xE3o de checkbox",
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
  aggregationMenuItemHeader: "Agrega\xE7\xE3o",
  aggregationFunctionLabelSum: "soma",
  aggregationFunctionLabelAvg: "m\xE9dia",
  aggregationFunctionLabelMin: "m\xEDn",
  aggregationFunctionLabelMax: "m\xE1x",
  aggregationFunctionLabelSize: "tamanho",
  paginationDisplayedRows: ({ from, to, count }) => {
    const total = count === -1 ? "mais de " + to : count;
    return `${from}\u2013${to} de ${total}`;
  }
});
var columnPanelSx = {
  padding: 2,
  width: "350px",
  color: "#000000DE"
};
var columnMenuSx = {
  "& .MuiListItemText-primary": {
    fontSize: "14px !important"
  }
};
var filterSx = {
  width: "750px",
  "*": { fontSize: "14px !important" },
  "& .MuiDataGrid-filterFormColumnInput": { width: "230px" },
  "& .MuiDataGrid-filterFormOperatorInput": { width: "230px" }
};
var paginationSx = {
  "& .MuiTablePagination-root": { fontSize: "12px !important" },
  "& .MuiTablePagination-selectLabel": { fontSize: "12px !important" },
  "& .MuiTablePagination-displayedRows": { fontSize: "12px !important" },
  "& .MuiTablePagination-select": { fontSize: "12px !important" },
  "& .MuiTablePagination-toolbar": {
    minHeight: "40px !important",
    padding: "0 8px !important"
  }
};
var tableSx = {
  fontSize: "13px",
  "& .MuiDataGrid-row:nth-of-type(even)": {
    backgroundColor: "#F9FAFB"
  },
  "& .MuiDataGrid-row:nth-of-type(odd)": {
    backgroundColor: "#FFFFFF"
  },
  "& .MuiDataGrid-row.Mui-selected:nth-of-type(even)": {
    backgroundColor: "#F9FAFB !important"
  },
  "& .MuiDataGrid-row.Mui-selected:nth-of-type(odd)": {
    backgroundColor: "#FFFFFF !important"
  },
  "& .MuiDataGrid-row:hover": { backgroundColor: "#F3F4F6 !important" },
  "& .MuiDataGrid-columnHeaderTitleContainer": {
    color: "#FFFFFF",
    justifyContent: "center",
    "& svg": { color: "#FFFFFF" }
  },
  "& .MuiDataGrid-iconButtonContainer .MuiIconButton-root, & .MuiDataGrid-menuIconButton": {
    color: "#FFFFFF"
  },
  "& .MuiDataGrid-iconButtonContainer .MuiIconButton-root:hover, & .MuiDataGrid-menuIconButton:hover": { backgroundColor: "transparent" },
  "& .MuiDataGrid-iconButtonContainer .MuiIconButton-root.Mui-focusVisible, & .MuiDataGrid-menuIconButton.Mui-focusVisible": { backgroundColor: "transparent" },
  "& .MuiDataGrid-columnHeaders": {
    background: "linear-gradient(to right, #00B2A6 0%, #0AAEB2 100%)"
  },
  "& .MuiDataGrid-columnHeader": {
    color: "#FFFFFF",
    fontWeight: "bold",
    backgroundColor: "transparent",
    "& svg": { color: "#FFFFFF" }
  },
  "& .MuiDataGrid-columnHeader:hover": { backgroundColor: "transparent" },
  "& .MuiDataGrid-columnHeader:hover .MuiIconButton-root": {
    backgroundColor: "transparent"
  },
  "& .MuiDataGrid-columnHeader:focus-within": {
    backgroundColor: "transparent"
  },
  "& .MuiDataGrid-columnHeader--sorted": { backgroundColor: "transparent" },
  "& .MuiDataGrid-columnHeader--sorted .MuiIconButton-root": {
    backgroundColor: "transparent"
  },
  "& .MuiDataGrid-sortIcon": { color: "#FFFFFF" },
  "& .MuiDataGrid-sortIcon:hover": { backgroundColor: "transparent" },
  "& .MuiDataGrid-columnHeaderTitle": { fontWeight: "500", color: "#FFFFFF" }
};
var createChange = (item, applyValue) => (index) => ({ target }) => {
  const [start = "", end = ""] = Array.isArray(item.value) ? item.value : [];
  applyValue(__spreadProps(__spreadValues({}, item), {
    value: index === 0 ? [target.value, end] : [start, target.value]
  }));
};
var textBetweenOp = {
  label: "entre",
  value: "between",
  getApplyFilterFn: (filter) => {
    if (!filter.value || !Array.isArray(filter.value)) return null;
    const [start, end] = filter.value;
    if (!start || !end) return null;
    return (value) => {
      const cell = (value == null ? void 0 : value.toString()) || "";
      return cell >= start && cell <= end;
    };
  },
  InputComponent: ({ item, applyValue, focusElementRef }) => {
    const onChange = createChange(item, applyValue);
    return /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          size: "small",
          label: "De",
          variant: "outlined",
          inputRef: focusElementRef,
          value: (item.value || ["", ""])[0] || "",
          onChange: onChange(0),
          placeholder: "Inicial"
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          size: "small",
          label: "At\xE9",
          variant: "outlined",
          value: (item.value || ["", ""])[1] || "",
          onChange: onChange(1),
          placeholder: "Final"
        }
      )
    ] });
  }
};
var numberBetweenOp = {
  label: "entre",
  value: "between",
  getApplyFilterFn: (filter) => {
    if (!filter.value || !Array.isArray(filter.value)) return null;
    const [start, end] = filter.value;
    if (start === "" || end === "" || start == null || end == null) return null;
    return (value) => {
      const number = Number(value);
      return number >= Number(start) && number <= Number(end);
    };
  },
  InputComponent: ({ item, applyValue, focusElementRef }) => {
    const onChange = createChange(item, applyValue);
    return /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          size: "small",
          label: "De",
          type: "number",
          variant: "outlined",
          inputRef: focusElementRef,
          value: (item.value || ["", ""])[0] || "",
          onChange: onChange(0),
          placeholder: "M\xEDnimo"
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          size: "small",
          label: "At\xE9",
          type: "number",
          variant: "outlined",
          value: (item.value || ["", ""])[1] || "",
          onChange: onChange(1),
          placeholder: "M\xE1ximo"
        }
      )
    ] });
  }
};
var getTextOps = () => {
  return [...getGridStringOperators(), textBetweenOp];
};
var getNumberOps = () => {
  return [...getGridNumericOperators(), numberBetweenOp];
};
GRID_STRING_COL_DEF.filterOperators = getTextOps();
GRID_NUMERIC_COL_DEF.filterOperators = getNumberOps();
function CustomColumnsPanel(props) {
  return /* @__PURE__ */ jsx(GridColumnsPanel, __spreadProps(__spreadValues({}, props), { sx: columnPanelSx }));
}
function CustomColumnMenu(props) {
  return /* @__PURE__ */ jsx(Box, { sx: columnMenuSx, children: /* @__PURE__ */ jsx(GridColumnMenu, __spreadValues({}, props)) });
}
function CustomFilterPanel(props) {
  return /* @__PURE__ */ jsx(GridFilterPanel, __spreadProps(__spreadValues({}, props), { sx: filterSx }));
}
function CustomNoRowsOverlay() {
  return /* @__PURE__ */ jsx(GridOverlay, { children: /* @__PURE__ */ jsx(Box, { sx: { mt: 1 }, children: "Nenhum dado encontrado." }) });
}
function CustomPagination() {
  return /* @__PURE__ */ jsx(Box, { sx: paginationSx, children: /* @__PURE__ */ jsx(GridPagination, {}) });
}
var DataTable = (_a) => {
  var rest = __objRest(_a, []);
  return /* @__PURE__ */ jsx(Box, { sx: { mb: 2, mt: 2, height: "100%" }, children: /* @__PURE__ */ jsx(
    DataGrid,
    __spreadProps(__spreadValues({
      sx: tableSx
    }, rest), {
      className: "min-h-[210px]!",
      localeText,
      disableRowSelectionOnClick: true,
      slotProps: {
        loadingOverlay: {
          variant: "linear-progress",
          noRowsVariant: "skeleton"
        }
      },
      slots: {
        columnMenu: CustomColumnMenu,
        filterPanel: CustomFilterPanel,
        columnsPanel: CustomColumnsPanel,
        noRowsOverlay: CustomNoRowsOverlay,
        pagination: CustomPagination
      }
    })
  ) });
};
var data_table_default = DataTable;
var DEFAULT_TAB_COLOR = "var(--primary-color)";
var DEFAULT_TAB_FONT_FAMILY = "var(--font-family, inherit)";
var Tabs = styled(Tabs$1, {
  shouldForwardProp: (prop) => prop !== "color"
})(({ color = DEFAULT_TAB_COLOR }) => ({
  fontFamily: `${DEFAULT_TAB_FONT_FAMILY} !important`,
  "& .MuiTabs-indicator": { backgroundColor: color }
}));
var Tab = styled(Tab$1, {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "fontFamily"
})(
  ({ color = DEFAULT_TAB_COLOR, fontFamily = DEFAULT_TAB_FONT_FAMILY }) => ({
    fontWeight: "500 !important",
    color: "#000000CC !important",
    fontSize: "14px !important",
    textTransform: "uppercase !important",
    fontFamily: `${fontFamily} !important`,
    "&.Mui-selected": { color: `${color} !important` }
  })
);

// src/core/css-var.ts
function withCssVar(style, name, value) {
  if (value == null || value === "") return style;
  return __spreadProps(__spreadValues({}, style), { [name]: value });
}
var DEFAULT_ACCENT = "var(--primary-color)";
var accent = "var(--primary-color)";
var errorColor = "#D32F2F";
var focusLabel = { color: accent };
var errorLabel = { color: errorColor };
var borderAccent = { borderColor: accent };
var borderError = { borderColor: errorColor };
var underlineAccent = { borderBottomColor: accent };
var underlineError = { borderBottomColor: errorColor };
var disabledText = { color: "#9E9E9E", cursor: "not-allowed" };
var disabledBorder = { borderColor: "#9E9E9E", cursor: "not-allowed" };
var input = {
  color: "#333",
  fontSize: "13px !important",
  fontFamily: "var(--font-poppins) !important"
};
var InputTextField = styled(TextField)({
  fontFamily: "var(--font-poppins) !important",
  "& input": input,
  "& label": input,
  "& label.Mui-focused": focusLabel,
  "& label.Mui-error": errorLabel,
  "& .MuiInput-underline:after": underlineAccent,
  "& .MuiInput-underline.Mui-error:after": underlineError,
  "& .MuiOutlinedInput-root": {
    "& fieldset": borderAccent,
    "&:hover fieldset": borderAccent,
    "&.Mui-disabled fieldset": disabledBorder,
    "&.Mui-focused fieldset": borderAccent,
    "&.Mui-error fieldset": borderError,
    "&.Mui-error:hover fieldset": borderError,
    "&.Mui-error.Mui-focused fieldset": borderError
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "#F9FAFB",
    "&:after": underlineAccent,
    "&:before": underlineAccent,
    "&:hover:before": underlineAccent,
    "&.Mui-error:after": underlineError,
    "&.Mui-error:before": underlineError,
    "&:hover": { backgroundColor: "#F5F5F5" },
    "&.Mui-error:hover:before": underlineError,
    fontFamily: "var(--font-poppins) !important",
    "&.Mui-disabled": __spreadProps(__spreadValues({}, disabledText), { backgroundColor: "#F9FAFB" })
  },
  "& .MuiInputBase-input": __spreadProps(__spreadValues({}, input), { "&.Mui-disabled": disabledText }),
  "& .MuiFormHelperText-root": {
    fontSize: "11px",
    marginLeft: 2,
    fontFamily: "var(--font-poppins) !important"
  },
  "& .MuiFormHelperText-root.Mui-error": { color: errorColor },
  "& .Mui-disabled": disabledText
});
var css_default = memo(InputTextField);
function useInputMasker({ type, onChange }) {
  const formatValue = useCallback(
    (v) => {
      if (!v) return "";
      switch (type) {
        case "cpf-cnpj":
          return formatCpfCnpj(v);
        case "numeric":
          return removeDigits(v);
        case "tel":
          return formatPhoneBr(v);
        case "price":
          return formatPriceBrl(v);
        case "text-only":
          return removeTextOnly(v);
        case "text-no-number":
          return removeNonDigits(v);
        case "item-170":
          return formatItem170(v);
        case "item-150":
          return formatItem150(v);
        default:
          return v;
      }
    },
    [type]
  );
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange == null ? void 0 : onChange(__spreadProps(__spreadValues({}, e), {
      target: __spreadProps(__spreadValues({}, e.target), { value: formatValue(newValue) })
    }));
  };
  return { handleChange };
}
function withPasswordToggle({
  showPwd,
  canToggle,
  slotProps,
  setShowPwd,
  color = DEFAULT_ACCENT
}) {
  if (!canToggle) return slotProps;
  const Icon = showPwd ? MdVisibilityOff : MdVisibility;
  return __spreadProps(__spreadValues({}, slotProps), {
    input: __spreadProps(__spreadValues({}, slotProps == null ? void 0 : slotProps.input), {
      endAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsx(
        IconButton,
        {
          edge: "end",
          size: "small",
          sx: { color },
          onClick: () => setShowPwd((prev) => !prev),
          children: /* @__PURE__ */ jsx(Icon, { size: 20 })
        }
      ) })
    })
  });
}
function buildSlotProps(args) {
  return withPasswordToggle(args);
}
var CUSTOM_INPUT_TYPES = /* @__PURE__ */ new Set([
  "cpf-cnpj",
  "numeric",
  "price",
  "item-170",
  "item-150",
  "text-only",
  "text-no-number"
]);
function resolveHtmlInputType(type) {
  if (!type || CUSTOM_INPUT_TYPES.has(type)) return "text";
  return type;
}
var Input = (_a) => {
  var _b = _a, {
    color,
    onChange,
    isPassword,
    type = "text",
    size = "small"
  } = _b, rest = __objRest(_b, [
    "color",
    "onChange",
    "isPassword",
    "type",
    "size"
  ]);
  const [showPwd, setShowPwd] = useState(false);
  const isPwd = type === "password";
  const canToggle = isPwd && isPassword;
  const htmlType = resolveHtmlInputType(type);
  const inputType = canToggle && showPwd ? "text" : htmlType;
  const style = useMemo(
    () => withCssVar(rest.style, "--primary-color", color),
    [color, rest.style]
  );
  const slotProps = useMemo(
    () => buildSlotProps({
      color,
      showPwd,
      canToggle,
      setShowPwd,
      slotProps: rest.slotProps
    }),
    [canToggle, color, showPwd, rest.slotProps]
  );
  const { handleChange } = useInputMasker({ type, onChange });
  return /* @__PURE__ */ jsx(
    css_default,
    __spreadProps(__spreadValues({}, rest), {
      size,
      style,
      type: inputType,
      slotProps,
      onChange: handleChange,
      className: cn("select-none", rest.className)
    })
  );
};
var input_default = Input;

// src/components/ui/input-select/utils/css.ts
var optionText = {
  fontSize: "13px !important",
  fontFamily: "var(--font-poppins) !important"
};
var selectMui = {
  "& .MuiAutocomplete-option": __spreadProps(__spreadValues({
    padding: "8px 12px"
  }, optionText), {
    lineHeight: "25px !important"
  }),
  "& .MuiAutocomplete-noOptions": optionText,
  "& .MuiAutocomplete-listbox": { padding: "5px" }
};

// src/components/ui/input-select/utils/constants.ts
var locale = {
  noOptionsText: "Nenhum resultado encontrado"
};
function InputSelect(_a) {
  var _b = _a, {
    input: input2,
    multiple,
    onChange,
    optionLabel,
    noOptionsText = locale.noOptionsText
  } = _b, rest = __objRest(_b, [
    "input",
    "multiple",
    "onChange",
    "optionLabel",
    "noOptionsText"
  ]);
  const handleChange = (event, value, reason, details) => {
    onChange == null ? void 0 : onChange(event, value, reason, details);
  };
  return /* @__PURE__ */ jsx(
    Autocomplete,
    __spreadProps(__spreadValues({}, rest), {
      size: "small",
      multiple,
      onChange: handleChange,
      noOptionsText,
      slotProps: { paper: { sx: selectMui } },
      getOptionLabel: (option) => typeof option === "string" ? "" : optionLabel(option),
      isOptionEqualToValue: (option, value) => JSON.stringify(option) === JSON.stringify(value),
      renderInput: (params) => {
        var _a2;
        return /* @__PURE__ */ jsx(input_default, __spreadProps(__spreadValues(__spreadValues({}, params), input2), { size: (_a2 = input2 == null ? void 0 : input2.size) != null ? _a2 : "small" }));
      }
    })
  );
}
var input_select_default = InputSelect;
var FilterCard = ({
  title,
  setOpen,
  renderFilter
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "h-15 flex items-center w-full bg-white mb-2 rounded-md shadow-[0_2px_6px_-1px_rgba(0,0,0,.16),0_6px_18px_-1px_rgba(0,0,0,.06)]", children: [
    /* @__PURE__ */ jsx("div", { className: "h-full w-2 bg-(--primary-color) rounded-tl-md rounded-bl-md" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex justify-between items-center p-3", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-medium text-lg whitespace-nowrap text-ellipsis overflow-hidden ml-1 text-black/80", children: title }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: renderFilter && /* @__PURE__ */ jsx(
        Tooltip,
        {
          withArrow: true,
          arrowSize: 4,
          color: "#00b2a6",
          arrowOffset: 20,
          label: "Ver filtros",
          className: "text-xs!",
          transitionProps: { transition: "pop", duration: 300 },
          children: /* @__PURE__ */ jsx("span", { className: "flex items-center", children: /* @__PURE__ */ jsx(
            ActionIcon,
            {
              size: 40,
              radius: "md",
              "aria-label": "Ver filtros",
              color: "var(--primary-color)",
              onClick: () => setOpen(true),
              children: /* @__PURE__ */ jsx(FaFilter, { className: "h-5 w-5 text-white" })
            }
          ) })
        }
      ) })
    ] })
  ] });
};
var card_default2 = FilterCard;

// src/components/ui/filter/utils/constants.ts
var FILTER_DEFAULT_ORDER = 99;
var FILTER_DRAWER_PAPER_SX = {
  ["& .MuiDrawer-paper"]: { borderRadius: "0px 0px 20px 20px" }
};
function hasFilterFields(inputs, inputSelect) {
  var _a, _b;
  return ((_a = inputs == null ? void 0 : inputs.length) != null ? _a : 0) > 0 || ((_b = inputSelect == null ? void 0 : inputSelect.length) != null ? _b : 0) > 0;
}
function isInputSelect(field) {
  return "options" in field;
}
function filterInputSelect(props) {
  return props;
}
function sortFilterFields(fields) {
  return [...fields].sort(
    (a, b) => {
      var _a, _b;
      return ((_a = a.order) != null ? _a : FILTER_DEFAULT_ORDER) - ((_b = b.order) != null ? _b : FILTER_DEFAULT_ORDER);
    }
  );
}
function mergeFilterFields(inputs, inputSelect) {
  return sortFilterFields([...inputs, ...inputSelect]);
}
function getFilterGridColumns(isMobile, isTablet) {
  if (isMobile) return 1;
  if (isTablet) return 3;
  return 7;
}
var FilterDrawer = ({
  open,
  setOpen,
  onClear,
  onSubmit,
  inputs = [],
  inputSelect = []
}) => {
  const m640 = useMediaQuery("(max-width:640px)");
  const m1120 = useMediaQuery("(max-width:1120px)");
  const allInputs = mergeFilterFields(inputs, inputSelect);
  const renderField = (field, index) => {
    var _a, _b, _c;
    if (isInputSelect(field)) {
      if (field.multiple) {
        return /* @__PURE__ */ jsx(Grid, { size: (_a = field.xs) != null ? _a : 1, children: /* @__PURE__ */ jsx(
          input_select_default,
          __spreadProps(__spreadValues({}, field), {
            id: `inputSM${index}`,
            fullWidth: true
          })
        ) }, `inputSelect-${index}`);
      }
      return /* @__PURE__ */ jsx(Grid, { size: (_b = field.xs) != null ? _b : 1, children: /* @__PURE__ */ jsx(
        input_select_default,
        __spreadProps(__spreadValues({}, field), {
          id: `inputSM${index}`,
          fullWidth: true
        })
      ) }, `inputSelect-${index}`);
    }
    return /* @__PURE__ */ jsx(Grid, { size: (_c = field.xs) != null ? _c : 1, children: /* @__PURE__ */ jsx(input_default, __spreadProps(__spreadValues({}, field), { fullWidth: true })) }, `input-${index}`);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!onSubmit) return;
    onSubmit(event);
    setOpen(false);
  };
  return /* @__PURE__ */ jsx(
    Drawer,
    {
      open,
      anchor: "top",
      onClose: () => setOpen(false),
      sx: FILTER_DRAWER_PAPER_SX,
      children: /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "flex w-full select-none flex-col py-4 pl-5",
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-system-900", children: "Filtros" }),
            /* @__PURE__ */ jsx("p", { className: "pb-5 pt-1 text-sm text-black/80", children: "Para que possamos apresentar dados espec\xEDficos, por favor, preencha os campos abaixo." }),
            /* @__PURE__ */ jsx(
              Grid,
              {
                container: true,
                rowSpacing: 2,
                className: "pr-5",
                columnSpacing: 1,
                columns: getFilterGridColumns(Boolean(m640), Boolean(m1120)),
                children: allInputs.map((field, index) => renderField(field, index))
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-end space-x-4 pr-4 pt-4", children: [
              onClear && /* @__PURE__ */ jsx(
                Button,
                {
                  radius: "sm",
                  color: "#253E56",
                  variant: "outline",
                  onClick: onClear,
                  size: "xs",
                  children: "LIMPAR FILTROS"
                }
              ),
              onSubmit && /* @__PURE__ */ jsx(
                Button,
                {
                  size: "xs",
                  radius: "sm",
                  type: "submit",
                  variant: "filled",
                  color: "var(--primary-color)",
                  children: "PESQUISAR"
                }
              )
            ] })
          ]
        }
      )
    }
  );
};
var filter_default = FilterDrawer;
var Filter = ({
  title,
  inputs,
  onClear,
  onSubmit,
  inputSelect
}) => {
  const [open, setOpen] = useState(false);
  const hasFields = hasFilterFields(inputs, inputSelect);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(card_default2, { title, setOpen, renderFilter: hasFields }),
    /* @__PURE__ */ jsx(
      filter_default,
      {
        open,
        inputs,
        setOpen,
        onClear,
        onSubmit,
        inputSelect
      }
    )
  ] });
};
var filter_default2 = Filter;

export { card_default as Card, data_table_default as DataTable, dialog_default as Dialog, filter_default2 as Filter, input_default as Input, input_select_default as InputSelect, Tab, Tabs, filterInputSelect };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map