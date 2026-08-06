import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useDebounce } from "../use-debounce";
import type { UseDebounceExampleProps } from "./interface";
import useDebounceConstants from "./constants";

const meta: Meta = {
  title: "Hooks/use-debounce",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: useDebounceConstants } },
  },
};

export default meta;
type Story = StoryObj;

function Example({ delay = 300 }: UseDebounceExampleProps) {
  const [value, setValue] = useState("");
  const debounced = useDebounce(value, delay);

  return (
    <div className="flex w-72 flex-col gap-2">
      <code className="rounded bg-gray-100 px-2 py-1 text-sm">
        {`useDebounce(value, ${delay})`}
      </code>
      <input
        className="rounded border border-gray-300 px-2 py-1 text-sm"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Digite algo..."
      />
      <p className="text-sm text-gray-700">
        Valor:{" "}
        <strong className="font-mono text-gray-900">{value || "—"}</strong>
      </p>
      <p className="text-sm text-gray-700">
        Debounced:{" "}
        <strong className="font-mono text-gray-900">{debounced || "—"}</strong>
      </p>
    </div>
  );
}

export const Padrao300ms: Story = {
  render: () => <Example />,
};

export const UmSegundo: Story = {
  render: () => <Example delay={1000} />,
};
