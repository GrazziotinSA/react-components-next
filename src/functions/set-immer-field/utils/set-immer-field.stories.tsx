"use client";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useImmer } from "use-immer";
import { setImmerField } from "../set-immer-field";
import setImmerFieldConstants from "./constants";
import type { SetImmerFieldExampleState } from "./interface";

const meta: Meta = {
  title: "Functions/setImmerField",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: setImmerFieldConstants } },
  },
};

export default meta;
type Story = StoryObj;

function Example() {
  const [data, setData] = useImmer<SetImmerFieldExampleState>({
    name: "",
    age: 0,
  });

  return (
    <div className="flex w-80 flex-col gap-3">
      <label className="flex flex-col gap-1 text-sm">
        <span>Nome</span>
        <input
          className="rounded border border-gray-300 px-2 py-1"
          value={data.name}
          onChange={(event) =>
            setImmerField({
              setData,
              key: "name",
              value: event.target.value,
            })
          }
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span>Idade</span>
        <input
          type="number"
          className="rounded border border-gray-300 px-2 py-1"
          value={data.age}
          onChange={(event) =>
            setImmerField({
              setData,
              key: "age",
              value: Number(event.target.value),
            })
          }
        />
      </label>
      <pre className="rounded bg-gray-100 p-2 text-xs">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export const Default: Story = {
  render: () => <Example />,
};
