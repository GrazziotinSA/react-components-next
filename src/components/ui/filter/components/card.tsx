import type { ReactElement } from "react";
import { FaFilter } from "react-icons/fa";
import { ActionIcon, Tooltip } from "@mantine/core";
import type { FilterCardProps } from "../utils/interface";

/**
 * Card de título com botão para abrir o drawer de filtros.
 *
 * Exibe uma faixa colorida à esquerda, o título da página/relatório e, quando
 * `renderFilter` é verdadeiro, um ícone de filtro com tooltip "Ver filtros".
 *
 * @param props - Propriedades do componente. Detalhes em {@link FilterCardProps}.
 * @param props.title - Título exibido no card.
 * @param props.renderFilter - Indica se o botão de filtros deve ser exibido.
 * @param props.setOpen - Controla a abertura do drawer de filtros.
 */
const FilterCard = ({
  title,
  setOpen,
  renderFilter,
}: FilterCardProps): ReactElement => {
  return (
    <div className="h-15 flex items-center w-full bg-white mb-2 rounded-md shadow-[0_2px_6px_-1px_rgba(0,0,0,.16),0_6px_18px_-1px_rgba(0,0,0,.06)]">
      <div className="h-full w-2 bg-(--primary-color) rounded-tl-md rounded-bl-md" />
      <div className="w-full flex justify-between items-center p-3">
        <h1 className="font-medium text-lg whitespace-nowrap text-ellipsis overflow-hidden ml-1 text-black/80">
          {title}
        </h1>
        <div className="flex items-center space-x-4">
          {renderFilter && (
            <Tooltip
              withArrow
              arrowSize={4}
              color="#00b2a6"
              arrowOffset={20}
              label="Ver filtros"
              className="text-xs!"
              transitionProps={{ transition: "pop", duration: 300 }}
            >
              <span className="flex items-center">
                <ActionIcon
                  size={40}
                  radius="md"
                  aria-label="Ver filtros"
                  color="var(--primary-color)"
                  onClick={() => setOpen(true)}
                >
                  <FaFilter className="h-5 w-5 text-white" />
                </ActionIcon>
              </span>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
