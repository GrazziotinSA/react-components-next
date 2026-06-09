import { useState } from "react";
import InputSelect from "./index";
import { action } from "storybook/actions";
import inputSelectConstants from "./utils/constants";
import type { InputSelectProps } from "./utils/interface";
import type { InputProps } from "../input/utils/interface";
import type { Meta, StoryObj } from "@storybook/react-vite";

type Opcao = { id: number; label: string };

const opcoes: Opcao[] = [
  { id: 1, label: "São Paulo" },
  { id: 2, label: "Rio de Janeiro" },
  { id: 3, label: "Belo Horizonte" },
  { id: 4, label: "Curitiba" },
  { id: 5, label: "Porto Alegre" },
];

function InputSelectAmostra(
  args: Readonly<
    InputProps & Pick<InputSelectProps<Opcao, boolean>, "disabled" | "multiple">
  >,
) {
  const { disabled, multiple, ...input } = args;
  const [single, setSingle] = useState<Opcao | null>(null);
  const [multi, setMulti] = useState<Opcao[]>([]);

  if (multiple) {
    return (
      <div className="w-80">
        <InputSelect<Opcao, true>
          multiple
          options={opcoes}
          value={multi}
          disabled={disabled}
          optionLabel={(option) => option.label}
          input={input}
          onChange={(event, value, reason) => {
            action("onChange")(event, value, reason);
            setMulti(value ?? []);
          }}
        />
        {multi.length > 0 && (
          <p className="mt-2 text-xs text-gray-500">
            Selecionados:{" "}
            <code className="font-mono">
              {multi.map((item) => item.label).join(", ")}
            </code>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="w-80">
      <InputSelect
        options={opcoes}
        value={single}
        disabled={disabled}
        optionLabel={(option) => option.label}
        input={input}
        onChange={(event, value, reason) => {
          action("onChange")(event, value, reason);
          setSingle(value);
        }}
      />
      {single && (
        <p className="mt-2 text-xs text-gray-500">
          Selecionado: <code className="font-mono">{single.label}</code>
        </p>
      )}
    </div>
  );
}

const meta = {
  title: "UI/InputSelect",
  component: InputSelectAmostra,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: inputSelectConstants } },
  },
  argTypes: {
    label: { control: "text", description: "Label do Input interno." },
    color: { control: "color", description: "Cor de destaque do Input." },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    multiple: { control: "boolean", description: "Seleção múltipla." },
    error: { control: "boolean" },
    helperText: { control: "text" },
    onChange: { action: "onChange" },
  },
  args: {
    label: "Cidade",
    color: "#00b2a6",
    placeholder: "Buscar cidade...",
    disabled: false,
    multiple: false,
    error: false,
    helperText: "Selecione uma cidade válida",
    onChange: action("onChange"),
  },
} satisfies Meta<typeof InputSelectAmostra>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {};

export const Multiplo: Story = {
  args: {
    multiple: true,
    label: "Cidades",
    placeholder: "Selecione uma ou mais...",
  },
};

export const Desabilitado: Story = {
  args: { disabled: true, placeholder: "Campo desabilitado" },
};

export const ComErro: Story = {
  args: { error: true, helperText: "Campo obrigatório" },
};

export const Livre: Story = {
  args: { label: "Playground", multiple: false },
};
