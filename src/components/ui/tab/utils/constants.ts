const tabConstants = `
Abas estilizadas com base no MUI \`Tabs\` e \`Tab\`, com indicador e rótulo
da aba ativa personalizáveis via prop \`color\`.

**Importação:**
\`\`\`tsx
import { Tabs, Tab } from "@grazziotin/react-components-next/ui";
\`\`\`

**Uso básico:**
\`\`\`tsx
const [value, setValue] = useState(0);

<Tabs value={value} onChange={(_, v) => setValue(v)}>
  <Tab label="Geral" />
  <Tab label="Detalhes" />
</Tabs>
\`\`\`

**Cor customizada:**
\`\`\`tsx
<Tabs value={value} onChange={handleChange} color="#e03131">
  <Tab label="Alerta" color="#e03131" />
</Tabs>
\`\`\`

**Fonte do projeto (CSS global):**
\`\`\`css
:root {
  --font-family: "Poppins", sans-serif;
}
\`\`\`

Ou via prop no \`Tab\`:
\`\`\`tsx
<Tab label="Geral" fontFamily='"Inter", sans-serif' />
\`\`\`
`;

export default tabConstants;
