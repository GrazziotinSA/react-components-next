import type {
  SayFeedbackType,
  SayNotifyOptions,
  SpeechPonyfill,
} from "./interface";
import { toast } from "react-toastify";

export const DEFAULT_SAY_RATE = 1.4;
export const DEFAULT_SAY_VOLUME = 1;
export const DEFAULT_SAY_PITCH = 0.8;
export const DEFAULT_SAY_VIBRATE_DURATION = 500;
export const DEFAULT_SAY_VOICE = "Google português do Brasil";
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

export function defaultShouldVibrate(type: SayFeedbackType): boolean {
  return type === "warning";
}

/** Exibe toast integrado do {@link Say}. */
export function showSayNotify(
  text: string,
  { type = "success", autoClose = 4500 }: SayNotifyOptions,
): void {
  toast(text, { type, autoClose });
}

const sayConstants = `
Sintetiza texto em fala via Web Speech API (\`react-say\`), com toast integrado (\`react-toastify\`) e vibração.

**Importação:**
\`\`\`tsx
import { Say, useSay } from "@grazziotin/react-components-next/accessibility";
\`\`\`

**Uso básico:**
\`\`\`tsx
const { handleSay, isSpeaking, textSpeaking, setIsSpeaking } = useSay();

<>
  <Say
    isSpeaking={isSpeaking}
    text={textSpeaking}
    setIsSpeaking={setIsSpeaking}
  />
  <button type="button" onClick={() => handleSay("Operação concluída", { type: "success" })}>
    Falar
  </button>
</>
onSuccess: (r) => handleSay(r.status, { type: "success" })
\`\`\`

Monte \`<Say />\` uma vez no layout. Toast e CSS já vêm embutidos.
Use \`notify: false\` para falar sem toast: \`handleSay(texto, { type: "default", notify: false })\`.
`;
export default sayConstants;
