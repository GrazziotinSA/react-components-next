import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import ButtonQuantity from "./index";
import type { ButtonQuantityProps } from "./utils/interface";
import buttonQuantityConstants from "./utils/constants";

function ControlledQuantity(
  args: Readonly<Omit<ButtonQuantityProps, "quantity" | "onChangeQuantity">>,
) {
  const [quantity, setQuantity] = useState(1);

  return (
    <ButtonQuantity
      {...args}
      quantity={quantity}
      onChangeQuantity={(value) => {
        action("onChangeQuantity")(value);
        setQuantity(value);
      }}
    />
  );
}

const meta = {
  title: "UI/ButtonQuantity",
  component: ButtonQuantity,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: buttonQuantityConstants } },
  },
  argTypes: {
    quantity: { control: "number" },
    minValue: { control: "number" },
    maxValue: { control: "number" },
    step: { control: "number" },
    disabled: { control: "boolean" },
    model: { control: "select", options: ["outline", "soft"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    radius: { control: "text" },
    onDecrease: { action: "onDecrease" },
    onIncrease: { action: "onIncrease" },
    onChangeQuantity: { action: "onChangeQuantity" },
  },
} satisfies Meta<typeof ButtonQuantity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  render: (args) => <ControlledQuantity {...args} />,
  args: {
    quantity: 1,
    model: "outline",
    maxValue: 99,
  },
};

export const Soft: Story = {
  render: (args) => <ControlledQuantity {...args} />,
  args: {
    quantity: 3,
    model: "soft",
    radius: 10,
    maxValue: 20,
  },
};

export const Tamanhos: Story = {
  args: {
    quantity: 1,
    maxValue: 99,
  },
  render: () => (
    <div className="flex flex-col items-start gap-3">
      <ControlledQuantity size="sm" maxValue={99} />
      <ControlledQuantity size="md" maxValue={99} />
      <ControlledQuantity size="lg" maxValue={99} />
    </div>
  ),
};

export const FundoBranco: Story = {
  render: (args) => <ControlledQuantity {...args} />,
  args: { quantity: 2, maxValue: 10, color: "white" },
};

export const Disabled: Story = {
  args: {
    quantity: 5,
    disabled: true,
    onDecrease: action("onDecrease"),
    onIncrease: action("onIncrease"),
  },
};

export const IconesCustomizados: Story = {
  render: (args) => <ControlledQuantity {...args} />,
  args: {
    quantity: 2,
    maxValue: 10,
    decreaseIcon: <FaAngleDown size={12} className="text-red-600" />,
    increaseIcon: <FaAngleUp size={12} className="text-green-600" />,
  },
};
