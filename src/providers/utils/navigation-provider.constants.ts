const navigationProviderConstants = `
Provider de navegação que controla a visibilidade da UI via \`showNavigation\` / \`setShowNavigation\`.

**Importação:**
\`\`\`tsx
import {
  NavigationProvider,
  useNavigation,
} from "@grazziotin/react-components-next/providers";
\`\`\`

**Uso básico:**
\`\`\`tsx
<NavigationProvider>
  <App />
</NavigationProvider>

const { showNavigation, setShowNavigation } = useNavigation();
\`\`\`
`;

export default navigationProviderConstants;
