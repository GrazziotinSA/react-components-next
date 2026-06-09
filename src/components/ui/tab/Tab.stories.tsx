import { useState } from "react";
import { Tab, Tabs } from "./index";
import tabConstants from "./utils/constants";
import type { TabColorProps } from "./utils/interface";
import type { Meta, StoryObj } from "@storybook/react-vite";

function TabAmostra({ color }: Readonly<TabColorProps>) {
  const [value, setValue] = useState(0);

  return (
    <Tabs
      value={value}
      color={color}
      onChange={(_, newValue) => setValue(newValue)}
    >
      <Tab label="Geral" color={color} />
      <Tab label="Detalhes" color={color} />
      <Tab label="Histórico" color={color} />
    </Tabs>
  );
}

const meta = {
  title: "UI/Tab",
  component: TabAmostra,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: tabConstants } },
  },
  argTypes: { color: { control: "color" } },
  args: { color: "#00B2A6" },
} satisfies Meta<typeof TabAmostra>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {};

export const CorCustomizada: Story = {
  args: { color: "#e03131" },
};
