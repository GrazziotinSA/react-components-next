const removeConstants = `
Funções para filtrar caracteres de uma string: manter só dígitos, remover dígitos ou manter só letras.

**Importação:**
\`\`\`tsx
import {
  removeDigits,
  removeNonDigits,
  removeTextOnly,
} from "@grazziotin/react-components-next/functions";
\`\`\`

**Uso básico:**
\`\`\`tsx
removeDigits("(11) 98765-4321");
// → "11987654321"

removeNonDigits("ABC-12.34");
// → "ABC-."

removeTextOnly("João 123!");
// → "João"
\`\`\`
`;

export default removeConstants;
