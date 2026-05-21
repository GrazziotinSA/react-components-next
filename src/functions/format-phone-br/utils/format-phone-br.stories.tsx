import type { Meta, StoryObj } from "@storybook/react-vite";
import { formatPhoneBr } from "../format-phone-br";
import type { FormatPhoneBrExampleProps } from "./interface";
import formatPhoneBrConstants from "./constants";

const meta: Meta = {
  title: "Functions/format-phone-br",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: formatPhoneBrConstants } },
  },
};

export default meta;
type Story = StoryObj;

function Example({ label, result }: FormatPhoneBrExampleProps) {
  return (
    <div className="flex flex-col gap-2">
      <code className="rounded bg-gray-100 px-2 py-1 text-sm">{label}</code>
      <p className="text-sm text-gray-700">
        Resultado:{" "}
        <strong className="font-mono text-gray-900">
          {JSON.stringify(result)}
        </strong>
      </p>
    </div>
  );
}

export const Vazio: Story = {
  render: () => <Example label={"formatPhoneBr()"} result={formatPhoneBr()} />,
};

export const DddParcial: Story = {
  render: () => (
    <Example label={'formatPhoneBr("11")'} result={formatPhoneBr("11")} />
  ),
};

export const ParcialAte6: Story = {
  render: () => (
    <Example
      label={'formatPhoneBr("119876")'}
      result={formatPhoneBr("119876")}
    />
  ),
};

export const Fixo10Digitos: Story = {
  render: () => (
    <Example
      label={'formatPhoneBr("1133334444")'}
      result={formatPhoneBr("1133334444")}
    />
  ),
};

export const Celular11Digitos: Story = {
  render: () => (
    <Example
      label={'formatPhoneBr("11987654321")'}
      result={formatPhoneBr("11987654321")}
    />
  ),
};

export const JaFormatado: Story = {
  render: () => (
    <Example
      label={'formatPhoneBr("(11) 98765-4321")'}
      result={formatPhoneBr("(11) 98765-4321")}
    />
  ),
};
