const formatItem150Constants = `
Formata máscara de item **150** (até 10 dígitos) no padrão \`00.00.00.0.000\`; remove caracteres não numéricos antes de formatar.

**Importação:**
\`\`\`tsx
import { formatItem150 } from "@grazziotin/react-components-next/functions";
\`\`\`

**Uso básico:**
\`\`\`tsx
formatItem150("1234567890");
// → "12.34.56.7.890"
\`\`\`
`;

export default formatItem150Constants;
