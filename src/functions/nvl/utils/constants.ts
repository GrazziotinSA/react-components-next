const nvlConstants = `
Retorna o valor quando não é \`null\` nem \`undefined\`; caso contrário, retorna o padrão (equivalente ao operador \`??\`).

**Importação:**
\`\`\`tsx
import { nvl } from "react-components-next/functions";
\`\`\`

**Uso básico:**
\`\`\`tsx
nvl(null, "padrão");
// → "padrão"

nvl("valor", "padrão");
// → "valor"

nvl(0, 10);
// → 0 (0 não é null/undefined)
\`\`\`
`;

export default nvlConstants;
