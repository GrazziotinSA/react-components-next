import {
  GridFilterItem,
  GridFilterOperator,
  getGridNumericOperators,
  getGridStringOperators,
} from "@mui/x-data-grid";
import { Box, TextField } from "@mui/material";
import type { ChangeEvent } from "react";

const createChange =
  (item: GridFilterItem, applyValue: (item: GridFilterItem) => void) =>
  (index: number) =>
  ({ target }: ChangeEvent<HTMLInputElement>) => {
    const [start = "", end = ""] = Array.isArray(item.value) ? item.value : [];

    applyValue({
      ...item,
      value: index === 0 ? [target.value, end] : [start, target.value],
    });
  };

export const textBetweenOp: GridFilterOperator = {
  label: "entre",
  value: "between",
  getApplyFilterFn: (filter: GridFilterItem) => {
    if (!filter.value || !Array.isArray(filter.value)) return null;

    const [start, end] = filter.value;
    if (!start || !end) return null;

    return (value) => {
      const cell = value?.toString() || "";
      return cell >= start && cell <= end;
    };
  },
  InputComponent: ({ item, applyValue, focusElementRef }) => {
    const onChange = createChange(item, applyValue);

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TextField
          size="small"
          label="De"
          variant="outlined"
          inputRef={focusElementRef}
          value={(item.value || ["", ""])[0] || ""}
          onChange={onChange(0)}
          placeholder="Inicial"
        />
        <TextField
          size="small"
          label="Até"
          variant="outlined"
          value={(item.value || ["", ""])[1] || ""}
          onChange={onChange(1)}
          placeholder="Final"
        />
      </Box>
    );
  },
};

export const numberBetweenOp: GridFilterOperator = {
  label: "entre",
  value: "between",
  getApplyFilterFn: (filter: GridFilterItem) => {
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

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TextField
          size="small"
          label="De"
          type="number"
          variant="outlined"
          inputRef={focusElementRef}
          value={(item.value || ["", ""])[0] || ""}
          onChange={onChange(0)}
          placeholder="Mínimo"
        />
        <TextField
          size="small"
          label="Até"
          type="number"
          variant="outlined"
          value={(item.value || ["", ""])[1] || ""}
          onChange={onChange(1)}
          placeholder="Máximo"
        />
      </Box>
    );
  },
};

export const getTextOps = (): GridFilterOperator[] => {
  return [...getGridStringOperators(), textBetweenOp];
};

export const getNumberOps = (): GridFilterOperator[] => {
  return [...getGridNumericOperators(), numberBetweenOp];
};
