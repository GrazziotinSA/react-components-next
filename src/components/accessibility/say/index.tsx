"use client";

import {
  DEFAULT_SAY_PITCH,
  DEFAULT_SAY_RATE,
  DEFAULT_SAY_VOICE,
  DEFAULT_SAY_VOLUME,
} from "./utils/constants";
import SayEngine from "react-say";
import React, { useCallback } from "react";
import type { SayProps } from "./utils/interface";
import { useSpeechPonyfill } from "./use-speech-ponyfill";

/**
 * Sintetiza texto em fala via Web Speech API (`react-say`).
 * Não monta toast — o app deve exibir notificações via {@link useSay} `onNotify`.
 *
 * @example
 * ```tsx
 * const { handleSay, isSpeaking, textSpeaking, setIsSpeaking } = useSay({
 *   onNotify: (text, { type, autoClose }) => toast(text, { type, autoClose }),
 * });
 *
 * return (
 *   <>
 *     <ToastContainer />
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
function Say({
  text,
  onEnd,
  onStart,
  isSpeaking,
  setIsSpeaking,
  rate = DEFAULT_SAY_RATE,
  voice = DEFAULT_SAY_VOICE,
  pitch = DEFAULT_SAY_PITCH,
  volume = DEFAULT_SAY_VOLUME,
}: Readonly<SayProps>): React.ReactElement | null {
  const { voices, ponyfill } = useSpeechPonyfill();
  const canSpeak = isSpeaking && voices.length > 0 && ponyfill;

  const handleEnd = useCallback(() => {
    setIsSpeaking(false);
    onEnd?.();
  }, [setIsSpeaking, onEnd]);

  if (!canSpeak) return null;

  return (
    <SayEngine
      text={text}
      rate={rate}
      pitch={pitch}
      volume={volume}
      onEnd={handleEnd}
      onStart={onStart}
      ponyfill={ponyfill}
      voice={voices.find((v) => v.name === voice)}
    />
  );
}
export default Say;
