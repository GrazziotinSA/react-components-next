import {
  voicesAreEqual,
  getSpeechSupport,
  hasSpeechSupport,
} from "./utils/constants";

import { useEffect, useMemo, useState } from "react";

export function useSpeechPonyfill() {
  const ponyfill = useMemo(() => getSpeechSupport(), []);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (!hasSpeechSupport()) return;
    const synthesis = globalThis.speechSynthesis;

    const updateVoices = () => {
      setVoices((current) => {
        const next = synthesis.getVoices();
        return voicesAreEqual(current, next) ? current : next;
      });
    };

    synthesis.onvoiceschanged = updateVoices;
    updateVoices();

    return () => {
      synthesis.onvoiceschanged = null;
    };
  }, []);

  return { voices, ponyfill };
}
