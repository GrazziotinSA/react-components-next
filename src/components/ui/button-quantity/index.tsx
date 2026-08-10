"use client";

import { useId, useState } from "react";
import { Button, Input } from "@mantine/core";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { cn, nvl, removeDigits } from "@/functions";
import type { ButtonQuantityProps } from "./utils/interface";
import {
  ALLOWED_CONTROL_KEYS,
  ACTION_BUTTON_DISABLED_STYLE,
  ACTION_BUTTON_STYLE,
  GROUP_DISABLED_STYLE,
  GROUP_SECTION_STYLE,
  GROUP_STYLES,
  INPUT_STYLES,
  SIZE_STYLES,
} from "./utils/constants";

function clamp(value: number, minValue: number, maxValue?: number) {
  const lower = Math.max(minValue, value);
  if (!Number.isFinite(maxValue)) return lower;
  return Math.min(lower, Number(maxValue));
}

/**
 * Controle de quantidade com botões de diminuir/aumentar e input numérico.
 *
 * @param props - Propriedades do componente. Detalhes em {@link ButtonQuantityProps}.
 *
 * @example
 * ```tsx
 * <ButtonQuantity
 *   quantity={qty}
 *   maxValue={10}
 *   onChangeQuantity={setQty}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <ButtonQuantity
 *   model="soft"
 *   radius={10}
 *   quantity={qty}
 *   onDecrease={() => setQty((v) => v - 1)}
 *   onIncrease={() => setQty((v) => v + 1)}
 * />
 * ```
 */
function ButtonQuantity({
  quantity,
  minValue = 0,
  maxValue,
  step = 1,
  disabled,
  model = "outline",
  size = "md",
  radius = 80,
  height,
  buttonWidth,
  inputWidth,
  className,
  decreaseIcon,
  increaseIcon,
  color = "gray.0",
  sectionBg,
  decreaseLabel = "Diminuir quantidade",
  increaseLabel = "Aumentar quantidade",
  stopPropagation = true,
  name = "button-quantity-input",
  id,
  onDecrease,
  onIncrease,
  onChangeQuantity,
}: Readonly<ButtonQuantityProps>) {
  const generatedId = useId();
  const inputId = id ?? `button-quantity-${generatedId}`;
  const sizeTokens = SIZE_STYLES[size];
  const resolvedHeight = nvl(height, sizeTokens.height);
  const resolvedButtonWidth = nvl(buttonWidth, sizeTokens.buttonWidth);
  const resolvedInputWidth = nvl(inputWidth, sizeTokens.inputWidth);
  const [draft, setDraft] = useState(String(quantity));
  const [prevQuantity, setPrevQuantity] = useState(quantity);
  const disabledStyle = disabled
    ? ACTION_BUTTON_DISABLED_STYLE
    : ACTION_BUTTON_STYLE;

  if (quantity !== prevQuantity) {
    setPrevQuantity(quantity);
    setDraft(String(quantity));
  }

  const maybeStopPropagation = (e: React.SyntheticEvent) => {
    if (stopPropagation) e.stopPropagation();
  };

  const handleDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    maybeStopPropagation(e);
    if (onDecrease) {
      onDecrease();
      return;
    }
    if (!onChangeQuantity) return;
    const next = clamp(quantity - step, minValue, maxValue);
    if (next !== quantity) onChangeQuantity(next);
  };

  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    maybeStopPropagation(e);
    if (onIncrease) {
      onIncrease();
      return;
    }
    if (!onChangeQuantity) return;
    const next = clamp(quantity + step, minValue, maxValue);
    if (next !== quantity) onChangeQuantity(next);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = removeDigits(e.currentTarget.value);
    if (!sanitized) {
      setDraft("");
      return;
    }

    const numeric = Number(sanitized);
    setDraft(String(clamp(numeric, minValue, maxValue)));
  };

  const handleInputPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDraft(removeDigits(e.clipboardData.getData("text")));
  };

  const commitDraft = () => {
    if (!onChangeQuantity) return;
    const numeric = Number(removeDigits(draft));
    if (!Number.isFinite(numeric)) {
      setDraft(String(quantity));
      return;
    }

    const bounded = clamp(numeric, minValue, maxValue);
    setDraft(String(bounded));
    if (bounded !== quantity) onChangeQuantity(bounded);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      commitDraft();
      return;
    }

    if (ALLOWED_CONTROL_KEYS.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  };

  const inputStyles = {
    ...INPUT_STYLES,
    input: {
      ...INPUT_STYLES.input,
      height: resolvedHeight,
      fontSize: sizeTokens.fontSize,
    },
  };

  return (
    <Button.Group
      className={cn(className)}
      style={{
        ...GROUP_STYLES[model],
        borderRadius: radius,
        ...(disabled ? GROUP_DISABLED_STYLE : null),
      }}
    >
      <Button
        px={0}
        size="xs"
        h={resolvedHeight}
        color={color}
        w={resolvedButtonWidth}
        disabled={disabled}
        style={disabledStyle}
        onClick={handleDecrease}
        aria-label={decreaseLabel}
      >
        {decreaseIcon ?? (
          <FaMinus size={sizeTokens.iconSize} className="text-red-600" />
        )}
      </Button>
      <Button.GroupSection
        p={0}
        h={resolvedHeight}
        w={resolvedInputWidth}
        variant="default"
        bg={nvl(sectionBg, color)}
        style={GROUP_SECTION_STYLE}
      >
        <Input
          type="text"
          value={draft}
          pattern="[0-9]*"
          variant="unstyled"
          inputMode="numeric"
          disabled={disabled}
          onBlur={commitDraft}
          styles={inputStyles}
          onClick={maybeStopPropagation}
          onPaste={handleInputPaste}
          name={name}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          id={inputId}
        />
      </Button.GroupSection>
      <Button
        px={0}
        size="xs"
        h={resolvedHeight}
        color={color}
        w={resolvedButtonWidth}
        disabled={disabled}
        style={disabledStyle}
        onClick={handleIncrease}
        aria-label={increaseLabel}
      >
        {increaseIcon ?? (
          <FaPlus size={sizeTokens.iconSize} className="text-green-600" />
        )}
      </Button>
    </Button.Group>
  );
}

export default ButtonQuantity;
