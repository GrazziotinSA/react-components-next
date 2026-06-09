import Say from "./index";
import sayConstants, {
  DEFAULT_SAY_PITCH,
  DEFAULT_SAY_RATE,
  DEFAULT_SAY_VOICE,
  DEFAULT_SAY_VOLUME,
} from "./utils/constants";
import { useSay } from "./use-say";
import { action } from "storybook/actions";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { SayFeedbackType, SayProps } from "./utils/interface";

function SayAmostra({
  texto,
  rate,
  pitch,
  volume,
  voice,
  type,
  notify,
}: Readonly<
  Pick<SayProps, "rate" | "pitch" | "volume" | "voice"> & {
    texto: string;
    type: SayFeedbackType;
    notify: boolean;
  }
>) {
  const { handleSay, isSpeaking, textSpeaking, setIsSpeaking } = useSay();
  return (
    <div className="flex w-80 flex-col items-center gap-4">
      <Say
        rate={rate}
        pitch={pitch}
        voice={voice}
        volume={volume}
        isSpeaking={isSpeaking}
        text={textSpeaking}
        setIsSpeaking={setIsSpeaking}
        onEnd={() => action("onEnd")()}
        onStart={() => action("onStart")()}
      />
      <button
        type="button"
        className="rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        disabled={isSpeaking}
        onClick={() => handleSay(texto, { notify, type })}
      >
        {isSpeaking ? "Falando…" : "Falar"}
      </button>
      <p className="text-center text-xs text-gray-500">
        Toast integrado via <code className="font-mono">handleSay</code>.
      </p>
    </div>
  );
}
const meta = {
  title: "Accessibility/Say",
  component: SayAmostra,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: sayConstants } },
  },
  argTypes: {
    texto: { control: "text" },
    rate: { control: { type: "range", min: 0.5, max: 2, step: 0.1 } },
    pitch: { control: { type: "range", min: 0, max: 2, step: 0.1 } },
    volume: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    voice: { control: "text" },
    type: {
      control: "select",
      options: [
        "info",
        "success",
        "warning",
        "error",
        "default",
      ] satisfies SayFeedbackType[],
    },
    notify: { control: "boolean" },
  },
  args: {
    texto: "Operação concluída com sucesso.",
    rate: DEFAULT_SAY_RATE,
    pitch: DEFAULT_SAY_PITCH,
    volume: DEFAULT_SAY_VOLUME,
    voice: DEFAULT_SAY_VOICE,
    type: "success",
    notify: true,
  },
} satisfies Meta<typeof SayAmostra>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Padrao: Story = {};
export const SemNotificacao: Story = {
  args: { notify: false, type: "default", texto: "Apenas fala, sem toast." },
};
export const Aviso: Story = {
  args: {
    type: "warning",
    texto: "Atenção: verifique os dados antes de continuar.",
  },
};
export const Erro: Story = {
  args: {
    type: "error",
    texto: "Não foi possível concluir a operação.",
  },
};
export const Livre: Story = {};
