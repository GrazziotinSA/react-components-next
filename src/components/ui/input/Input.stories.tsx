import Input from "./index";
import { useState } from "react";
import { action } from "storybook/actions";
import inputConstants from "./utils/constants";
import type { InputProps } from "./utils/interface";
import type { Meta, StoryObj } from "@storybook/react-vite";

function InputControlado(args: Readonly<InputProps>) {
  const [value, setValue] = useState("");

  return (
    <div className="w-80">
      <Input
        {...args}
        value={value}
        onChange={(e) => {
          action("onChange")(e);
          setValue(e.target.value);
        }}
      />
      {value && (
        <p className="mt-2 text-xs text-gray-500">
          Valor: <code className="font-mono">{JSON.stringify(value)}</code>
        </p>
      )}
    </div>
  );
}

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: inputConstants } },
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    type: {
      control: "select",
      options: [
        "text",
        "password",
        "email",
        "tel",
        "cpf-cnpj",
        "numeric",
        "price",
        "item-170",
        "item-150",
        "text-only",
        "text-no-number",
      ],
    },
    size: { control: "select", options: ["small", "medium"] },
    color: { control: "color" },
    isPassword: { control: "boolean" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    helperText: { control: "text" },
    onChange: { action: "onChange" },
  },
  args: {
    label: "Campo de texto",
    placeholder: "Digite aqui...",
    type: "text",
    size: "small",
    color: "#00b2a6",
    onChange: action("onChange"),
  },
  render: (args) => <InputControlado {...args} />,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Padrao: Story = {};

export const CpfCnpj: Story = {
  args: {
    label: "CPF / CNPJ",
    type: "cpf-cnpj",
    placeholder: "000.000.000-00",
  },
};

export const Telefone: Story = {
  args: {
    label: "Telefone",
    type: "tel",
    placeholder: "(00) 00000-0000",
  },
};

export const Preco: Story = {
  args: {
    label: "Valor (R$)",
    type: "price",
    placeholder: "R$ 0,00",
  },
};

export const CodigoItem170: Story = {
  args: {
    label: "Item 170",
    type: "item-170",
    placeholder: "00.00.00.00.0.000",
  },
};

export const CodigoItem150: Story = {
  args: {
    label: "Item 150",
    type: "item-150",
    placeholder: "00.00.00.0.000",
  },
};

export const Numerico: Story = {
  args: {
    label: "Apenas números",
    type: "numeric",
    placeholder: "123",
  },
};

export const SomenteTexto: Story = {
  args: {
    label: "Somente letras",
    type: "text-only",
    placeholder: "Abc",
  },
};

export const SemNumeros: Story = {
  args: {
    label: "Sem números",
    type: "text-no-number",
    placeholder: "Texto",
  },
};

export const Senha: Story = {
  args: {
    label: "Senha",
    type: "password",
    isPassword: true,
    placeholder: "••••••••",
  },
};

export const ComErro: Story = {
  args: {
    label: "E-mail",
    type: "email",
    error: true,
    helperText: "E-mail inválido",
    defaultValue: "email-invalido",
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const Desabilitado: Story = {
  args: {
    label: "Campo desabilitado",
    disabled: true,
    defaultValue: "Não editável",
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const Livre: Story = {
  args: {
    label: "Playground",
    type: "text",
  },
};
