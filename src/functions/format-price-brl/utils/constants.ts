const formatPriceBrlConstants = `
Formata valor como moeda brasileira (BRL) com \`toLocaleString('pt-BR')\`.

- **string** — máscara de input (centavos enquanto digita)
- **number** — valor em reais

**Importação:**
\`\`\`tsx
import { formatPriceBrl } from "@grazziotin/react-components-next/functions";
\`\`\`

**Uso básico:**
\`\`\`tsx
formatPriceBrl("123456");
// → "R$ 1.234,56" (input)

formatPriceBrl(1234.56);
// → "R$ 1.234,56" (número)

formatPriceBrl(0);
// → "R$ 0,00"

formatPriceBrl();
// → ""
\`\`\`
`;

export default formatPriceBrlConstants;
