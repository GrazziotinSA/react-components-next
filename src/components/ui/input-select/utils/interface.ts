import type {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteProps,
} from "@mui/material";
import type { InputProps } from "../../input/utils/interface";

/**
 * Propriedades de layout em grid para o campo do {@link InputSelect}.
 */
export interface InputSelectGridProps {
  /**
   * Ordem de exibição do input.
   */
  order?: number;

  /**
   * Tamanho do grid para o input.
   */
  xs?: number;
}

/**
 * Propriedades do componente {@link InputSelect}.
 *
 * Estende o Autocomplete do MUI, substituindo `renderInput` pelo {@link Input} do projeto
 * e tipando `onChange` conforme seleção única ou múltipla.
 *
 * @template T - Tipo dos itens de opções no seletor.
 * @template M - Valor booleano que define se a seleção pode ser múltipla.
 */
export interface InputSelectProps<T, M extends boolean = false> extends Omit<
  AutocompleteProps<T, M, boolean | undefined, boolean | undefined>,
  "renderInput" | "onChange"
> {
  /**
   * Propriedades repassadas ao {@link Input} interno.
   * Aceita label, color, type, máscaras e demais props do TextField do projeto.
   */
  input?: InputProps & InputSelectGridProps;

  /**
   * Opções exibidas no seletor.
   */
  options: T[];

  /**
   * Retorna a string exibida como rótulo de uma opção.
   * @param data - Item da lista `options`.
   */
  optionLabel: (data: T) => string;

  /**
   * Define se o seletor permite múltiplas seleções.
   * Padrão: `false`.
   */
  multiple?: M;

  /**
   * Callback disparado quando o valor do seletor é alterado.
   * @param event - Evento que disparou a alteração.
   * @param value - Novo valor (`T | null` ou `T[]` quando `multiple`).
   * @param reason - Motivo da alteração (MUI `AutocompleteChangeReason`).
   * @param details - Detalhes adicionais da alteração (opcional).
   */
  onChange?: (
    event: React.SyntheticEvent,
    value: M extends true ? T[] : T | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<T>,
  ) => void;
}
