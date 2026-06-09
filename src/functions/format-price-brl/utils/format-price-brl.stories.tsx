import formatPriceBrlConstants from "./constants";
import { formatPriceBrl } from "../format-price-brl";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { FormatPriceBrlExampleProps } from "./interface";

const meta: Meta = {
  title: "Functions/format-price-brl",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: formatPriceBrlConstants } },
  },
};

export default meta;
type Story = StoryObj;

function Example({ label, result }: FormatPriceBrlExampleProps) {
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
  render: () => (
    <Example label={"formatPriceBrl()"} result={formatPriceBrl()} />
  ),
};

export const Zero: Story = {
  render: () => (
    <Example label={"formatPriceBrl(0)"} result={formatPriceBrl(0)} />
  ),
};

export const Inteiro: Story = {
  render: () => (
    <Example label={"formatPriceBrl(1234)"} result={formatPriceBrl(1234)} />
  ),
};

export const ComCentavos: Story = {
  render: () => (
    <Example
      label={"formatPriceBrl(1234.56)"}
      result={formatPriceBrl(1234.56)}
    />
  ),
};

export const InputDigitacao: Story = {
  render: () => (
    <Example
      label={'formatPriceBrl("123456")'}
      result={formatPriceBrl("123456")}
    />
  ),
};

export const InputJaFormatado: Story = {
  render: () => (
    <Example
      label={'formatPriceBrl("R$ 1.234,56")'}
      result={formatPriceBrl("R$ 1.234,56")}
    />
  ),
};

export const Nulo: Story = {
  render: () => (
    <Example label={"formatPriceBrl(null)"} result={formatPriceBrl(null)} />
  ),
};
