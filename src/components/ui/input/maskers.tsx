import {
  formatCpfCnpj,
  formatItem150,
  formatItem170,
  formatPhoneBr,
  formatPriceBrl,
} from "@/functions";
import { useCallback } from "react";
import { removeDigits } from "@/core";
import { InputMaskerArgs, InputType } from "./utils/interface";
import { removeNonDigits, removeTextOnly } from "@/core/remove-digits";

export function useInputMasker({ type, onChange }: InputMaskerArgs) {
  /**
   * Formata o valor de entrada de acordo com o tipo definido (ex.: CPF, telefone, moeda).
   *
   * @param {string} value - O valor a ser formatado.
   * @returns {string} O valor formatado.
   */
  const formatValue = useCallback(
    (v: InputType): string => {
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
    [type],
  );

  /**
   * Manipula a alteração do valor de entrada, aplicando a formatação correta.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de alteração da entrada.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    onChange?.({
      ...e,
      target: { ...e.target, value: formatValue(newValue) },
    });
  };

  return { handleChange };
}
