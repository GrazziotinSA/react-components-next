/**
 * Valor exposto pelo contexto de navegação via {@link useNavigation}.
 */
export interface NavigationContextValue {
  /** Indica se a navegação está visível. */
  readonly showNavigation: boolean;

  /** Alterna a visibilidade da navegação. */
  readonly setShowNavigation: (value: boolean) => void;
}

/**
 * Propriedades do {@link NavigationProvider}.
 */
export interface NavigationProviderProps {
  /** Conteúdo envolvido pelo provider. */
  readonly children: React.ReactNode;
}
