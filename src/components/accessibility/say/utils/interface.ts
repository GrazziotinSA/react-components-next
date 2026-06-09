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

export interface SayCallOptions {
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

export interface UseSayOptions {
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
   * Dispara fala, toast (quando `notify !== false`) e vibração.
   * @param text - Texto falado.
   * @param options - Controle de notificação, vibração e tipo do toast.
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
