import react__default from 'react';

type SayFeedbackType = "info" | "success" | "warning" | "error" | "default";
interface SayCallOptions {
    /** Tipo do toast. */
    type: SayFeedbackType;
    /**
     * Exibe notificação toast integrada.
     * Padrão: `true`.
     */
    notify?: boolean;
    /**
     * Dispara vibração conforme `shouldVibrate`.
     * Padrão: `true`.
     */
    vibrate?: boolean;
    /** Duração da notificação em ms. Padrão: `notifyAutoClose` do hook. */
    autoClose?: number;
}
interface UseSayOptions {
    /**
     * Auto-close padrão da notificação em ms.
     * Padrão: `4500`.
     */
    notifyAutoClose?: number;
    /**
     * Duração padrão da vibração em ms.
     * Padrão: `500`.
     */
    vibrateDuration?: number;
    /**
     * Define se deve vibrar para o `type` informado.
     * Padrão: vibra quando `type` é `"warning"`.
     */
    shouldVibrate?: (type: SayFeedbackType) => boolean;
}
interface UseSayReturn {
    /**
     * Dispara fala, toast (quando `notify !== false`) e vibração.
     * @param text - Texto falado.
     * @param options - Controle de notificação, vibração e tipo do toast.
     */
    isSpeaking: boolean;
    textSpeaking: string;
    setIsSpeaking: React.Dispatch<React.SetStateAction<boolean>>;
    handleSay: (text: string, options: SayCallOptions) => void;
}
interface SayProps {
    isSpeaking: boolean;
    text: string;
    setIsSpeaking: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Nome da voz do `speechSynthesis`.
     * Padrão: `"Google português do Brasil"`.
     */
    voice?: string;
    /**
     * Velocidade da fala.
     * Padrão: `1.4`.
     */
    rate?: number;
    /**
     * Tom da voz.
     * Padrão: `0.8`.
     */
    pitch?: number;
    /**
     * Volume da fala.
     * Padrão: `1`.
     */
    volume?: number;
    onEnd?: () => void;
    onStart?: () => void;
}

/**
 * Sintetiza texto em fala via Web Speech API (`react-say`).
 * Inclui toast integrado para notificações do {@link useSay}.
 *
 * @example
 * ```tsx
 * const { handleSay, isSpeaking, textSpeaking, setIsSpeaking } = useSay();
 *
 * return (
 *   <>
 *     <Say
 *       isSpeaking={isSpeaking}
 *       text={textSpeaking}
 *       setIsSpeaking={setIsSpeaking}
 *     />
 *     <button type="button" onClick={() => handleSay("Pronto", { type: "success" })}>
 *       Falar
 *     </button>
 *   </>
 * );
 * ```
 */
declare function Say({ text, onEnd, onStart, isSpeaking, setIsSpeaking, rate, voice, pitch, volume, }: Readonly<SayProps>): react__default.ReactElement;

/**
 * Hook para disparar fala, toast integrado e vibração.
 *
 * @example
 * ```tsx
 * const { handleSay, isSpeaking, textSpeaking, setIsSpeaking } = useSay();
 *
 * <Say
 *   isSpeaking={isSpeaking}
 *   text={textSpeaking}
 *   setIsSpeaking={setIsSpeaking}
 * />
 *
 * handleSay("Operação concluída", { type: "success" });
 * handleSay("Atenção", { type: "warning" });
 * handleSay("Apenas fala", { type: "default", notify: false });
 * ```
 */
declare function useSay({ notifyAutoClose, vibrateDuration, shouldVibrate, }?: UseSayOptions): UseSayReturn;

export { Say, type SayCallOptions, type SayFeedbackType, type SayProps, type UseSayOptions, type UseSayReturn, useSay };
