const useQueryAuthConstants = `
Wrapper de \`useQuery\` que só executa a query quando o usuário está autenticado (\`useAuth\`).

**Importação:**
\`\`\`tsx
import { useQueryAuth } from "@grazziotin/react-components-next/hooks";
\`\`\`

**Requisitos:**
- \`AuthProvider\` envolvendo a árvore
- \`QueryClientProvider\` do \`@tanstack/react-query\`

**Uso básico:**
\`\`\`tsx
const { data } = useQueryAuth({
  queryKey: ["orders"],
  queryFn: fetchOrders,
});
\`\`\`
`;

export default useQueryAuthConstants;
