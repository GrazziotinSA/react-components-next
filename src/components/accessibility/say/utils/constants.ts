import type { SpeechPonyfill } from "./interface";

export const SPEECH_APIS = ["speechSynthesis", "SpeechSynthesisUtterance"];

export function hasSpeechSupport(): boolean {
  return SPEECH_APIS.every((api) => api in globalThis);
}

export function voicesAreEqual(
  current: SpeechSynthesisVoice[],
  next: SpeechSynthesisVoice[],
): boolean {
  if (current.length !== next.length) return false;

  return current.every(
    (v, i) => v.name === next[i]?.name && v.lang === next[i]?.lang,
  );
}

export function getSpeechSupport(): SpeechPonyfill | null {
  if (!hasSpeechSupport()) return null;

  return {
    speechSynthesis: globalThis.speechSynthesis,
    SpeechSynthesisUtterance: globalThis.SpeechSynthesisUtterance,
  };
}

export const DEFAULT_SAY_VOICE = "Google português do Brasil";
export const DEFAULT_SAY_RATE = 1.4;
export const DEFAULT_SAY_PITCH = 0.8;
export const DEFAULT_SAY_VOLUME = 1;
export const DEFAULT_SAY_NOTIFY_AUTO_CLOSE = 1500;
export const DEFAULT_SAY_VIBRATE_DURATION = 500;

export function defaultShouldVibrate(
  type?: import("./interface").SayFeedbackType | false,
): boolean {
  return !type || type === "warning";
}

const sayConstants = `
Sintetiza texto em fala via Web Speech API (\`react-say\`), com hook \`useSay\` para notificação e vibração.

**Importação:**
\`\`\`tsx
import { Say, useSay } from "@grazziotin/react-components-next/accessibility";
\`\`\`

**Uso básico:**
\`\`\`tsx
const { say, isSpeaking, textSpeaking, setIsSpeaking } = useSay({
  onNotify: (text, { type }) => toast(text, { type }),
});

<>
  <Say
    isSpeaking={isSpeaking}
    text={textSpeaking}
    setIsSpeaking={setIsSpeaking}
  />
  <button type="button" onClick={() => say("Operação concluída")}>
    Falar
  </button>
</>
\`\`\`

Requer suporte a \`speechSynthesis\` no navegador. A voz padrão é \`Google português do Brasil\`.
`;

export default sayConstants;
