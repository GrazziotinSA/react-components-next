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

**Campo interno:** props do \`Input\` (label, color, placeholder, error, etc.) vão em \`input\`.
`;

export default inputSelectConstants;
