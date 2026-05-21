import type { Meta, StoryObj } from "@storybook/react-vite";
import { cn } from "../cn";
import type { CnExampleProps } from "./interfaces";
import cnConstants from "./constants";

const meta: Meta = {
  title: "Functions/cn",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: cnConstants } },
  },
};

export default meta;
type Story = StoryObj;

function Example({ label, classes }: CnExampleProps) {
  return (
    <div className="flex flex-col gap-2">
      <code className="rounded bg-gray-100 px-2 py-1 text-sm">{label}</code>
      <div className={classes}>Resultado visual</div>
    </div>
  );
}

export const Basico: Story = {
  render: () => (
    <Example
      label='cn("px-4 py-2", "bg-blue-500 text-white rounded")'
      classes={cn("px-4 py-2", "bg-blue-500 text-white rounded")}
    />
  ),
};

export const ConflitoTailwind: Story = {
  render: () => (
    <Example
      label='cn("px-2 py-1", "px-4") → "py-1 px-4"'
      classes={cn("px-2 py-1", "px-4", "bg-gray-200 rounded")}
    />
  ),
};

export const Condicional: Story = {
  render: () => {
    const active = true;

    return (
      <Example
        label='cn("rounded border p-4", active && "border-green-500 bg-green-50")'
        classes={cn(
          "rounded border p-4",
          active && "border-green-500 bg-green-50",
        )}
      />
    );
  },
};
