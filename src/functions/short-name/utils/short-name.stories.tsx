import type { Meta, StoryObj } from "@storybook/react-vite";
import { shortName } from "../short-name";
import type { ShortNameExampleProps } from "./interface";
import shortNameConstants from "./constants";

const meta: Meta = {
  title: "Functions/short-name",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: shortNameConstants } },
  },
};

export default meta;
type Story = StoryObj;

function Example({ label, result }: ShortNameExampleProps) {
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
  render: () => <Example label={"shortName()"} result={shortName()} />,
};

export const NomeCompleto: Story = {
  render: () => (
    <Example
      label={'shortName("flavia roseane alves de souza")'}
      result={shortName("flavia roseane alves de souza")}
    />
  ),
};

export const DoisNomes: Story = {
  render: () => (
    <Example
      label={'shortName("João Silva")'}
      result={shortName("João Silva")}
    />
  ),
};

export const NomeUnico: Story = {
  render: () => (
    <Example label={'shortName("Maria")'} result={shortName("Maria")} />
  ),
};

export const EspacosExtras: Story = {
  render: () => (
    <Example
      label={'shortName("  Ana  Clara  Souza  ")'}
      result={shortName("  Ana  Clara  Souza  ")}
    />
  ),
};
