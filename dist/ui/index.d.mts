import * as _mui_material from '@mui/material';
import { CSSProperties, Breakpoint, TabProps as TabProps$1, TabsProps as TabsProps$1, TextFieldProps, AutocompleteProps, AutocompleteChangeReason, AutocompleteChangeDetails } from '@mui/material';
import * as react from 'react';
import react__default, { ComponentPropsWithoutRef, Dispatch, SetStateAction, SubmitEventHandler, ReactElement, ComponentProps } from 'react';
import { DialogProps as DialogProps$1 } from '@mui/material/Dialog';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { DataGridProps } from '@mui/x-data-grid';
import * as _emotion_styled from '@emotion/styled';
import * as _mui_system from '@mui/system';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';
import { Drawer as Drawer$1 } from '@base-ui/react/drawer';

/**
 * Tipo do atributo nativo `className` de um elemento `div` no React.
 * Equivalente a `React.HTMLAttributes<HTMLDivElement>["className"]`.
 */
type CardClassName = ComponentPropsWithoutRef<"div">["className"];
/**
 * Tipo do atributo nativo `className` de um elemento `span` no React.
 */
type CardTitleClassName = NonNullable<ComponentPropsWithoutRef<"span">["className"]>;
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
     * Classes CSS aplicadas diretamente ao título.
     * Permite personalizar tamanho, peso, cor e outros estilos do texto.
     * @see {@link CardTitleClassName}
     */
    titleClassName?: CardTitleClassName;
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
    justifyContent?: NonNullable<CSSProperties["justifyContent"]>;
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
 * @param props.titleClassName - Classes CSS aplicadas diretamente ao título.
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
declare function Card({ margin, onClick, title, toolTip, className, borderTitle, children, borderRadius, width, height, titleWidth, titleClassName, justifyContent, titleColor, icon, }: Readonly<CardProps>): React.ReactElement;

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
    /**
     * Desativa o scroll lock do MUI no `body`.
     * Útil ao encadear com outro modal (ex.: Drawer Base UI) para evitar locks concorrentes.
     * @default false
     */
    disableScrollLock?: DialogProps$1["disableScrollLock"];
    /**
     * Desativa o enforce focus do Modal MUI.
     * @default false
     */
    disableEnforceFocus?: DialogProps$1["disableEnforceFocus"];
    /**
     * Desativa o auto-focus ao abrir.
     * @default false
     */
    disableAutoFocus?: DialogProps$1["disableAutoFocus"];
    /**
     * Mantém o conteúdo montado quando fechado.
     * @default false
     */
    keepMounted?: DialogProps$1["keepMounted"];
    /**
     * `slotProps` do MUI Dialog (backdrop, paper, root, transition…).
     * Mesclado com os estilos padrão da lib (`blurBackdrop`, fonte do paper).
     */
    slotProps?: DialogProps$1["slotProps"];
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
 * @param props.disableScrollLock - Desativa scroll lock do MUI (útil ao encadear com Drawer).
 * @param props.disableEnforceFocus - Desativa enforce focus do Modal MUI.
 * @param props.disableAutoFocus - Desativa auto-focus ao abrir.
 * @param props.keepMounted - Mantém o conteúdo montado quando fechado.
 * @param props.slotProps - Slot props do MUI; mesclado com estilos padrão da lib.
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
declare function Dialog({ open, title, onClose, actions, children, maxWidth, blurBackdrop, disableScrollLock, disableEnforceFocus, disableAutoFocus, keepMounted, slotProps, }: Readonly<DialogProps>): react__default.ReactElement;

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
declare const Tabs: _emotion_styled.StyledComponent<_mui_material.TabsOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style" | "value" | "className" | "aria-label" | "aria-labelledby" | "children" | "onChange" | "sx" | "classes" | "slots" | "slotProps" | "variant" | "action" | "allowScrollButtonsMobile" | "centered" | "indicatorColor" | "orientation" | "scrollButtons" | "selectionFollowsFocus" | "textColor" | "visibleScrollbar"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & TabColorProps, {}, {}>;
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
declare const Tab: _emotion_styled.StyledComponent<_mui_material.TabOwnProps & Omit<_mui_material.ButtonBaseOwnProps, keyof _mui_material.TabOwnProps> & Omit<_mui_material.ButtonBaseOwnProps, "tabIndex" | "type" | "action" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "nativeButton" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | keyof _mui_material.TabOwnProps> & _mui_material_OverridableComponent.CommonProps & Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style" | "value" | "label" | "className" | "tabIndex" | "children" | "icon" | "sx" | "type" | "classes" | "disabled" | "action" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "nativeButton" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "iconPosition" | "wrapped"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & TabColorProps, {}, {}>;

