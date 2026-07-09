"use client";

import { cn } from "@/functions";
import { withCssVar } from "@/core";
import InputTextField from "./utils/css";
import { useMemo, useState } from "react";
import { useInputMasker } from "./components/maskers";
import { buildSlotProps } from "./components/slot-props";
import { InputProps, InputType } from "./utils/interface";

const CUSTOM_INPUT_TYPES = new Set<InputType>([
  "cpf-cnpj",
  "numeric",
  "price",
  "item-170",
  "item-150",
  "text-only",
  "text-no-number",
]);

function resolveHtmlInputType(
  type: InputProps["type"],
): NonNullable<InputProps["type"]> {
  if (!type || CUSTOM_INPUT_TYPES.has(type)) return "text";
  return type;
}

/**
 * Campo de texto baseado no MUI TextField, com máscaras e tipos customizados do projeto.
 */
const Input = ({
  color,
  onChange,
  isPassword,
  type = "text",
  size = "small",
  ...rest
}: Readonly<InputProps>) => {
  const [showPwd, setShowPwd] = useState(false);
  const isPwd = type === "password";
  const canToggle = isPwd && isPassword;
  const htmlType = resolveHtmlInputType(type);
  const inputType = canToggle && showPwd ? "text" : htmlType;

  const style = useMemo(
    () => withCssVar(rest.style, "--primary-color", color),
    [color, rest.style],
  );

  const slotProps = useMemo(
    () =>
      buildSlotProps({
        color,
        showPwd,
        canToggle,
        setShowPwd,
        slotProps: rest.slotProps,
      }),
    [canToggle, color, showPwd, rest.slotProps],
  );

  const { handleChange } = useInputMasker({ type, onChange });

  return (
    <InputTextField
      {...rest}
      size={size}
      style={style}
      type={inputType}
      slotProps={slotProps}
      onChange={handleChange}
      className={cn("select-none", rest.className)}
    />
  );
};

export default Input;
