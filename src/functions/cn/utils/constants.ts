const cnConstants = `
Combina classes com \`clsx\` e remove conflitos do Tailwind com \`twMerge\`.

**Importação:**
\`\`\`tsx
import { cn } from "react-components-next/functions";
\`\`\`

**Uso básico:**
\`\`\`tsx
cn("px-4 py-2", "bg-blue-500 text-white rounded");
// → "px-4 py-2 bg-blue-500 text-white rounded"

cn("px-2 py-1", "px-4");
// → "py-1 px-4" (px-4 substitui px-2)

cn("rounded border p-4", active && "border-green-500 bg-green-50");
// → classes condicionais com clsx + merge do Tailwind
\`\`\`
`;

export default cnConstants;
