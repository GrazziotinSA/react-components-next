import type { SetImmerFieldParams } from "./utils/interface";

/**
 * Atualiza uma chave específica de um estado gerenciado com `useImmer`.
 *
 * @param params.setData - Função setter retornada por `useImmer`
 * @param params.key - Chave do objeto a ser atualizada
 * @param params.value - Novo valor para a chave
 *
 * @example
 * ```tsx
 * const [data, setData] = useImmer({ name: "", age: 0 });
 *
 * setImmerField({ setData, key: "name", value: "João" });
 * ```
 */
export function setImmerField<T, K extends keyof T>({
  setData,
  key,
  value,
}: SetImmerFieldParams<T, K>): void {
  setData((draft) => {
    (draft as T)[key] = value;
  });
}
