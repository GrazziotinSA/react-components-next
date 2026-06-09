import type { Meta, StoryObj } from "@storybook/react-vite";
import { formatItem150 } from "../format-item-150";
import type { FormatItem150ExampleProps } from "./interface";
import formatItem150Constants from "./constants";

const meta: Meta = {
  title: "Functions/format-item-150",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: formatItem150Constants } },
  },
};

export default meta;
type Story = StoryObj;

function Example({ label, result }: FormatItem150ExampleProps) {
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
  render: () => <Example label={"formatItem150()"} result={formatItem150()} />,
};

export const Parcial: Story = {
  render: () => (
    <Example
      label={'formatItem150("123456")'}
      result={formatItem150("123456")}
    />
  ),
};

export const Completo: Story = {
  render: () => (
    <Example
      label={'formatItem150("1234567890")'}
      result={formatItem150("1234567890")}
    />
  ),
};