type InputType = TextFieldProps["type"] | "cpf-cnpj" | "numeric" | "price" | "text-only" | "text-no-number" | "item-170" | "item-150";
type InputProps = Omit<TextFieldProps, "color" | "type" | "size"> & {
    /**
     * Cor do input.
     */
    color?: string;
    /**
     * Se true, exibe um botão de toggle para mostrar/ocultar a senha.
     */
    isPassword?: boolean;
    /**
     * Aceita os tipos padrão do TextField e tipos customizados do projeto.
     * Padrão: `"text"`.
     */
    type?: InputType;
    /**
     * Tamanho do campo conforme o MUI TextField.
     * Padrão: `"small"`.
     */
    size?: TextFieldProps["size"];
};

/**
 * Campo de texto baseado no MUI TextField, com máscaras e tipos customizados do projeto.
 */
declare const Input: ({ color, onChange, isPassword, type, size, ...rest }: Readonly<InputProps>) => react_jsx_runtime.JSX.Element;

/**
 * Propriedades de layout em grid para o campo do {@link InputSelect}.
 */
interface InputSelectGridProps {
    /**
     * Ordem de exibição do input.
     */
    order?: number;
    /**
     * Tamanho do grid para o input.
     */
    xs?: number;
}
/**
 * Propriedades do componente {@link InputSelect}.
 *
 * Estende o Autocomplete do MUI, substituindo `renderInput` pelo {@link Input} do projeto
 * e tipando `onChange` conforme seleção única ou múltipla.
 *
 * @template T - Tipo dos itens de opções no seletor.
 * @template M - Valor booleano que define se a seleção pode ser múltipla.
 */
interface InputSelectProps<T, M extends boolean = false> extends Omit<AutocompleteProps<T, M, boolean | undefined, boolean | undefined>, "renderInput" | "onChange" | "color"> {
    /**
     * Cor de destaque do campo (borda e label), igual ao {@link Input}.
     * Também pode ser passada em `input.color`; se ambos existirem, `input.color` prevalece.
     */
    color?: string;
    /**
     * Propriedades repassadas ao {@link Input} interno.
     * Aceita label, color, type, máscaras e demais props do TextField do projeto.
     */
    input?: InputProps & InputSelectGridProps;
    /**
     * Opções exibidas no seletor.
     */
    options: T[];
    /**
     * Retorna a string exibida como rótulo de uma opção.
     * @param data - Item da lista `options`.
     */
    optionLabel: (data: T) => string;
    /**
     * Define se o seletor permite múltiplas seleções.
     * Padrão: `false`.
     */
    multiple?: M;
    /**
     * Callback disparado quando o valor do seletor é alterado.
     * @param event - Evento que disparou a alteração.
     * @param value - Novo valor (`T | null` ou `T[]` quando `multiple`).
     * @param reason - Motivo da alteração (MUI `AutocompleteChangeReason`).
     * @param details - Detalhes adicionais da alteração (opcional).
     */
    onChange?: (event: React.SyntheticEvent, value: M extends true ? T[] : T | null, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<T>) => void;
}

/**
 * Componente InputSelect que encapsula o Autocomplete do Material-UI com o {@link Input} do projeto.
 *
 * Permite a seleção de uma ou mais opções com base nos parâmetros fornecidos.
 * É configurável via props do Autocomplete do MUI, com campo de entrada customizável
 * através de `input` (mesmas props do {@link Input}: cor, label, máscaras, etc.).
 *
 * @template T - Tipo dos itens de opções exibidos no seletor.
 * @template M - Define se o seletor permite múltiplas seleções. Padrão: `false` (seletor único).
 *
 * @param props - Propriedades do componente. Detalhes em {@link InputSelectProps}.
 * @param props.multiple - Se `true`, permite selecionar várias opções. Padrão: `false`.
 * @param props.optionLabel - Função que recebe uma opção e retorna o rótulo exibido.
 * @param props.onChange - Callback ao alterar o valor (evento, valor, motivo e detalhes).
 * @param props.color - Cor de destaque (borda e label), igual ao {@link Input}.
 * @param props.input - Props repassadas ao {@link Input} interno (label, color, type, etc.).
 * @param props.options - Lista de opções disponíveis no seletor.
 * @param props.rest - Demais props do Autocomplete do MUI (exceto `renderInput` e `onChange`).
 *
 * @returns Autocomplete com campo de entrada personalizado.
 *
 * @example
 * ```tsx
 * const options = [
 *   { id: 1, label: "Opção 1" },
 *   { id: 2, label: "Opção 2" },
 * ];
 *
 * <InputSelect
 *   options={options}
 *   optionLabel={(option) => option.label}
 *   input={{ label: "Selecione", color: "#00b2a6" }}
 *   onChange={(_event, value) => console.log("Valor selecionado:", value)}
 *   multiple
 * />
 * ```
 */
