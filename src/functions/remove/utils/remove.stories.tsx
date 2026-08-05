import type { Meta, StoryObj } from "@storybook/react-vite";
import { removeDigits, removeNonDigits, removeTextOnly } from "../remove";
import type { RemoveExampleProps } from "./interface";
import removeConstants from "./constants";

const meta: Meta = {
  title: "Functions/remove",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: removeConstants } },
  },
};

export default meta;
type Story = StoryObj;

function Example({ label, result }: RemoveExampleProps) {
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

export const DigitsVazio: Story = {
  render: () => <Example label={"removeDigits()"} result={removeDigits()} />,
};

export const DigitsComMascara: Story = {
  render: () => (
    <Example
      label={'removeDigits("(11) 98765-4321")'}
      result={removeDigits("(11) 98765-4321")}
    />
  ),
};

export const NonDigits: Story = {
  render: () => (
    <Example
      label={'removeNonDigits("ABC-12.34")'}
      result={removeNonDigits("ABC-12.34")}
    />
  ),
};

export const TextOnly: Story = {
  render: () => (
    <Example
      label={'removeTextOnly("João 123!")'}
      result={removeTextOnly("João 123!")}
    />
  ),
};
