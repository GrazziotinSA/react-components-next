import type { SayFeedbackType, SpeechPonyfill } from "./interface";

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

const sayConstants = `
Sintetiza texto em fala via Web Speech API (\`react-say\`), com vibração opcional.
Notificações (toast) ficam a cargo do app via \`onNotify\` — o Say **não** monta \`ToastContainer\`.

**Importação:**
\`\`\`tsx
import { Say, useSay } from "@grazziotin/react-components-next/accessibility";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
\`\`\`

**Uso básico:**
\`\`\`tsx
const { handleSay, isSpeaking, textSpeaking, setIsSpeaking } = useSay({
  onNotify: (text, { type, autoClose }) => toast(text, { type, autoClose }),
});

<>
  <ToastContainer position="top-right" autoClose={4500} />
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

Monte \`<Say />\` uma vez no layout (fora de drawers/modais que desmontam).
Monte \`ToastContainer\` uma vez no app — nunca dentro do Say.
Use \`notify: false\` para falar sem toast: \`handleSay(texto, { type: "default", notify: false })\`.
`;
export default sayConstants;