declare function InputSelect<T, M extends boolean = false>({ input, color, style, slotProps, multiple, onChange, optionLabel, noOptionsText, ...rest }: Readonly<InputSelectProps<T, M>>): react_jsx_runtime.JSX.Element;

/**
 * Propriedades do componente {@link FilterCard}.
 */
interface FilterCardProps {
    /** Título do cartão de filtros. */
    title?: string;
    /** Indica se o botão de filtros deve ser exibido. */
    renderFilter: boolean;
    /** Controla a abertura do drawer de filtros. */
    setOpen: Dispatch<SetStateAction<boolean>>;
}
/**
 * {@link Input} no grid do drawer de filtros.
 * Inclui `order` e `xs` para posicionamento no grid responsivo.
 */
type FilterInputProps = InputProps & InputSelectGridProps;
/**
 * {@link InputSelect} tipado no grid do drawer.
 * Use {@link filterInputSelect} para inferir `T` por campo sem casts.
 */
type FilterInputSelectItem<T, M extends boolean = false> = InputSelectProps<T, M> & InputSelectGridProps;
/**
 * Campo {@link InputSelect} no drawer com tipos heterogêneos.
 * Cada item pode ter `options` de um tipo diferente na mesma lista.
 */
type FilterInputSelectField<M extends boolean = false> = InputSelectProps<unknown, M> & InputSelectGridProps;
/**
 * Lista de campos {@link InputSelect} no drawer.
 * Cada item pode ter tipo de opção e seleção única/múltipla diferentes.
 */
type FilterInputSelectProps = (FilterInputSelectField<false> | FilterInputSelectField<true>)[];
/** Campo do drawer: {@link Input} ou {@link InputSelect}. */
type FilterDrawerField = FilterInputProps | FilterInputSelectField<false> | FilterInputSelectField<true>;
/**
 * Propriedades do componente {@link FilterDrawer}.
 */
interface FilterDrawerProps {
    /** Drawer aberto. */
    open?: boolean;
    /** Controla a abertura do drawer. */
    setOpen: Dispatch<SetStateAction<boolean>>;
    /** Campos {@link Input}. */
    inputs?: FilterInputProps[];
    /** Campos {@link InputSelect}. */
    inputSelect?: FilterInputSelectProps;
    /** Callback ao limpar filtros. */
    onClear?: () => void;
    /** Callback ao submeter o formulário de filtros. */
    onSubmit?: SubmitEventHandler<HTMLFormElement>;
}
/**
 * Propriedades do componente {@link Filter}.
 *
 * Combina título do card com campos e callbacks do drawer.
 */
interface FilterProps extends Omit<FilterCardProps, "renderFilter" | "setOpen">, Omit<FilterDrawerProps, "open" | "setOpen"> {
}

/**
 * Filtro com card de título e drawer contendo {@link Input} e {@link InputSelect}.
 *
 * O card exibe o título da página/relatório e um botão para abrir o drawer quando
 * há campos em `inputs` ou `inputSelect`. O drawer renderiza os campos em grid
 * responsivo, com ações de limpar e pesquisar.
 *
 * @param props - Propriedades do componente. Detalhes em {@link FilterProps}.
 * @param props.title - Título exibido no card.
 * @param props.inputs - Campos de texto/máscara ({@link Input}).
 * @param props.inputSelect - Campos de seleção ({@link InputSelect}).
 * @param props.onClear - Callback ao limpar filtros.
 * @param props.onSubmit - Callback ao pesquisar.
 * @returns Elemento React com card e drawer de filtros.
 */
