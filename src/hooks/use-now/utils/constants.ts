const useNowConstants = `
Retorna o timestamp atual atualizado a cada intervalo (padrão 1s). Útil junto com \`formatElapsedSince\`.

**Importação:**
\`\`\`tsx
import { useNow } from "@grazziotin/react-components-next/hooks";
\`\`\`

**Uso básico:**
\`\`\`tsx
const now = useNow();
const nowFast = useNow(500);

formatElapsedSince(order.createdAt, now);
\`\`\`
`;

export default useNowConstants;
