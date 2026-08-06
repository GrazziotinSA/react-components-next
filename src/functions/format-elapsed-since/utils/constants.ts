const formatElapsedSinceConstants = `
Formata o tempo decorrido desde uma data ISO no padrão \`d HH:MM:SS\`.

**Importação:**
\`\`\`tsx
import { formatElapsedSince } from "@grazziotin/react-components-next/functions";
\`\`\`

**Uso básico:**
\`\`\`tsx
formatElapsedSince("2026-08-06T10:00:00.000Z", Date.parse("2026-08-06T11:01:05.000Z"));
// → "0 01:01:05"

formatElapsedSince("data-invalida");
// → "0 00:00:00"
\`\`\`
`;

export default formatElapsedSinceConstants;