declare const Filter: ({ title, inputs, onClear, onSubmit, inputSelect, }: FilterProps) => ReactElement;

/**
 * Define um campo {@link InputSelect} no filter preservando a inferência de `T`.
 * Permite montar listas com tipos de opção diferentes sem union nem `as`.
 *
 * @example
 * filterInputSelect({
 *   options: networks,
 *   optionLabel: (v) => v.desRede,
 *   input: { label: "Rede" },
 *   order: 1,
 * })
 */
declare function filterInputSelect<T extends object, M extends boolean = false>(props: InputSelectProps<T, M> & InputSelectGridProps): M extends true ? FilterInputSelectField<true> : FilterInputSelectField<false>;

/**
 * Variante visual do grupo de botões.
 * - `outline`: fundo branco
 * - `soft`: fundo cinza claro
 */
type ButtonQuantityModel = "outline" | "soft";
/**
 * Tamanho pré-definido do controle.
 * - `sm`: compacto
 * - `md`: padrão
 * - `lg`: maior
 */
type ButtonQuantitySize = "sm" | "md" | "lg";

/**
 * Propriedades do componente {@link ButtonQuantity}.
 * Controle de quantidade com diminuir, input e aumentar.
 */
interface ButtonQuantityProps {
    /** Valor atual da quantidade (controlado). */
    readonly quantity: number;
    /**
     * Valor mínimo permitido.
     * @default 0
     */
    readonly minValue?: number;
    /** Valor máximo permitido. Sem limite quando omitido. */
    readonly maxValue?: number;
    /**
     * Incremento/decremento dos botões.
     * @default 1
     */
    readonly step?: number;
    /** Desabilita botões e input. */
    readonly disabled?: boolean;
    /**
     * Variante visual do grupo.
     * @default "outline"
     */
    readonly model?: ButtonQuantityModel;
    /**
     * Tamanho pré-definido do controle.
     * Sobrescrito por `height`, `buttonWidth` e `inputWidth` quando informados.
     * @default "md"
     */
    readonly size?: ButtonQuantitySize;
    /**
     * Raio da borda do grupo (px ou string CSS).
     * @default 80
     */
    readonly radius?: number | string;
    /**
     * Altura do grupo (px).
     * Quando omitido, usa o valor de `size`.
     */
    readonly height?: number;
    /**
     * Largura dos botões de ação (px).
     * Quando omitido, usa o valor de `size`.
     */
    readonly buttonWidth?: number;
    /**
     * Largura da área do input (px).
     * Quando omitido, usa o valor de `size`.
     */
    readonly inputWidth?: number;
    /** Classes CSS extras no container do grupo. */
    readonly className?: string;
    /** Ícone do botão diminuir. Padrão: `FaMinus`. */
    readonly decreaseIcon?: React.ReactNode;
    /** Ícone do botão aumentar. Padrão: `FaPlus`. */
    readonly increaseIcon?: React.ReactNode;
    /**
     * Cor Mantine dos botões de ação.
     * @default "gray.0"
     */
    readonly color?: string;
    /**
     * Cor/fundo Mantine da área do input.
     * Quando omitido, usa o mesmo valor de `color`.
     * @default color
     */
    readonly sectionBg?: string;
    /**
     * `aria-label` do botão diminuir.
     * @default "Diminuir quantidade"
     */
    readonly decreaseLabel?: string;
    /**
     * `aria-label` do botão aumentar.
     * @default "Aumentar quantidade"
     */
    readonly increaseLabel?: string;
    /**
     * Impede que cliques no controle propaguem para o pai
     * (útil dentro de cards clicáveis).
     * @default true
     */
    readonly stopPropagation?: boolean;
    /** `name` do input interno. */
    readonly name?: string;
    /** `id` do input interno. Gerado automaticamente quando omitido. */
    readonly id?: string;
    /**
     * Callback ao diminuir.
     * Se omitido e `onChangeQuantity` existir, aplica `quantity - step`.
     */
    readonly onDecrease?: () => void;
    /**
     * Callback ao aumentar.
     * Se omitido e `onChangeQuantity` existir, aplica `quantity + step`.
     */
    readonly onIncrease?: () => void;
    /**
     * Callback ao confirmar valor digitado (blur/Enter)
     * ou ao usar os botões quando `onDecrease`/`onIncrease` não forem passados.
     */
    readonly onChangeQuantity?: (value: number) => void;
}

