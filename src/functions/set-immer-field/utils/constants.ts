const setImmerFieldConstants = `
Atualiza uma chave específica de um estado gerenciado com \`useImmer\`, sem precisar espalhar o objeto manualmente.

**Importação:**
\`\`\`tsx
import { setImmerField } from "@grazziotin/react-components-next/functions";
import { useImmer } from "use-immer";
\`\`\`

**Uso básico:**
\`\`\`tsx
const [data, setData] = useImmer({ name: "", age: 0 });

setImmerField({ setData, key: "name", value: "João" });
setImmerField({ setData, key: "age", value: 30 });
\`\`\`
`;

export default setImmerFieldConstants;
