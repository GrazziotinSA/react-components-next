const formatPhoneBrConstants = `
Formata telefone brasileiro (até 11 dígitos): fixo com 10 dígitos ou celular com 11; remove caracteres não numéricos antes de formatar.

**Importação:**
\`\`\`tsx
import { formatPhoneBr } from "react-components-next/functions";
\`\`\`

**Uso básico:**
\`\`\`tsx
formatPhoneBr("1133334444");
// → "(11) 3333-4444"

formatPhoneBr("11987654321");
// → "(11) 98765-4321"

formatPhoneBr("(11) 98765-4321");
// → "(11) 98765-4321" (reformata valor já formatado)
\`\`\`
`;

export default formatPhoneBrConstants;