/**
 * Controle de quantidade com botões de diminuir/aumentar e input numérico.
 *
 * @param props - Propriedades do componente. Detalhes em {@link ButtonQuantityProps}.
 *
 * @example
 * ```tsx
 * <ButtonQuantity
 *   quantity={qty}
 *   maxValue={10}
 *   onChangeQuantity={setQty}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <ButtonQuantity
 *   model="soft"
 *   radius={10}
 *   quantity={qty}
 *   onDecrease={() => setQty((v) => v - 1)}
 *   onIncrease={() => setQty((v) => v + 1)}
 * />
 * ```
 */
declare function ButtonQuantity({ quantity, minValue, maxValue, step, disabled, model, size, radius, height, buttonWidth, inputWidth, className, decreaseIcon, increaseIcon, color, sectionBg, decreaseLabel, increaseLabel, stopPropagation, name, id, onDecrease, onIncrease, onChangeQuantity, }: Readonly<ButtonQuantityProps>): react_jsx_runtime.JSX.Element;

/**
 * Raio dos cantos do drawer flutuante.
 * Tokens Tailwind (`sm` … `5xl`, `full`) ou valor CSS (`16`, `"16px"`, `"1.5rem"`).
 */
type DrawerRounded = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full" | number | (string & {});
/**
 * Intensidade do desfoque do overlay.
 * Tokens (`none` … `3xl`), número em px (`8`) ou CSS (`"8px"`, `"0.5rem"`).
 */
type DrawerOverlayBlur = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | number | (string & {});
/**
 * Props do root composto {@link Drawer}.
 * Estende as props do `Drawer.Root` do Base UI e adiciona helpers de UI
 * (`showSwipeHandle`, `floating`, `rounded`, `overlayBlur`).
 */
type DrawerProps = Drawer$1.Root.Props & {
    /**
     * Quando `true`, o {@link DrawerContent} renderiza um {@link DrawerSwipeHandle}
     * no topo (ou na lateral, conforme `swipeDirection`).
     * @default false
     */
    showSwipeHandle?: boolean;
    /**
     * Quando `true`, o painel flutua com margem nas bordas (não encosta na tela),
     * cantos arredondados e sem o bleed branco do swipe.
     * Mutuamente exclusivo com `snapPoints` — se houver snap, `floating` é ignorado.
     * @default false
     */
    floating?: boolean;
    /**
     * Raio dos cantos quando `floating` está ativo.
     * Tokens: `none` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl` | `4xl` | `5xl` | `full`.
     * Ou número em px (`24`) / string CSS (`"1.5rem"`).
     * @default "3xl"
     */
    rounded?: DrawerRounded;
    /**
     * Desfoque do overlay/backdrop.
     * Tokens: `none` | `xs` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl`.
     * Ou número em px (`12`) / string CSS (`"8px"`).
     * @default "md" (8px)
     */
    overlayBlur?: DrawerOverlayBlur;
    /**
     * Ativa snap points estilo iOS (bottom sheet em 30% e 90% da altura).
     * Atalho para `snapPoints={[0.3, 0.9]}`; ignorado se `snapPoints` for informado.
     * Mutuamente exclusivo com `floating`. Com snap, o handle de swipe vem ligado por padrão.
     * @default false
     */
    points?: boolean;
    /**
     * Quando `true`, o overlay fica sempre com escurecimento/blur completos (estilo modal),
     * mesmo com `snapPoints`. Sem isso, snap points seguem o comportamento iOS: o fundo
     * fica mais claro conforme o drawer sobe.
     * @default false
     */
    overlayModal?: boolean;
};
/**
 * Props do trigger que abre o drawer.
 * Use `render` para compor com um botão customizado (API Base UI).
 */
type DrawerTriggerProps = Drawer$1.Trigger.Props;
/**
 * Props do portal do drawer.
 */
type DrawerPortalProps = Drawer$1.Portal.Props;
/**
 * Props do botão/ação que fecha o drawer.
 * Use `render` para compor com um botão customizado (API Base UI).
 */
type DrawerCloseProps = Drawer$1.Close.Props;
/**
 * Props do overlay (backdrop) do drawer.
 */
