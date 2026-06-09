import react__default from 'react';

type SayFeedbackType = "info" | "success" | "warning" | "error" | "default";
interface SayNotifyOptions {
    type?: SayFeedbackType;
    autoClose?: number;
}
interface SayCallOptions {
    /**
     * Tipo de feedback.  desativa notificação.
     * Padrão:  (via  do hook).
     */
    type?: SayFeedbackType | false;
    /**
     * Exibe notificação via .
     * Padrão: .
     */
    notify?: boolean;
    /**
     * Dispara vibração conforme .
     * Padrão: .
     */
    vibrate?: boolean;
    /** Duração da notificação em ms (repasse para ). */
    autoClose?: number;
}
interface UseSayOptions {
    /**
     * Callback de notificação visual (ex.: toast).
     * Omitir para não exibir notificação.
     */
    onNotify?: (text: string, options: SayNotifyOptions) => void;
    /**
     * Tipo padrão da notificação.
     * Padrão: .
     */
    defaultNotifyType?: SayFeedbackType;
    /**
     * Auto-close padrão da notificação em ms.
     * Padrão: .
     */
    defaultNotifyAutoClose?: number;
    /**
     * Duração padrão da vibração em ms.
     * Padrão: .
     */
    vibrateDuration?: number;
    /**
     * Define se deve vibrar para o  informado.
     * Padrão:  ( quando  é omitido ou ).
     */
    shouldVibrate?: (type?: SayFeedbackType | false) => boolean;
}
interface UseSayReturn {
    say: (text: string, options?: SayCallOptions) => void;
    isSpeaking: boolean;
    textSpeaking: string;
    setIsSpeaking: React.Dispatch<React.SetStateAction<boolean>>;
}
interface SayProps {
    isSpeaking: boolean;
    text: string;
    setIsSpeaking: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Nome da voz do .
     * Padrão: .
     */
    voice?: string;
    /**
     * Velocidade da fala.
     * Padrão: .
     */
    rate?: number;
    /**
     * Tom da voz.
     * Padrão: .
     */
    pitch?: number;
    /**
     * Volume da fala.
     * Padrão: .
     */
    volume?: number;
    onEnd?: () => void;
    onStart?: () => void;
}

/**
 * Hook para disparar fala, notificação e vibração de forma configurável.
 *
 * @example
 * ```tsx
 * const { say, isSpeaking, textSpeaking, setIsSpeaking } = useSay({
 *   onNotify: (text, { type }) => toast(text, { type }),
 * });
 *
 * <Say
 *   isSpeaking={isSpeaking}
 *   text={textSpeaking}
 *   setIsSpeaking={setIsSpeaking}
 * />
 *
 * <button type="button" onClick={() => say("Operação concluída")}>
 *   Falar
 * </button>
 * ```
 */
declare function useSay({ onNotify, defaultNotifyType, vibrateDuration, defaultNotifyAutoClose, shouldVibrate, }?: UseSayOptions): UseSayReturn;

/**
 * Sintetiza texto em fala via Web Speech API (`react-say`).
 * Use com {@link useSay} para controlar `isSpeaking`, `text` e `setIsSpeaking`.
 *
 * @example
 * ```tsx
 * const { say, isSpeaking, textSpeaking, setIsSpeaking } = useSay({
 *   onNotify: (text, { type }) => toast(text, { type }),
 * });
 *
 * return (
 *   <>
 *     <Say
 *       isSpeaking={isSpeaking}
 *       text={textSpeaking}
 *       setIsSpeaking={setIsSpeaking}
 *       voice="Google português do Brasil"
 *       rate={1.4}
 *     />
 *     <button type="button" onClick={() => say("Pronto")}>Falar</button>
 *   </>
 * );
 * ```
 */
declare function Say({ text, onEnd, onStart, isSpeaking, setIsSpeaking, rate, voice, pitch, volume, }: Readonly<SayProps>): react__default.ReactElement | null;

export { Say, type SayCallOptions, type SayFeedbackType, type SayNotifyOptions, type SayProps, type UseSayOptions, type UseSayReturn, useSay };
