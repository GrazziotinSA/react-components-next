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

export interface UseSayOptions {
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

export interface UseSayReturn {
  say: (text: string, options?: SayCallOptions) => void;
  isSpeaking: boolean;
  textSpeaking: string;
  setIsSpeaking: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SayProps {
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

export interface SpeechPonyfill {
  speechSynthesis: SpeechSynthesis;
  SpeechSynthesisUtterance: typeof SpeechSynthesisUtterance;
}