type DrawerOverlayProps = Drawer$1.Backdrop.Props & {
    /**
     * Desfoque do overlay. Se omitido, usa o `overlayBlur` do {@link Drawer} root.
     */
    overlayBlur?: DrawerOverlayBlur;
    /**
     * Overlay modal completo. Se omitido, usa o `overlayModal` do {@link Drawer} root.
     */
    overlayModal?: boolean;
};
/**
 * Props do popup/conteúdo principal do drawer.
 * Aceita `className` para sobrescrever altura (`h-*`, `max-h-*`) ou largura (`w-*`, `max-w-*`).
 * `floating` / `rounded` / `overlayBlur` sobrescrevem o valor herdado do {@link Drawer} root quando informados.
 */
type DrawerContentProps = Drawer$1.Popup.Props & {
    /**
     * Quando `true`, aplica o visual flutuante neste content.
     * Se omitido, usa o `floating` do {@link Drawer} root.
     */
    floating?: boolean;
    /**
     * Raio dos cantos quando flutuante.
     * Se omitido, usa o `rounded` do {@link Drawer} root.
     * @default "3xl"
     */
    rounded?: DrawerRounded;
    /**
     * Desfoque do overlay. Se omitido, usa o `overlayBlur` do {@link Drawer} root.
     */
    overlayBlur?: DrawerOverlayBlur;
    /**
     * Overlay modal completo. Se omitido, usa o `overlayModal` do {@link Drawer} root.
     */
    overlayModal?: boolean;
};
/**
 * Props do handle visual de swipe (barra de arraste).
 */
type DrawerSwipeHandleProps = ComponentProps<"div">;
/**
 * Props do cabeçalho do drawer (título + descrição).
 */
type DrawerHeaderProps = ComponentProps<"div">;
/**
 * Props do rodapé do drawer (ações / botões).
 */
type DrawerFooterProps = ComponentProps<"div">;
/**
 * Props do título acessível do drawer.
 */
type DrawerTitleProps = Drawer$1.Title.Props;
/**
 * Props da descrição acessível do drawer.
 */
type DrawerDescriptionProps = Drawer$1.Description.Props;

/**
 * Root do Drawer composto (Base UI). Controla open state, swipe, snap points e modal.
 *
 * @param props - Propriedades do root. Detalhes em {@link DrawerProps}.
 * @param props.open - Modo controlado: se o drawer está aberto.
 * @param props.onOpenChange - Callback ao abrir/fechar (dispara no início da transição).
 * @param props.onOpenChangeComplete - Callback após a animação de abrir/fechar terminar — use ao encadear outro modal.
 * @param props.swipeDirection - Direção do swipe. Padrão: `"down"` (bottom sheet).
 * @param props.snapPoints - Alturas de snap (frações 0–1, px ou rem).
 * @param props.points - Ativa snap points iOS (`[0.3, 0.9]`). Atalho de `snapPoints`.
 * @param props.showSwipeHandle - Renderiza handle de arraste no conteúdo. Padrão: `false` (ou `true` com snap).
 * @param props.floating - Painel flutuante com margem nas bordas. Padrão: `false`.
 * @param props.rounded - Raio dos cantos quando flutuante (`3xl`, `24`, `"1.5rem"`…). Padrão: `"3xl"`.
 * @param props.overlayBlur - Desfoque do overlay (`md`, `12`, `"8px"`…). Padrão: `"md"` (8px).
 * @param props.overlayModal - Overlay sempre escurecido (estilo modal), mesmo com snap points. Padrão: `false`.
 * @param props.modal - Modalidade (`true` | `false` | `"trap-focus"`). Padrão: `true`. Com `"trap-focus"`, trava foco sem scroll lock nem overlay (útil ao abrir outro modal em seguida).
 * @param props.disablePointerDismissal - Impede fechar ao clicar fora.
 *
 * @example
 * ```tsx
 * <Drawer floating rounded="2xl" overlayBlur="lg">
 *   <DrawerTrigger render={<button type="button" />}>Abrir</DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Título</DrawerTitle>
 *       <DrawerDescription>Descrição</DrawerDescription>
 *     </DrawerHeader>
 *     <div className="flex-1 overflow-y-auto p-4">Conteúdo</div>
 *     <DrawerFooter>
 *       <DrawerClose render={<button type="button" />}>Fechar</DrawerClose>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </Drawer>
 * ```
 *
 * @example
 * ```tsx
 * <Drawer points overlayModal>
 *   <DrawerTrigger render={<button type="button" />}>Snap</DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Snap points</DrawerTitle>
 *     </DrawerHeader>
 *   </DrawerContent>
 * </Drawer>
 * ```
 */
