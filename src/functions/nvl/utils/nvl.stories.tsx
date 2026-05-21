import type { Meta, StoryObj } from "@storybook/react-vite";
import { nvl } from "../nvl";
import { NvlExampleProps } from "./interface";
import nvlConstants from "./constants";

const meta: Meta = {
  title: "Functions/nvl",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: nvlConstants } },
  },
};

export default meta;
type Story = StoryObj;

function Example({ label, result }: NvlExampleProps) {
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

export const ComNull: Story = {
  render: () => (
    <Example label={"nvl(null, 'padrão')"} result={nvl(null, "padrão")} />
  ),
};

export const ComUndefined: Story = {
  render: () => (
    <Example
      label={"nvl(undefined, 'padrão')"}
      result={nvl(undefined, "padrão")}
    />
  ),
};

export const ValorDefinido: Story = {
  render: () => (
    <Example label={"nvl('valor', 'padrão')"} result={nvl("valor", "padrão")} />
  ),
};

export const ZeroPreservado: Story = {
  render: () => (
    <Example
      label={"nvl(0, 10) → 0 (0 não é null/undefined)"}
      result={nvl(0, 10)}
    />
  ),
};

export const FalsePreservado: Story = {
  render: () => (
    <Example label={"nvl(false, true) → false"} result={nvl(false, true)} />
  ),
};
