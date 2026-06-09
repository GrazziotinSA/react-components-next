import {
  isInputSelect,
  mergeFilterFields,
  getFilterGridColumns,
  FILTER_DRAWER_PAPER_SX,
} from "../utils/constants";
import type {
  FilterDrawerField,
  FilterDrawerProps,
  FilterInputSelectField,
} from "../utils/interface";
import Input from "../../input";
import { Button } from "@mantine/core";
import InputSelect from "../../input-select";
import { Drawer, Grid, useMediaQuery } from "@mui/material";
import type { ReactElement, SubmitEventHandler } from "react";

/**
 * Drawer com campos de filtro ({@link Input} e {@link InputSelect}).
 *
 * Mescla `inputs` e `inputSelect`, ordena por `order` e renderiza em grid
 * responsivo (1 coluna no mobile, 3 no tablet, 7 no desktop).
 *
 * @param props - Propriedades do componente. Detalhes em {@link FilterDrawerProps}.
 * @param props.open - Drawer aberto.
 * @param props.setOpen - Controla a abertura do drawer.
 * @param props.inputs - Campos {@link Input}.
 * @param props.inputSelect - Campos {@link InputSelect}.
 * @param props.onClear - Callback ao limpar filtros.
 * @param props.onSubmit - Callback ao submeter o formulário de filtros.
 */
const FilterDrawer = ({
  open,
  setOpen,
  onClear,
  onSubmit,
  inputs = [],
  inputSelect = [],
}: FilterDrawerProps): ReactElement => {
  const m640 = useMediaQuery("(max-width:640px)");
  const m1120 = useMediaQuery("(max-width:1120px)");
  const allInputs = mergeFilterFields(inputs, inputSelect);

  const renderField = (field: FilterDrawerField, index: number) => {
    if (isInputSelect(field)) {
      if (field.multiple) {
        return (
          <Grid size={field.xs ?? 1} key={`inputSelect-${index}`}>
            <InputSelect<unknown, true>
              {...field}
              id={`inputSM${index}`}
              fullWidth
            />
          </Grid>
        );
      }

      return (
        <Grid size={field.xs ?? 1} key={`inputSelect-${index}`}>
          <InputSelect<unknown, false>
            {...(field as FilterInputSelectField<false>)}
            id={`inputSM${index}`}
            fullWidth
          />
        </Grid>
      );
    }

    return (
      <Grid size={field.xs ?? 1} key={`input-${index}`}>
        <Input {...field} fullWidth />
      </Grid>
    );
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!onSubmit) return;
    onSubmit(event);
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      anchor="top"
      onClose={() => setOpen(false)}
      sx={FILTER_DRAWER_PAPER_SX}
    >
      <form
        onSubmit={handleSubmit}
        className="flex w-full select-none flex-col py-4 pl-5"
      >
        <p className="text-lg font-medium text-system-900">Filtros</p>
        <p className="pb-5 pt-1 text-sm text-black/80">
          Para que possamos apresentar dados específicos, por favor, preencha os
          campos abaixo.
        </p>
        <Grid
          container
          rowSpacing={2}
          className="pr-5"
          columnSpacing={1}
          columns={getFilterGridColumns(Boolean(m640), Boolean(m1120))}
        >
          {allInputs.map((field, index) => renderField(field, index))}
        </Grid>
        <div className="flex justify-end space-x-4 pr-4 pt-4">
          {onClear && (
            <Button
              radius="sm"
              color="#253E56"
              variant="outline"
              onClick={onClear}
              size="xs"
            >
              LIMPAR FILTROS
            </Button>
          )}
          {onSubmit && (
            <Button
              size="xs"
              radius="sm"
              type="submit"
              variant="filled"
              color="var(--primary-color)"
            >
              PESQUISAR
            </Button>
          )}
        </div>
      </form>
    </Drawer>
  );
};

export default FilterDrawer;
