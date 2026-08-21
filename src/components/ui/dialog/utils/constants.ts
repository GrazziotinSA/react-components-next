export const DIALOG_BACKDROP_STYLE = {
  backdropFilter: "blur(4px)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

export const DIALOG_PAPER_FONT_SX = {
  fontFamily: "var(--font-family, inherit) !important",
  "& .MuiDialogTitle-root, & .MuiDialogContent-root, & .MuiDialogActions-root, & .MuiTypography-root":
    { fontFamily: "inherit !important" },
};

const dialogConstants = `
Modal de diálogo baseado no MUI \`Dialog\`, com título, conteúdo e ações opcionais.
Suporta \`maxWidth\` e backdrop com blur via \`blurBackdrop\`.

**Importação:**
\`\`\`tsx
import { Dialog } from "@grazziotin/react-components-next/ui";
\`\`\`

**Fonte do projeto (CSS global):**
\`\`\`css
:root {
  --font-family: "Poppins", sans-serif;
}
\`\`\`

Sem \`--font-family\`, os componentes herdam a fonte do \`body\`.

**Uso básico:**
\`\`\`tsx
const [open, setOpen] = useState(false);

<Dialog
  open={open}
  title="Confirmar"
  onClose={() => setOpen(false)}
  actions={<button type="button">OK</button>}
>
  Conteúdo do diálogo
</Dialog>
\`\`\`
`;

export default dialogConstants;
