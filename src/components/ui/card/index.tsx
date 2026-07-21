import { cn } from "@/functions";
import { Box } from "@mui/material";
import { Tooltip } from "@mantine/core";
import type { CardProps } from "./utils/interface";

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
function Card({
  margin,
  onClick,
  title,
  toolTip,
  className,
  borderTitle,
  children,
  borderRadius,
  width = "100%",
  height = "auto",
  titleWidth = "100%",
  titleClassName,
  justifyContent = "space-between",
  titleColor = "var(--primary-color)",
  icon,
}: Readonly<CardProps>): React.ReactElement {
  return (
    <Box
      onClick={onClick}
      className={cn(className, "text-sm!")}
      sx={{
        width,
        margin,
        height,
        borderRadius,
        "@media (max-width: 768px)": { width: "100%" },
        boxShadow: "0 0.15rem 0.5rem rgba(0, 0, 0, 0.16)",
        ...(onClick && { cursor: "pointer !important" }),
      }}
    >
      <Box
        sx={{
          justifyContent,
          height: "24px",
          color: "white",
          display: "flex",
          width: titleWidth,
          overflow: "hidden",
          padding: "0px 15px",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: borderTitle,
          backgroundColor: titleColor,
        }}
      >
        <span className="min-w-0 flex-1 font-semibold! truncate!">
          <Tooltip
            withArrow
            radius="md"
            label={title}
            arrowSize={6}
            position="top"
            arrowOffset={15}
            disabled={!toolTip}
            color={titleColor}
            classNames={{ tooltip: "text-xs!" }}
            offset={{ mainAxis: 11, crossAxis: -21 }}
            transitionProps={{ transition: "fade", duration: 100 }}
          >
            <span className={cn("block! truncate!", titleClassName)}>
              {title}
            </span>
          </Tooltip>
        </span>
        <div>{icon}</div>
      </Box>
      {children}
    </Box>
  );
}
export default Card;
