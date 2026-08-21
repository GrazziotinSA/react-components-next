export const locale = {
  noOptionsText: "Nenhum resultado encontrado",
};

const inputSelectConstants = `
Autocomplete do MUI com o \`Input\` do projeto como campo de busca e seleção.

**Importação:**
\`\`\`tsx
import { InputSelect } from "@grazziotin/react-components-next/ui";
\`\`\`

**Uso básico:**
\`\`\`tsx
const options = [
  { id: 1, label: "Opção 1" },
  { id: 2, label: "Opção 2" },
];

<InputSelect
  options={options}
  optionLabel={(option) => option.label}
  input={{ label: "Selecione", color: "#00b2a6" }}
  onChange={(_event, value) => console.log(value)}
/>
\`\`\`

**Seleção múltipla:** passe \`multiple\` e trate o valor como array.

**Campo interno:** props do \`Input\` (label, placeholder, error, etc.) vão em \`input\`.

**Cor:** use \`color\` no \`InputSelect\` (igual ao \`Input\`) ou em \`input.color\`.

**Busca sem resultados:** quando nenhuma opção corresponde ao texto digitado, exibe \`${locale.noOptionsText}\`.

**Texto personalizado:** use a prop \`noOptionsText\` para alterar a mensagem exibida quando não houver opções.
\`\`\`tsx
<InputSelect
  options={options}
  optionLabel={(option) => option.label}
  noOptionsText="Nenhuma cidade encontrada"
  input={{ label: "Cidade", color: "#00b2a6" }}
/>
\`\`\`
`;

export default inputSelectConstants;
