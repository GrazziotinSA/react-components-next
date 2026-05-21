import { CSSProperties, Breakpoint } from '@mui/material';
import React$1, { ComponentPropsWithoutRef } from 'react';

/**
 * Tipo do atributo nativo `className` de um elemento `div` no React.
 * Equivalente a `React.HTMLAttributes<HTMLDivElement>["className"]`.
 */
type CardClassName = ComponentPropsWithoutRef<"div">["className"];
/**
 * Propriedades do componente {@link Card}.
 * O Card é um container com cabeçalho opcional (título, ícone) e área de conteúdo.
 * Estilos dinâmicos são aplicados via MUI `Box`; classes utilitárias podem ser
 * combinadas com `className` e a função `cn`.
 */
interface CardProps {
    /**
     * Largura do card.
     * Aceita qualquer valor CSS válido (ex.: `"100%"`, `"320px"`, `"auto"`).
     * @default "100%"
     */
    width?: string;
    /**
     * Altura do card.
     * Aceita qualquer valor CSS válido (ex.: `"auto"`, `"200px"`, `"100%"`).
     * @default "auto"
     */
    height?: string;
    /**
     * Margem externa do card.
     * Aceita shorthand ou valores individuais do CSS (ex.: `"16px"`, `"0 8px"`).
     */
    margin?: string;
    /**
     * Texto exibido no cabeçalho do card.
     * Sempre renderizado; quando o texto ultrapassa o espaço, é truncado com reticências.
     */
    title?: string;
    /**
     * Habilita o tooltip do Mantine sobre o título ao passar o mouse.
     * O título continua visível com ou sem tooltip; quando `false`, o hover não exibe popup.
     * @default false
     */
    toolTip?: boolean;
    /**
     * Atributo `className` do container principal (tipo nativo do React).
     * String de classes CSS; mesclada com classes internas via `cn`.
     * @see {@link CardClassName}
     */
    className?: CardClassName;
    /**
     * Largura da barra do cabeçalho (área do título e ícone).
     * @default "100%"
     */
    titleWidth?: string;
    /**
     * Cor de fundo do cabeçalho.
     * Aceita cores CSS (hex, rgb, variáveis CSS, etc.).
     * @default "var(--color-primary)"
     */
    titleColor?: string;
    /**
     * Raio da borda apenas do cabeçalho (ex.: `"8px 8px 0 0"`).
     * Útil para arredondar só o topo quando o conteúdo não tem o mesmo radius.
     */
    borderTitle?: string;
    /**
     * Callback ao clicar no card inteiro.
     * Quando definido, o cursor do card passa a ser `pointer` com `!important`.
     */
    onClick?: () => void;
    /**
     * Raio da borda do container principal do card (ex.: `"10px"`).
     */
    borderRadius?: string;
    /**
     * Elemento React exibido à direita do título no cabeçalho (ícone, botão, ação, etc.).
     */
    icon?: React.ReactNode;
    /**
     * Conteúdo principal do card, renderizado abaixo do cabeçalho.
     */
    children: React.ReactNode;
    /**
     * Alinhamento horizontal dos itens no cabeçalho (título e `icon`).
     * Mesmos valores de `justify-content` do CSS (ex.: `"space-between"`, `"flex-end"`).
     * @default "space-between"
     */
    justifyContent?: CSSProperties["justifyContent"];
}

/**
 * Container de UI com cabeçalho colorido (título e ícone opcionais) e área de conteúdo.
 *
 * O card usa MUI `Box` para dimensões, sombra e responsividade; classes Tailwind
 * extras podem ser passadas em `className` e são mescladas com `cn`. O título é
 * sempre exibido e truncado quando necessário; o tooltip (Mantine) só aparece se
 * `toolTip` for `true`.
 *
 * @param props - Propriedades do componente. Detalhes em {@link CardProps}.
 * @param props.width - Largura do card. Padrão: `"100%"`.
 * @param props.height - Altura do card. Padrão: `"auto"`.
 * @param props.margin - Margem externa.
 * @param props.title - Texto do cabeçalho.
 * @param props.toolTip - Habilita tooltip no título.
 * @param props.className - `className` nativo do React no container.
 * @param props.titleWidth - Largura da barra do cabeçalho. Padrão: `"100%"`.
 * @param props.titleColor - Cor de fundo do cabeçalho. Padrão: `var(--color-primary)`.
 * @param props.borderTitle - `border-radius` só do cabeçalho.
 * @param props.onClick - Clique no card; adiciona `cursor: pointer !important`.
 * @param props.borderRadius - `border-radius` do container.
 * @param props.icon - Conteúdo à direita do título.
 * @param props.children - Corpo do card.
 * @param props.justifyContent - Alinhamento título/ícone. Padrão: `"space-between"`.
 *
 * @returns Elemento `Box` com cabeçalho e `children`.
 *
 * @example
 * ```tsx
 * <Card title="Resumo" toolTip icon={<span>+</span>}>
 *   <p>Conteúdo interno</p>
 * </Card>
 * ```
 *
 * @example
 * ```tsx
 * <Card
 *   title="Clique aqui"
 *   width="320px"
 *   onClick={() => alert("Card clicado")}
 * >
 *   Card interativo
 * </Card>
 * ```
 */
