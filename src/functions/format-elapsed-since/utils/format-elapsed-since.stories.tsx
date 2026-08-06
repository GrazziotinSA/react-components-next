import type { Meta, StoryObj } from "@storybook/react-vite";
import { formatElapsedSince } from "../format-elapsed-since";
import type { FormatElapsedSinceExampleProps } from "./interface";
import formatElapsedSinceConstants from "./constants";

const meta: Meta = {
  title: "Functions/format-elapsed-since",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: formatElapsedSinceConstants } },
  },
};

export default meta;
type Story = StoryObj;

function Example({ label, result }: FormatElapsedSinceExampleProps) {
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

const start = "2026-08-06T10:00:00.000Z";
const now = Date.parse("2026-08-06T11:01:05.000Z");

export const UmaHora: Story = {
  render: () => (
    <Example
      label={`formatElapsedSince("${start}", ${now})`}
      result={formatElapsedSince(start, now)}
    />
  ),
};

export const ComDias: Story = {
  render: () => (
    <Example
      label={"formatElapsedSince(..., +2d 3h)"}
      result={formatElapsedSince(start, Date.parse("2026-08-08T13:01:05.000Z"))}
    />
  ),
};

export const DataInvalida: Story = {
  render: () => (
    <Example
      label={'formatElapsedSince("data-invalida")'}
      result={formatElapsedSince("data-invalida")}
    />
  ),
};
