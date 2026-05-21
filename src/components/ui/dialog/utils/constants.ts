export const DIALOG_BACKDROP_STYLE = {
  backdropFilter: "blur(4px)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const dialogConstants = `
Modal de diálogo baseado no MUI \`Dialog\`, com título, conteúdo e ações opcionais.
Suporta \`maxWidth\` e backdrop com blur via \`blurBackdrop\`.

**Importação:**
\`\`\`tsx
import Dialog from "@/components/ui/dialog";
// ou, no pacote publicado:
// import { Dialog } from "@grazziotin/react-components-next/ui";
\`\`\`

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
