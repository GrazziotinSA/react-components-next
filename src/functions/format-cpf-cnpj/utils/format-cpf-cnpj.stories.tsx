import type { Meta, StoryObj } from "@storybook/react-vite";
import { formatCpfCnpj } from "../format-cpf-cnpj";
import type { FormatCpfCnpjExampleProps } from "./interface";
import formatCpfCnpjConstants from "./constants";

const meta: Meta = {
  title: "Functions/format-cpf-cnpj",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: formatCpfCnpjConstants } },
  },
};

export default meta;
type Story = StoryObj;

function Example({ label, result }: FormatCpfCnpjExampleProps) {
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
  render: () => <Example label={"formatCpfCnpj()"} result={formatCpfCnpj()} />,
};

export const CpfParcial: Story = {
  render: () => (
    <Example
      label={'formatCpfCnpj("123456")'}
      result={formatCpfCnpj("123456")}
    />
  ),
};

export const CpfCompleto: Story = {
  render: () => (
    <Example
      label={'formatCpfCnpj("12345678901")'}
      result={formatCpfCnpj("12345678901")}
    />
  ),
};

export const CpfJaFormatado: Story = {
  render: () => (
    <Example
      label={'formatCpfCnpj("123.456.789-01")'}
      result={formatCpfCnpj("123.456.789-01")}
    />
  ),
};

export const CnpjCompleto: Story = {
  render: () => (
    <Example
      label={'formatCpfCnpj("12345678000199")'}
      result={formatCpfCnpj("12345678000199")}
    />
  ),
};

export const CnpjJaFormatado: Story = {
  render: () => (
    <Example
      label={'formatCpfCnpj("12.345.678/0001-99")'}
      result={formatCpfCnpj("12.345.678/0001-99")}
    />
  ),
};
