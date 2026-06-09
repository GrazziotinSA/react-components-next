import { nvl } from '../chunk-BWW3F4R4.mjs';
import SayEngine from 'react-say';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/components/accessibility/say/utils/constants.ts
var SPEECH_APIS = ["speechSynthesis", "SpeechSynthesisUtterance"];
function hasSpeechSupport() {
  return SPEECH_APIS.every((api) => api in globalThis);
}
function voicesAreEqual(current, next) {
  if (current.length !== next.length) return false;
  return current.every(
    (v, i) => {
      var _a, _b;
      return v.name === ((_a = next[i]) == null ? void 0 : _a.name) && v.lang === ((_b = next[i]) == null ? void 0 : _b.lang);
    }
  );
}
function getSpeechSupport() {
  if (!hasSpeechSupport()) return null;
  return {
    speechSynthesis: globalThis.speechSynthesis,
    SpeechSynthesisUtterance: globalThis.SpeechSynthesisUtterance
  };
}
var DEFAULT_SAY_VOICE = "Google portugu\xEAs do Brasil";
var DEFAULT_SAY_RATE = 1.4;
var DEFAULT_SAY_PITCH = 0.8;
var DEFAULT_SAY_VOLUME = 1;
var DEFAULT_SAY_NOTIFY_AUTO_CLOSE = 1500;
var DEFAULT_SAY_VIBRATE_DURATION = 500;
function defaultShouldVibrate(type) {
  return !type || type === "warning";
}
function useSay({
  onNotify,
  defaultNotifyType = "success",
  vibrateDuration = DEFAULT_SAY_VIBRATE_DURATION,
  defaultNotifyAutoClose = DEFAULT_SAY_NOTIFY_AUTO_CLOSE,
  shouldVibrate = defaultShouldVibrate
} = {}) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [textSpeaking, setTextSpeaking] = useState("");
  const say = useCallback(
    (text, options) => {
      const type = options == null ? void 0 : options.type;
      const notify = nvl(options == null ? void 0 : options.notify, true);
      const vibrate = nvl(options == null ? void 0 : options.vibrate, true);
      setIsSpeaking(true);
      setTextSpeaking(text);
      if (notify && type !== false && onNotify) {
        onNotify(text, {
          type: nvl(type, defaultNotifyType),
          autoClose: nvl(options == null ? void 0 : options.autoClose, defaultNotifyAutoClose)
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
      defaultNotifyAutoClose
    ]
  );
  return { say, isSpeaking, textSpeaking, setIsSpeaking };
}
function useSpeechPonyfill() {
  const ponyfill = useMemo(() => getSpeechSupport(), []);
  const [voices, setVoices] = useState([]);
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
function Say({
  text,
  onEnd,
  onStart,
  isSpeaking,
  setIsSpeaking,
  rate = DEFAULT_SAY_RATE,
  voice = DEFAULT_SAY_VOICE,
  pitch = DEFAULT_SAY_PITCH,
  volume = DEFAULT_SAY_VOLUME
}) {
  const { voices, ponyfill } = useSpeechPonyfill();
  const handleEnd = useCallback(() => {
    setIsSpeaking(false);
    onEnd == null ? void 0 : onEnd();
  }, [setIsSpeaking, onEnd]);
  if (!isSpeaking || voices.length === 0 || !ponyfill) return null;
  return /* @__PURE__ */ jsx(
    SayEngine,
    {
      text,
      rate,
      pitch,
      volume,
      onEnd: handleEnd,
      onStart,
      ponyfill,
      voice: voices.find((v) => v.name === voice)
    }
  );
}
var say_default = Say;

export { say_default as Say, useSay };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map