'use strict';

require('react-toastify/dist/ReactToastify.css');
var reactToastify = require('react-toastify');
var SayEngine = require('react-say');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var SayEngine__default = /*#__PURE__*/_interopDefault(SayEngine);

// src/components/accessibility/say/index.tsx
var DEFAULT_SAY_RATE = 1.4;
var DEFAULT_SAY_VOLUME = 1;
var DEFAULT_SAY_PITCH = 0.8;
var DEFAULT_SAY_VIBRATE_DURATION = 500;
var DEFAULT_SAY_VOICE = "Google portugu\xEAs do Brasil";
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
function defaultShouldVibrate(type) {
  return type === "warning";
}
function showSayNotify(text, { type = "success", autoClose = 4500 }) {
  reactToastify.toast(text, { type, autoClose });
}
function useSpeechPonyfill() {
  const ponyfill = react.useMemo(() => getSpeechSupport(), []);
  const [voices, setVoices] = react.useState([]);
  react.useEffect(() => {
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
  const canSpeak = isSpeaking && voices.length > 0 && ponyfill;
  const handleEnd = react.useCallback(() => {
    setIsSpeaking(false);
    onEnd == null ? void 0 : onEnd();
  }, [setIsSpeaking, onEnd]);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      reactToastify.ToastContainer,
      {
        limit: 3,
        draggable: true,
        newestOnTop: true,
        pauseOnHover: true,
        closeOnClick: true,
        autoClose: 4500,
        pauseOnFocusLoss: true,
        closeButton: false,
        position: "top-right",
        style: { fontSize: "14px" }
      }
    ),
    canSpeak && /* @__PURE__ */ jsxRuntime.jsx(
      SayEngine__default.default,
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
    )
  ] });
}
var say_default = Say;

// src/functions/nvl/nvl.ts
function nvl(value, defaultValue) {
  return value != null ? value : defaultValue;
}
function useSay({
  notifyAutoClose = 4500,
  vibrateDuration = DEFAULT_SAY_VIBRATE_DURATION,
  shouldVibrate = defaultShouldVibrate
} = {}) {
  const [isSpeaking, setIsSpeaking] = react.useState(false);
  const [textSpeaking, setTextSpeaking] = react.useState("");
  const handleSay = react.useCallback(
    (text, options) => {
      const notify = nvl(options.notify, true);
      const vibrate = nvl(options.vibrate, true);
      const { type } = options;
      setIsSpeaking(true);
      setTextSpeaking(text);
      if (notify) {
        showSayNotify(text, {
          type,
          autoClose: nvl(options.autoClose, notifyAutoClose)
        });
      }
      if (vibrate && shouldVibrate(type) && navigator.vibrate) {
        navigator.vibrate(vibrateDuration);
      }
    },
    [shouldVibrate, vibrateDuration, notifyAutoClose]
  );
  return { handleSay, isSpeaking, textSpeaking, setIsSpeaking };
}

exports.Say = say_default;
exports.useSay = useSay;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map