declare function Card({ margin, onClick, title, toolTip, className, borderTitle, children, borderRadius, width, height, titleWidth, justifyContent, titleColor, icon, }: Readonly<CardProps>): React.ReactElement;

/**
 * Propriedades do componente {@link Dialog}.
 * Modal baseado no MUI `Dialog`, com título, conteúdo principal e rodapé de ações opcionais.
 * O componente usa `fullWidth` por padrão; a largura máxima é controlada por `maxWidth`.
 */
interface DialogProps {
    /**
     * Controla se o diálogo está aberto e visível.
     */
    open: boolean;
    /**
     * Texto exibido no cabeçalho do diálogo.
     * Quando omitido, o bloco de título não é renderizado.
     */
    title?: string;
    /**
     * Callback invocado ao fechar o diálogo
     * (clique no backdrop, tecla ESC ou botão de fechar do MUI).
     */
    onClose: () => void;
    /**
     * Aplica desfoque e overlay escuro semitransparente no backdrop.
     * @default false
     */
    blurBackdrop?: boolean;
    /**
     * Conteúdo principal exibido na área central do diálogo.
     */
    children: React.ReactNode;
    /**
     * Conteúdo do rodapé (botões, links ou ações customizadas).
     * Quando omitido, `DialogActions` não é renderizado.
     */
    actions?: React.ReactNode;
    /**
     * Largura máxima do diálogo conforme breakpoints do MUI
     * (`xs`, `sm`, `md`, `lg`, `xl`).
     * Use `false` para desativar o limite de largura.
     */
    maxWidth?: false | Breakpoint;
}

/**
 * Modal de diálogo baseado no MUI `Dialog`, com título, conteúdo e ações opcionais.
 *
 * O componente usa `fullWidth` por padrão e permite limitar a largura via `maxWidth`.
 * Com `blurBackdrop`, o fundo recebe desfoque e overlay escuro semitransparente.
 *
 * @param props - Propriedades do componente. Detalhes em {@link DialogProps}.
 * @param props.open - Controla se o diálogo está visível.
 * @param props.title - Título exibido no topo; omitido se não informado.
 * @param props.onClose - Callback ao fechar (clique fora, ESC ou botão de fechar do MUI).
 * @param props.actions - Rodapé com botões ou ações customizadas.
 * @param props.children - Conteúdo principal do diálogo.
 * @param props.maxWidth - Largura máxima do MUI (`xs`, `sm`, `md`, `lg`, `xl` ou `false`).
 * @param props.blurBackdrop - Aplica blur e escurecimento no backdrop. Padrão: `false`.
 *
 * @returns Instância do `Dialog` do Material UI.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <Dialog
 *   open={open}
 *   title="Confirmar exclusão"
 *   onClose={() => setOpen(false)}
 *   actions={<Button onClick={() => setOpen(false)}>OK</Button>}
 * >
 *   Deseja realmente excluir este item?
 * </Dialog>
 * ```
 *
 * @example
 * ```tsx
 * <Dialog
 *   open={open}
 *   onClose={handleClose}
 *   maxWidth="sm"
 *   blurBackdrop
 * >
 *   Conteúdo sem título.
 * </Dialog>
 * ```
 */
declare function Dialog({ open, title, onClose, actions, children, maxWidth, blurBackdrop, }: Readonly<DialogProps>): React$1.ReactElement;

export { Card, type CardClassName, type CardProps, Dialog, type DialogProps };
