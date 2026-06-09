import * as _mui_material from '@mui/material';
import { CSSProperties, Breakpoint, TabProps as TabProps$1, TabsProps as TabsProps$1 } from '@mui/material';
import * as react from 'react';
import react__default, { ComponentPropsWithoutRef } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { DataGridProps } from '@mui/x-data-grid';
import * as _emotion_styled from '@emotion/styled';
import * as _mui_system from '@mui/system';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';

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
     * @default "var(--primary-color)"
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
 * @param props.titleColor - Cor de fundo do cabeçalho. Padrão: `var(--primary-color)`.
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
declare function Dialog({ open, title, onClose, actions, children, maxWidth, blurBackdrop, }: Readonly<DialogProps>): react__default.ReactElement;

/**
 * Propriedades do componente {@link DataTable}.
 * Wrapper tipado sobre o MUI `DataGrid`, com estilização e textos em português.
 */
type DataTableProps = DataGridProps;

/**
 * Componente DataTable personalizado baseado no MUI DataGrid.
 *
 * Fornece uma tabela de dados com estilização customizada, filtros avançados,
 * paginação, ordenação e gerenciamento de colunas.
 *
 * Recursos incluídos:
 * - Operador de filtro "entre" automático para colunas string e number
 * - Painel de filtros customizado
 * - Painel de gerenciamento de colunas
 * - Paginação estilizada
 * - Overlay personalizado para "sem dados"
 * - Textos em português brasileiro
 *
 * @param props - Todas as props do MUI DataGrid são suportadas. Ver {@link DataTableProps}.
 *
 * @example
 * <DataTable
 *   rows={dados}
 *   columns={colunas}
 *   loading={carregando}
 *   pageSizeOptions={[10, 20, 50]}
 * />
 */
declare const DataTable: ({ ...rest }: DataTableProps) => react_jsx_runtime.JSX.Element;

/**
 * Propriedades de estilo compartilhadas entre {@link Tab} e {@link Tabs}.
 */
interface TabColorProps {
    /**
     * Cor do indicador ativo e do rótulo da aba selecionada.
     * @default "var(--primary-color)"
     */
    color?: string;
    /**
     * Família tipográfica do rótulo da aba.
     * Defina `--font-family` no CSS do projeto ou passe esta prop diretamente.
     * @default "var(--font-family, inherit)"
     */
    fontFamily?: string;
}
/**
 * Propriedades do componente {@link Tab}.
 * Estende o `Tab` do MUI com suporte a cor customizada via `color`.
 */
type TabProps = TabProps$1 & TabColorProps;
/**
 * Propriedades do componente {@link Tabs}.
 * Estende o `Tabs` do MUI com suporte a cor customizada do indicador via `color`.
 */
type TabsProps = TabsProps$1 & TabColorProps;

/**
 * Container de abas baseado no MUI `Tabs`, com indicador colorido customizável.
 *
 * @param props.color - Cor do indicador da aba ativa. Padrão: `var(--primary-color)`.
 *
 * @example
 * ```tsx
 * <Tabs value={value} onChange={handleChange} color="#00B2A6">
 *   <Tab label="Aba 1" />
 * </Tabs>
 * ```
 */
declare const Tabs: _emotion_styled.StyledComponent<_mui_material.TabsOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style" | "className" | "aria-label" | "aria-labelledby" | "children" | "onChange" | "sx" | "classes" | "slots" | "slotProps" | "variant" | "value" | "action" | "allowScrollButtonsMobile" | "centered" | "indicatorColor" | "orientation" | "scrollButtons" | "selectionFollowsFocus" | "textColor" | "visibleScrollbar"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & TabColorProps, {}, {}>;
/**
 * Aba individual baseada no MUI `Tab`, com tipografia e cor de seleção customizáveis.
 *
 * @param props.color - Cor do rótulo quando a aba está selecionada. Padrão: `var(--primary-color)`.
 * @param props.fontFamily - Família tipográfica do rótulo. Padrão: `var(--font-family, inherit)`.
 *
 * @example
 * ```tsx
 * <Tab label="Configurações" color="#00B2A6" />
 * ```
 */
declare const Tab: _emotion_styled.StyledComponent<_mui_material.TabOwnProps & Omit<_mui_material.ButtonBaseOwnProps, keyof _mui_material.TabOwnProps> & Omit<_mui_material.ButtonBaseOwnProps, "tabIndex" | "type" | "touchRippleRef" | "action" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "nativeButton" | "onFocusVisible" | "TouchRippleProps" | keyof _mui_material.TabOwnProps> & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "label" | "style" | "className" | "tabIndex" | "children" | "icon" | "sx" | "type" | "classes" | "disabled" | "touchRippleRef" | "value" | "action" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "nativeButton" | "onFocusVisible" | "TouchRippleProps" | "disableFocusRipple" | "iconPosition" | "wrapped"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & TabColorProps, {}, {}>;

export { Card, type CardClassName, type CardProps, DataTable, type DataTableProps, Dialog, type DialogProps, Tab, type TabColorProps, type TabProps, Tabs, type TabsProps };
