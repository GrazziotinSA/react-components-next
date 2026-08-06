const authProviderConstants = `
Provider de autenticação que expõe \`token\` e \`isAuthenticated\` via \`useAuth\`.

**Importação:**
\`\`\`tsx
import { AuthProvider, useAuth } from "@grazziotin/react-components-next/providers";
\`\`\`

**Uso básico:**
\`\`\`tsx
<AuthProvider token={sessionToken}>
  <App />
</AuthProvider>

const { isAuthenticated, token } = useAuth();
\`\`\`
`;

export default authProviderConstants;
