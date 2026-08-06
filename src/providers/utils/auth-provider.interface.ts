/**
 * Valor exposto pelo contexto de autenticação via {@link useAuth}.
 */
export interface AuthContextValue {
  /** Indica se existe um token válido (`true` quando `token` não é vazio). */
  readonly isAuthenticated: boolean;

  /** Token de autenticação atual, ou `null` quando ausente. */
  readonly token: string | null;
}

/**
 * Propriedades do {@link AuthProvider}.
 */
export interface AuthProviderProps {
  /** Conteúdo envolvido pelo provider. */
  readonly children: React.ReactNode;

  /**
   * Token de autenticação.
   * Quando informado, `isAuthenticated` passa a ser `true`.
   */
  readonly token?: string | null;
}

/**
 * Propriedades do exemplo do Storybook do {@link AuthProvider}.
 */
export interface AuthProviderExampleProps {
  /** Token usado apenas para exibição no exemplo. */
  readonly token?: string | null;
}
