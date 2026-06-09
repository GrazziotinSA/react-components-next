"use client";

import Input from "../input";
import Autocomplete, {
  type AutocompleteValue,
  type AutocompleteChangeReason,
  type AutocompleteChangeDetails,
} from "@mui/material/Autocomplete";
import { selectMui } from "./utils/css";
import type { InputSelectProps } from "./utils/interface";

/**
 * Componente InputSelect que encapsula o Autocomplete do Material-UI com o {@link Input} do projeto.
 *
 * Permite a seleção de uma ou mais opções com base nos parâmetros fornecidos.
 * É configurável via props do Autocomplete do MUI, com campo de entrada customizável
 * através de `input` (mesmas props do {@link Input}: cor, label, máscaras, etc.).
 *
 * @template T - Tipo dos itens de opções exibidos no seletor.
 * @template M - Define se o seletor permite múltiplas seleções. Padrão: `false` (seletor único).
 *
 * @param props - Propriedades do componente. Detalhes em {@link InputSelectProps}.
 * @param props.multiple - Se `true`, permite selecionar várias opções. Padrão: `false`.
 * @param props.optionLabel - Função que recebe uma opção e retorna o rótulo exibido.
 * @param props.onChange - Callback ao alterar o valor (evento, valor, motivo e detalhes).
 * @param props.input - Props repassadas ao {@link Input} interno (label, color, type, etc.).
 * @param props.options - Lista de opções disponíveis no seletor.
 * @param props.rest - Demais props do Autocomplete do MUI (exceto `renderInput` e `onChange`).
 *
 * @returns Autocomplete com campo de entrada personalizado.
 *
 * @example
 * ```tsx
 * const options = [
 *   { id: 1, label: "Opção 1" },
 *   { id: 2, label: "Opção 2" },
 * ];
 *
 * <InputSelect
 *   options={options}
 *   optionLabel={(option) => option.label}
 *   input={{ label: "Selecione", color: "#00b2a6" }}
 *   onChange={(_event, value) => console.log("Valor selecionado:", value)}
 *   multiple
 * />
 * ```
 */
function InputSelect<T, M extends boolean = false>({
  multiple,
  optionLabel,
  onChange,
  input,
  ...rest
}: Readonly<InputSelectProps<T, M>>) {
  const handleChange = (
    event: React.SyntheticEvent,
    value: AutocompleteValue<T, M, false, false>,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<T>,
  ) => {
    onChange?.(event, value, reason, details);
  };

  return (
    <Autocomplete
      {...rest}
      size="small"
      multiple={multiple}
      onChange={handleChange}
      slotProps={{ paper: { sx: selectMui } }}
      getOptionLabel={(option) =>
        typeof option === "string" ? "" : optionLabel(option)
      }
      isOptionEqualToValue={(option, value) =>
        JSON.stringify(option) === JSON.stringify(value)
      }
      renderInput={(params) => (
        <Input {...params} {...input} size={input?.size ?? "small"} />
      )}
    />
  );
}

export default InputSelect;
