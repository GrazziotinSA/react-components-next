import {
  defaultShouldVibrate,
  DEFAULT_SAY_NOTIFY_AUTO_CLOSE,
  DEFAULT_SAY_VIBRATE_DURATION,
} from "./utils/constants";
import type {
  UseSayReturn,
  UseSayOptions,
  SayCallOptions,
} from "./utils/interface";
import { nvl } from "@/functions";
import { useCallback, useState } from "react";

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
export function useSay({
  onNotify,
  defaultNotifyType = "success",
  vibrateDuration = DEFAULT_SAY_VIBRATE_DURATION,
  defaultNotifyAutoClose = DEFAULT_SAY_NOTIFY_AUTO_CLOSE,
  shouldVibrate = defaultShouldVibrate,
}: UseSayOptions = {}): UseSayReturn {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [textSpeaking, setTextSpeaking] = useState("");

  const say = useCallback(
    (text: string, options?: SayCallOptions) => {
      const type = options?.type;
      const notify = nvl(options?.notify, true);
      const vibrate = nvl(options?.vibrate, true);

      setIsSpeaking(true);
      setTextSpeaking(text);

      if (notify && type !== false && onNotify) {
        onNotify(text, {
          type: nvl(type, defaultNotifyType),
          autoClose: nvl(options?.autoClose, defaultNotifyAutoClose),
        });
      }

      if (vibrate && shouldVibrate(type) && navigator.vibrate) {
        navigator.vibrate(vibrateDuration);
      }
    },
    [
      onNotify,
      shouldVibrate,
      vibrateDuration,
      defaultNotifyType,
      defaultNotifyAutoClose,
    ],
  );

  return { say, isSpeaking, textSpeaking, setIsSpeaking };
}
