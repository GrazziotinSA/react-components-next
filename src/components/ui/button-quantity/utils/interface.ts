import type { ButtonQuantityModel, ButtonQuantitySize } from "./constants";

/**
 * Propriedades do componente {@link ButtonQuantity}.
 * Controle de quantidade com diminuir, input e aumentar.
 */
export interface ButtonQuantityProps {
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
