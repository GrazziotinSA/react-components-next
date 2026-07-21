import type { CSSProperties } from "@mui/material";
import type { ComponentPropsWithoutRef } from "react";

/**
 * Tipo do atributo nativo `className` de um elemento `div` no React.
 * Equivalente a `React.HTMLAttributes<HTMLDivElement>["className"]`.
 */
export type CardClassName = ComponentPropsWithoutRef<"div">["className"];

/**
 * Tipo do atributo nativo `className` de um elemento `span` no React.
 */
export type CardTitleClassName = NonNullable<
  ComponentPropsWithoutRef<"span">["className"]
>;

/**
 * Propriedades do componente {@link Card}.
 * O Card é um container com cabeçalho opcional (título, ícone) e área de conteúdo.
 * Estilos dinâmicos são aplicados via MUI `Box`; classes utilitárias podem ser
 * combinadas com `className` e a função `cn`.
 */
export interface CardProps {
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
