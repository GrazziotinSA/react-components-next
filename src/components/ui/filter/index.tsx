"use client";

import { useState } from "react";
import type { ReactElement } from "react";
import FilterCard from "./components/card";
import FilterDrawer from "./components/filter";
import { hasFilterFields } from "./utils/constants";
import type { FilterProps } from "./utils/interface";

/**
 * Filtro com card de título e drawer contendo {@link Input} e {@link InputSelect}.
 *
 * O card exibe o título da página/relatório e um botão para abrir o drawer quando
 * há campos em `inputs` ou `inputSelect`. O drawer renderiza os campos em grid
 * responsivo, com ações de limpar e pesquisar.
 *
 * @param props - Propriedades do componente. Detalhes em {@link FilterProps}.
 * @param props.title - Título exibido no card.
 * @param props.inputs - Campos de texto/máscara ({@link Input}).
 * @param props.inputSelect - Campos de seleção ({@link InputSelect}).
 * @param props.onClear - Callback ao limpar filtros.
 * @param props.onSubmit - Callback ao pesquisar.
 * @returns Elemento React com card e drawer de filtros.
 */
const Filter = ({
  title,
  inputs,
  onClear,
  onSubmit,
  inputSelect,
}: FilterProps): ReactElement => {
  const [open, setOpen] = useState(false);
  const hasFields = hasFilterFields(inputs, inputSelect);

  return (
    <div>
      <FilterCard title={title} setOpen={setOpen} renderFilter={hasFields} />
      <FilterDrawer
        open={open}
        inputs={inputs}
        setOpen={setOpen}
        onClear={onClear}
        onSubmit={onSubmit}
        inputSelect={inputSelect}
      />
    </div>
  );
};

export default Filter;