declare function Drawer({ modal, showSwipeHandle, floating, rounded, overlayBlur, overlayModal, points, snapPoints, swipeDirection, ...props }: Readonly<DrawerProps>): react_jsx_runtime.JSX.Element;
/**
 * Elemento que abre o drawer. Prefira `render` para compor com botões customizados.
 */
declare function DrawerTrigger(props: Readonly<DrawerTriggerProps>): react_jsx_runtime.JSX.Element;
/**
 * Portal do drawer (uso avançado; já incluso em {@link DrawerContent}).
 */
declare function DrawerPortal(props: Readonly<DrawerPortalProps>): react_jsx_runtime.JSX.Element;
/**
 * Fecha o drawer. Prefira `render` para compor com botões customizados.
 */
declare function DrawerClose(props: Readonly<DrawerCloseProps>): react_jsx_runtime.JSX.Element;
/**
 * Overlay/backdrop do drawer (uso avançado; já incluso em {@link DrawerContent} quando `modal`).
 * Padrão: `bg-black/40` + blur `md` (8px). Sobrescreva com `overlayBlur`.
 */
declare function DrawerOverlay({ className, style, overlayBlur: overlayBlurProp, overlayModal: overlayModalProp, ...props }: Readonly<DrawerOverlayProps>): react_jsx_runtime.JSX.Element;
/**
 * Handle visual de swipe. Também pode ser renderizado via `showSwipeHandle` no root.
 */
declare function DrawerSwipeHandle({ className, ...props }: Readonly<DrawerSwipeHandleProps>): react_jsx_runtime.JSX.Element;
/**
 * Conteúdo do drawer: compõe portal, overlay, viewport e popup.
 * Para área scrollável, use um filho `flex-1 overflow-y-auto` (evite `h-full`).
 * Com `floating` (ou `floating` no root), o painel fica com margem e cantos arredondados.
 */
declare function DrawerContent({ className, children, floating: floatingProp, rounded: roundedProp, overlayBlur: overlayBlurProp, overlayModal: overlayModalProp, style, ...props }: Readonly<DrawerContentProps>): react_jsx_runtime.JSX.Element;
/**
 * Cabeçalho do drawer (título + descrição).
 */
declare function DrawerHeader({ className, ...props }: Readonly<DrawerHeaderProps>): react_jsx_runtime.JSX.Element;
/**
 * Rodapé do drawer (ações / botões).
 */
declare function DrawerFooter({ className, ...props }: Readonly<DrawerFooterProps>): react_jsx_runtime.JSX.Element;
/**
 * Título acessível do drawer.
 */
declare function DrawerTitle({ className, ...props }: Readonly<DrawerTitleProps>): react_jsx_runtime.JSX.Element;
/**
 * Descrição acessível do drawer.
 */
declare function DrawerDescription({ className, ...props }: Readonly<DrawerDescriptionProps>): react_jsx_runtime.JSX.Element;

export { ButtonQuantity, type ButtonQuantityModel, type ButtonQuantityProps, type ButtonQuantitySize, Card, type CardClassName, type CardProps, DataTable, type DataTableProps, Dialog, type DialogProps, Drawer, DrawerClose, type DrawerCloseProps, DrawerContent, type DrawerContentProps, DrawerDescription, type DrawerDescriptionProps, DrawerFooter, type DrawerFooterProps, DrawerHeader, type DrawerHeaderProps, DrawerOverlay, type DrawerOverlayBlur, type DrawerOverlayProps, DrawerPortal, type DrawerPortalProps, type DrawerProps, type DrawerRounded, DrawerSwipeHandle, type DrawerSwipeHandleProps, DrawerTitle, type DrawerTitleProps, DrawerTrigger, type DrawerTriggerProps, Filter, type FilterCardProps, type FilterDrawerField, type FilterDrawerProps, type FilterInputProps, type FilterInputSelectField, type FilterInputSelectItem, type FilterInputSelectProps, type FilterProps, Input, type InputProps, InputSelect, type InputSelectGridProps, type InputSelectProps, type InputType, Tab, type TabColorProps, type TabProps, Tabs, type TabsProps, filterInputSelect };
