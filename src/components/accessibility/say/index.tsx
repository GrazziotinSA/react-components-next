"use client";

import {
  DEFAULT_SAY_PITCH,
  DEFAULT_SAY_RATE,
  DEFAULT_SAY_VOICE,
  DEFAULT_SAY_VOLUME,
} from "./utils/constants";
import SayEngine from "react-say";
export { useSay } from "./use-say";
import React, { useCallback } from "react";
import type { SayProps } from "./utils/interface";
import { useSpeechPonyfill } from "./use-speech-ponyfill";

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

  const handleEnd = useCallback(() => {
    setIsSpeaking(false);
    onEnd?.();
  }, [setIsSpeaking, onEnd]);

  if (!isSpeaking || voices.length === 0 || !ponyfill) return null;

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
