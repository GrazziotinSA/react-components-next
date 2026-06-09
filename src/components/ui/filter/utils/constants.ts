import type {
  FilterDrawerField,
  FilterInputProps,
  FilterInputSelectField,
  FilterInputSelectProps,
} from "./interface";
import type {
  InputSelectGridProps,
  InputSelectProps,
} from "../../input-select/utils/interface";

/** Ordem padrão dos campos quando `order` não é informado. */
export const FILTER_DEFAULT_ORDER = 99;

/** Estilo do papel do drawer de filtros. */
export const FILTER_DRAWER_PAPER_SX = {
  ["& .MuiDrawer-paper"]: { borderRadius: "0px 0px 20px 20px" },
};

/**
 * Indica se há campos de filtro para exibir o botão no card.
 * @param inputs - Lista de campos Input.
 * @param inputSelect - Lista de campos InputSelect.
 */
export function hasFilterFields(
  inputs?: FilterInputProps[],
  inputSelect?: FilterInputSelectProps,
): boolean {
  return (inputs?.length ?? 0) > 0 || (inputSelect?.length ?? 0) > 0;
}

/**
 * Verifica se o campo do drawer é um InputSelect.
 * @param field - Campo do drawer.
 */
export function isInputSelect(
  field: FilterDrawerField,
): field is FilterInputSelectField {
  return "options" in field;
}

/**
 * Define um campo {@link InputSelect} no filter preservando a inferência de `T`.
 * Permite montar listas com tipos de opção diferentes sem union nem `as`.
 *
 * @example
 * filterInputSelect({
 *   options: networks,
 *   optionLabel: (v) => v.desRede,
 *   input: { label: "Rede" },
 *   order: 1,
 * })
 */
export function filterInputSelect<T extends object, M extends boolean = false>(
  props: InputSelectProps<T, M> & InputSelectGridProps,
): FilterInputSelectField<M> {
  return props as unknown as FilterInputSelectField<M>;
}

/**
 * Ordena os campos do drawer por `order` (crescente).
 * @param fields - Campos a ordenar.
 */
export function sortFilterFields(
  fields: FilterDrawerField[],
): FilterDrawerField[] {
  return [...fields].sort(
    (a, b) =>
      (a.order ?? FILTER_DEFAULT_ORDER) - (b.order ?? FILTER_DEFAULT_ORDER),
  );
}

/**
 * Mescla inputs e inputSelect e ordena por `order`.
 * @param inputs - Campos Input.
 * @param inputSelect - Campos InputSelect.
 */
export function mergeFilterFields(
  inputs: FilterDrawerField[],
  inputSelect: FilterDrawerField[],
): FilterDrawerField[] {
  return sortFilterFields([...inputs, ...inputSelect]);
}

/**
 * Retorna o número de colunas do grid conforme o breakpoint.
 * @param isMobile - Largura até 640px.
 * @param isTablet - Largura até 1120px.
 */
export function getFilterGridColumns(
  isMobile: boolean,
  isTablet: boolean,
): number {
  if (isMobile) return 1;
  if (isTablet) return 3;
  return 7;
}

const filterConstants = `
Filtro com card de título e drawer para busca com \`Input\` e \`InputSelect\`.

**Importação:**
\`\`\`tsx
import { Filter, filterInputSelect } from "@grazziotin/react-components-next/ui";
\`\`\`

**Uso básico:**
\`\`\`tsx
<Filter
  title="Relatório"
  inputs={[{ label: "Nome", name: "nome", order: 1, xs: 2 }]}
  inputSelect={[
    filterInputSelect({
      options: cidades,
      optionLabel: (c) => c.nome,
      input: { label: "Cidade" },
      order: 2,
      xs: 2,
    }),
    filterInputSelect({
      options: redes,
      optionLabel: (r) => r.desRede,
      input: { label: "Rede" },
      order: 3,
      xs: 2,
    }),
  ]}
  onClear={() => reset()}
  onSubmit={(e) => handleFilter(e)}
/>
\`\`\`

Use \`filterInputSelect\` quando houver vários selects com tipos de opção diferentes — evita union manual e \`as\`.
`;

export default filterConstants;
