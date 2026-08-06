import type { Meta, StoryObj } from "@storybook/react-vite";
import { useNow } from "../use-now";
import type { UseNowExampleProps } from "./interface";
import useNowConstants from "./constants";

const meta: Meta = {
  title: "Hooks/use-now",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: useNowConstants } },
  },
};

export default meta;
type Story = StoryObj;

function Example({ label, ms = 1000 }: UseNowExampleProps) {
  const now = useNow(ms);

  return (
    <div className="flex flex-col gap-2">
      <code className="rounded bg-gray-100 px-2 py-1 text-sm">{label}</code>
      <p className="text-sm text-gray-700">
        Timestamp: <strong className="font-mono text-gray-900">{now}</strong>
      </p>
      <p className="text-sm text-gray-700">
        ISO:{" "}
        <strong className="font-mono text-gray-900">
          {new Date(now).toISOString()}
        </strong>
      </p>
    </div>
  );
}

export const Padrao1s: Story = {
  render: () => <Example label={"useNow()"} />,
};

export const MeioSegundo: Story = {
  render: () => <Example label={"useNow(500)"} ms={500} />,
};
