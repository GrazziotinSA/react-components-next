const formatCpfCnpjConstants = `
Formata CPF (até 11 dígitos) ou CNPJ (12–14 dígitos) a partir de uma string; remove caracteres não numéricos antes de formatar.

**Importação:**
\`\`\`tsx
import { formatCpfCnpj } from "@grazziotin/react-components-next/functions";
\`\`\`

**Uso básico:**
\`\`\`tsx
formatCpfCnpj("12345678901");
// → "123.456.789-01"

formatCpfCnpj("12345678000199");
// → "12.345.678/0001-99"

formatCpfCnpj("123.456.789-01");
// → "123.456.789-01" (reformata valor já mascarado)
\`\`\`
`;

export default formatCpfCnpjConstants;
