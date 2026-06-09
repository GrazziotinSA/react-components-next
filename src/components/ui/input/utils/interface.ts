import { TextFieldProps } from "@mui/material";

export type InputType =
  | TextFieldProps["type"]
  | "cpf-cnpj"
  | "numeric"
  | "price"
  | "text-only"
  | "text-no-number"
  | "item-170"
  | "item-150";

export type InputProps = Omit<TextFieldProps, "color" | "type" | "size"> & {
  /**
   * Cor do input.
   */
  color?: string;

  /**
   * Se true, exibe um botão de toggle para mostrar/ocultar a senha.
   */
  isPassword?: boolean;

  /**
   * Aceita os tipos padrão do TextField e tipos customizados do projeto.
   * Padrão: `"text"`.
   */
  type?: InputType;

  /**
   * Tamanho do campo conforme o MUI TextField.
   * Padrão: `"small"`.
   */
  size?: TextFieldProps["size"];
};
export interface SlotPropsArgs {
  slotProps?: InputProps["slotProps"];
}

export interface PasswordToggleArgs extends SlotPropsArgs {
  canToggle?: boolean;
  color?: string;
  showPwd?: boolean;
  setShowPwd: React.Dispatch<React.SetStateAction<boolean>>;
}

export type BuildSlotPropsArgs = PasswordToggleArgs & {
  type?: InputProps["type"];
};

export type PickSlotPropsArgs = Pick<BuildSlotPropsArgs, "type" | "slotProps">;

export type InputMaskerArgs = {
  type: InputProps["type"];
  onChange?: InputProps["onChange"];
};
