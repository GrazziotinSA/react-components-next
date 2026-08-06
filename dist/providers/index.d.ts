import * as react_jsx_runtime from 'react/jsx-runtime';
import { Theme } from '@mui/material';

type GrazziotinProvidersProps = {
    readonly children: React.ReactNode;
    readonly muiTheme?: Theme;
};
declare function GrazziotinProviders({ children, muiTheme, }: GrazziotinProvidersProps): react_jsx_runtime.JSX.Element;

/**
 * Valor exposto pelo contexto de autenticação via {@link useAuth}.
 */
interface AuthContextValue {
    /** Indica se existe um token válido (`true` quando `token` não é vazio). */
    readonly isAuthenticated: boolean;
    /** Token de autenticação atual, ou `null` quando ausente. */
    readonly token: string | null;
}
/**
 * Propriedades do {@link AuthProvider}.
 */
interface AuthProviderProps {
    /** Conteúdo envolvido pelo provider. */
    readonly children: React.ReactNode;
    /**
     * Token de autenticação.
     * Quando informado, `isAuthenticated` passa a ser `true`.
     */
    readonly token?: string | null;
}

/**
 * Provider de autenticação que expõe `token` e `isAuthenticated` via `useAuth`.
 * @example
 * ```tsx
 * <AuthProvider token={sessionToken}>
 *   <App />
 * </AuthProvider>
 * ```
 */
declare function AuthProvider({ children, token }: AuthProviderProps): react_jsx_runtime.JSX.Element;
/**
 * Consome o contexto de autenticação.
 * @example
 * ```tsx
 * const { isAuthenticated, token } = useAuth();
 * ```
 */
declare function useAuth(): AuthContextValue;

/**
 * Valor exposto pelo contexto de navegação via {@link useNavigation}.
 */
interface NavigationContextValue {
    /** Indica se a navegação está visível. */
    readonly showNavigation: boolean;
    /** Alterna a visibilidade da navegação. */
    readonly setShowNavigation: (value: boolean) => void;
}
/**
 * Propriedades do {@link NavigationProvider}.
 */
interface NavigationProviderProps {
    /** Conteúdo envolvido pelo provider. */
    readonly children: React.ReactNode;
}

/**
 * Provider de navegação que controla a visibilidade via `showNavigation`.
 * @example
 * ```tsx
 * <NavigationProvider>
 *   <App />
 * </NavigationProvider>
 * ```
 */
declare function NavigationProvider({ children }: NavigationProviderProps): react_jsx_runtime.JSX.Element;
/**
 * Consome o contexto de navegação.
 * Deve ser usado dentro de um {@link NavigationProvider}.
 * @example
 * ```tsx
 * const { showNavigation, setShowNavigation } = useNavigation();
 * ```
 */
declare function useNavigation(): NavigationContextValue;

export { type AuthContextValue, AuthProvider, type AuthProviderProps, GrazziotinProviders, type NavigationContextValue, NavigationProvider, type NavigationProviderProps, useAuth, useNavigation };
