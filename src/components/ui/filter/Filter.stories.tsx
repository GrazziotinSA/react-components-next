import { useState } from "react";
import { action } from "storybook/actions";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Filter from "./index";
import filterConstants, { filterInputSelect } from "./utils/constants";
import type { FilterProps } from "./utils/interface";

const cidades = [
  { id: 1, nome: "São Paulo" },
  { id: 2, nome: "Rio de Janeiro" },
  { id: 3, nome: "Belo Horizonte" },
  { id: 4, nome: "Curitiba" },
];

const redes = [
  { codRede: 1, desRede: "Lojas próprias" },
  { codRede: 2, desRede: "Franquias" },
  { codRede: 3, desRede: "Marketplace" },
];

const statuses = [
  { id: "ativo", label: "Ativo" },
  { id: "inativo", label: "Inativo" },
  { id: "pendente", label: "Pendente" },
];

function createFilterAmostra({
  comInputs = true,
  comSelects = true,
  comAcoes = true,
}: {
  comInputs?: boolean;
  comSelects?: boolean;
  comAcoes?: boolean;
} = {}) {
  return function FilterAmostra({
    title,
  }: Readonly<Pick<FilterProps, "title">>) {
    const [nome, setNome] = useState("");
    const [ano, setAno] = useState("");
    const [cidade, setCidade] = useState<(typeof cidades)[number] | null>(null);
    const [rede, setRede] = useState<(typeof redes)[number] | null>(null);
    const [status, setStatus] = useState<(typeof statuses)[number][]>([]);
    const [ultimaBusca, setUltimaBusca] = useState<string | null>(null);

    const inputs: FilterProps["inputs"] = comInputs
      ? [
          {
            xs: 2,
            order: 1,
            label: "Nome",
            value: nome,
            onChange: (e) => setNome(e.target.value),
          },
          {
            xs: 1,
            order: 2,
            type: "numeric",
            label: "Ano",
            value: ano,
            onChange: (e) => setAno(e.target.value),
          },
        ]
      : undefined;

    const inputSelect: FilterProps["inputSelect"] = comSelects
      ? [
          filterInputSelect({
            xs: 2,
            order: 3,
            options: cidades,
            value: cidade,
            optionLabel: (c) => c.nome,
            input: { label: "Cidade", color: "#00b2a6" },
            onChange: (_, v) => setCidade(v),
          }),
          filterInputSelect({
            xs: 2,
            order: 4,
            options: redes,
            value: rede,
            optionLabel: (r) => `${r.codRede} - ${r.desRede}`,
            input: { label: "Rede" },
            onChange: (_, v) => setRede(v),
          }),
          filterInputSelect({
            xs: 1,
            order: 5,
            multiple: true,
            options: statuses,
            value: status,
            optionLabel: (s) => s.label,
            input: { label: "Status" },
            onChange: (_, v) => setStatus(v ?? []),
          }),
        ]
      : undefined;

    const limpar = () => {
      action("onClear")();
      setNome("");
      setAno("");
      setCidade(null);
      setRede(null);
      setStatus([]);
      setUltimaBusca(null);
    };

    const pesquisar: NonNullable<FilterProps["onSubmit"]> = (event) => {
      action("onSubmit")(event);
      setUltimaBusca(
        JSON.stringify({ nome, ano, cidade, rede, status }, null, 2),
      );
    };

    return (
      <div className="w-full max-w-5xl">
        <Filter
          title={title}
          inputs={inputs}
          inputSelect={inputSelect}
          onClear={comAcoes ? limpar : undefined}
          onSubmit={comAcoes ? pesquisar : undefined}
        />
        {ultimaBusca && (
          <pre className="mt-4 rounded-md bg-gray-100 p-3 text-xs text-gray-700">
            Última busca:{"\n"}
            {ultimaBusca}
          </pre>
        )}
      </div>
    );
  };
}

const FilterAmostra = createFilterAmostra();

const meta = {
  title: "UI/Filter",
  component: FilterAmostra,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: { description: { component: filterConstants } },
  },
  argTypes: {
    title: { control: "text", description: "Título exibido no card." },
  },
  args: {
    title: "Relatório de vendas",
  },
} satisfies Meta<typeof FilterAmostra>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {};

export const SomenteInputs: Story = {
  render: (args) => createFilterAmostra({ comSelects: false })(args),
};

export const SomenteSelects: Story = {
  render: (args) => createFilterAmostra({ comInputs: false })(args),
};

export const SemAcoes: Story = {
  render: (args) => createFilterAmostra({ comAcoes: false })(args),
};

export const Livre: Story = {
  args: { title: "Playground" },
};
