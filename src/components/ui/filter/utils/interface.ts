import type {
  InputSelectGridProps,
  InputSelectProps,
} from "../../input-select/utils/interface";
import type { InputProps } from "../../input/utils/interface";
import type { Dispatch, SetStateAction, SubmitEventHandler } from "react";

/**
 * Propriedades do componente {@link FilterCard}.
 */
export interface FilterCardProps {
  /** Título do cartão de filtros. */
  title?: string;
  /** Indica se o botão de filtros deve ser exibido. */
  renderFilter: boolean;
  /** Controla a abertura do drawer de filtros. */
  setOpen: Dispatch<SetStateAction<boolean>>;
}

/**
 * {@link Input} no grid do drawer de filtros.
 * Inclui `order` e `xs` para posicionamento no grid responsivo.
 */
export type FilterInputProps = InputProps & InputSelectGridProps;

/**
 * {@link InputSelect} tipado no grid do drawer.
 * Use {@link filterInputSelect} para inferir `T` por campo sem casts.
 */
export type FilterInputSelectItem<
  T,
  M extends boolean = false,
> = InputSelectProps<T, M> & InputSelectGridProps;

/**
 * Campo {@link InputSelect} no drawer com tipos heterogêneos.
 * Cada item pode ter `options` de um tipo diferente na mesma lista.
 */
export type FilterInputSelectField<M extends boolean = false> =
  InputSelectProps<unknown, M> & InputSelectGridProps;

/**
 * Lista de campos {@link InputSelect} no drawer.
 * Cada item pode ter tipo de opção e seleção única/múltipla diferentes.
 */
export type FilterInputSelectProps = (
  | FilterInputSelectField<false>
  | FilterInputSelectField<true>
)[];

/** Campo do drawer: {@link Input} ou {@link InputSelect}. */
export type FilterDrawerField =
  | FilterInputProps
  | FilterInputSelectField<false>
  | FilterInputSelectField<true>;

/**
 * Propriedades do componente {@link FilterDrawer}.
 */
export interface FilterDrawerProps {
  /** Drawer aberto. */
  open?: boolean;
  /** Controla a abertura do drawer. */
  setOpen: Dispatch<SetStateAction<boolean>>;
  /** Campos {@link Input}. */
  inputs?: FilterInputProps[];
  /** Campos {@link InputSelect}. */
  inputSelect?: FilterInputSelectProps;
  /** Callback ao limpar filtros. */
  onClear?: () => void;
  /** Callback ao submeter o formulário de filtros. */
  onSubmit?: SubmitEventHandler<HTMLFormElement>;
}

/**
 * Propriedades do componente {@link Filter}.
 *
 * Combina título do card com campos e callbacks do drawer.
 */
export interface FilterProps
  extends
    Omit<FilterCardProps, "renderFilter" | "setOpen">,
    Omit<FilterDrawerProps, "open" | "setOpen"> {}
