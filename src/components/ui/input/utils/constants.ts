const inputConstants = `
Campo de texto baseado no MUI \`TextField\`, com tipos customizados de formatação e toggle de senha.

**Importação:**
\`\`\`tsx
import { Input } from "@grazziotin/react-components-next/ui";
\`\`\`

**Tipos customizados (\`type\`):**
- \`cpf-cnpj\` — formata CPF/CNPJ
- \`tel\` — telefone brasileiro
- \`price\` — moeda BRL
- \`item-170\` — máscara \`00.00.00.00.0.000\`
- \`item-150\` — máscara \`00.00.00.0.000\`
- \`numeric\` — apenas dígitos
- \`text-only\` — apenas letras
- \`text-no-number\` — sem números

**Uso básico:**
\`\`\`tsx
<Input label="Nome" placeholder="Digite seu nome" />

<Input
  label="CPF"
  type="cpf-cnpj"
  value={cpf}
  onChange={(e) => setCpf(e.target.value)}
/>

<Input
  label="Valor"
  type="price"
  value={price}
  onChange={(e) => setPrice(e.target.value)}
/>

<Input
  label="Item 170"
  type="item-170"
  value={item170}
  onChange={(e) => setItem170(e.target.value)}
/>

<Input
  label="Item 150"
  type="item-150"
  value={item150}
  onChange={(e) => setItem150(e.target.value)}
/>

<Input
  label="Senha"
  type="password"
  isPassword
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
\`\`\`
`;

export default inputConstants;
