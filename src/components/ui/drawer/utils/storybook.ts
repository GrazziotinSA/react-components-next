const drawerStorybookDescription = `
Drawer composto no estilo shadcn/Base UI (\`@base-ui/react/drawer\`).
Bottom sheet com header, área scroll, footer, snap points e swipe handle.

**Peer dependency:** \`@base-ui/react\` (^1.7.0)

**Importação:**
\`\`\`tsx
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@grazziotin/react-components-next/ui";
\`\`\`

**Requisito iOS (Safari):** o overlay é \`position: absolute\` e precisa de um
\`body\` posicionado para cobrir o viewport após scroll. Adicione no CSS global
do app consumidor:
\`\`\`css
body {
  position: relative;
}
\`\`\`

**Uso básico (sheet com header / lista / footer):**
\`\`\`tsx
<Drawer>
  <DrawerTrigger render={<button type="button" />}>Abrir</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Escolha um horário</DrawerTitle>
      <DrawerDescription>Selecione a entrega desejada.</DrawerDescription>
    </DrawerHeader>
    <div className="flex-1 overflow-y-auto p-4">{/* lista */}</div>
    <DrawerFooter>
      <button type="button">Confirmar</button>
      <DrawerClose render={<button type="button" />}>Cancelar</DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
\`\`\`

**Snap points estilo iOS (\`points\`):**
\`\`\`tsx
<Drawer points overlayModal>
  <DrawerTrigger render={<button type="button" />}>Abrir</DrawerTrigger>
  <DrawerContent>...</DrawerContent>
</Drawer>
\`\`\`

Atalho para \`snapPoints={[0.3, 0.9]}\` + handle. Use \`overlayModal\` para fundo igual drawer modal.

**Snap points manual:**
\`\`\`tsx
<Drawer showSwipeHandle snapPoints={[0.3, 0.9]}>
  <DrawerTrigger render={<button type="button" />}>Abrir</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Detalhes</DrawerTitle>
    </DrawerHeader>
    <div className="flex-1 overflow-y-auto p-4">{/* conteúdo */}</div>
  </DrawerContent>
</Drawer>
\`\`\`

**Visual flutuante (não encosta nas bordas):**
\`\`\`tsx
<Drawer floating rounded="2xl">
  <DrawerTrigger render={<button type="button" />}>Abrir</DrawerTrigger>
  <DrawerContent>
    ...
  </DrawerContent>
</Drawer>
\`\`\`

\`rounded\` aceita tokens (\`sm\`…\`5xl\`, \`full\`), px (\`24\`) ou CSS (\`"1.5rem"\`).

\`overlayBlur\` aceita tokens (\`none\`…\`3xl\`), px (\`12\`) ou CSS (\`"8px"\`). Padrão: \`md\` (8px).

\`overlayModal\` força fundo escurecido/blur completo em snap points (estilo modal/desktop).
Sem isso, snap points usam overlay iOS (mais claro quando o drawer sobe).

\`points\` ativa snap points iOS (30% / 90%). Mutuamente exclusivo com \`floating\`.
`;

export default drawerStorybookDescription;
