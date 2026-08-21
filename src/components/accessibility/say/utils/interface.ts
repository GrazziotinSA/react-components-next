export type SayFeedbackType =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "default";

export interface SayNotifyOptions {
  type?: SayFeedbackType;
  autoClose?: number;
}

/**
 * Handler de notificação injetado pelo app.
 * O Say/useSay não monta `ToastContainer` — o app é dono do toast.
 */
export type SayNotifyHandler = (
  text: string,
  options: SayNotifyOptions,
) => void;

export interface SayCallOptions {
  /** Tipo do feedback (toast / notificação). */
  type: SayFeedbackType;

  /**
   * Dispara notificação via `onNotify` do hook.
   * Padrão: `true`. Sem efeito se `onNotify` não for informado.
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

export interface UseSayOptions {
  /**
   * Callback de notificação (ex.: `toast` do react-toastify).
   * O app deve montar o `ToastContainer` no layout — nunca no Say.
   */
  onNotify?: SayNotifyHandler;

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

export interface UseSayReturn {
  /**
   * Dispara fala, notificação (quando `notify !== false` e há `onNotify`) e vibração.
   * @param text - Texto falado.
   * @param options - Controle de notificação, vibração e tipo do feedback.
   */
  isSpeaking: boolean;
  textSpeaking: string;
  setIsSpeaking: React.Dispatch<React.SetStateAction<boolean>>;
  handleSay: (text: string, options: SayCallOptions) => void;
}

export interface SayProps {
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
export interface SpeechPonyfill {
  speechSynthesis: SpeechSynthesis;
  SpeechSynthesisUtterance: typeof SpeechSynthesisUtterance;
}
