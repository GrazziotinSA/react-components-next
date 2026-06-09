import {
  showSayNotify,
  defaultShouldVibrate,
  DEFAULT_SAY_VIBRATE_DURATION,
} from "./utils/constants";
import type {
  SayCallOptions,
  UseSayReturn,
  UseSayOptions,
} from "./utils/interface";
import { nvl } from "@/functions";
import { useCallback, useState } from "react";

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
export function useSay({
  notifyAutoClose = 4500,
  vibrateDuration = DEFAULT_SAY_VIBRATE_DURATION,
  shouldVibrate = defaultShouldVibrate,
}: UseSayOptions = {}): UseSayReturn {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [textSpeaking, setTextSpeaking] = useState("");

  const handleSay = useCallback(
    (text: string, options: SayCallOptions) => {
      const notify = nvl(options.notify, true);
      const vibrate = nvl(options.vibrate, true);
      const { type } = options;

      setIsSpeaking(true);
      setTextSpeaking(text);

      if (notify) {
        showSayNotify(text, {
          type,
          autoClose: nvl(options.autoClose, notifyAutoClose),
        });
      }

      if (vibrate && shouldVibrate(type) && navigator.vibrate) {
        navigator.vibrate(vibrateDuration);
      }
    },
    [shouldVibrate, vibrateDuration, notifyAutoClose],
  );

  return { handleSay, isSpeaking, textSpeaking, setIsSpeaking };
}
