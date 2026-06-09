import sayConstants, {
  DEFAULT_SAY_PITCH,
  DEFAULT_SAY_RATE,
  DEFAULT_SAY_VOICE,
  DEFAULT_SAY_VOLUME,
} from "./utils/constants";
import { useState } from "react";
import Say, { useSay } from "./index";
import { action } from "storybook/actions";
import type { SayFeedbackType } from "./utils/interface";
import type { Meta, StoryObj } from "@storybook/react-vite";

interface SayStoryArgs {
  texto: string;
  rate: number;
  pitch: number;
  volume: number;
  voice: string;
  defaultNotifyType: SayFeedbackType;
  exibirNotificacao: boolean;
}

const FEEDBACK_STYLES: Record<SayFeedbackType, string> = {
  info: "bg-blue-100 text-blue-900 border-blue-200",
  success: "bg-green-100 text-green-900 border-green-200",
  warning: "bg-amber-100 text-amber-900 border-amber-200",
  error: "bg-red-100 text-red-900 border-red-200",
  default: "bg-gray-100 text-gray-900 border-gray-200",
};

function SayAmostra({
  texto,
  rate,
  pitch,
  volume,
  voice,
  defaultNotifyType,
  exibirNotificacao,
}: Readonly<SayStoryArgs>) {
  const [notificacao, setNotificacao] = useState<{
    text: string;
    type: SayFeedbackType;
  } | null>(null);

  const { say, isSpeaking, textSpeaking, setIsSpeaking } = useSay({
    defaultNotifyType,
    onNotify: exibirNotificacao
      ? (text, { type = defaultNotifyType }) => {
          action("onNotify")(text, { type });
          setNotificacao({ text, type });
        }
      : undefined,
  });

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
        onClick={() => say(texto, { type: defaultNotifyType })}
      >
        {isSpeaking ? "Falando…" : "Falar"}
      </button>
      {notificacao && (
        <output
          className={`block w-full rounded border px-3 py-2 text-sm ${FEEDBACK_STYLES[notificacao.type]}`}
        >
          [{notificacao.type}] {notificacao.text}
        </output>
      )}
      <p className="text-center text-xs text-gray-500">
        Clique em &quot;Falar&quot; para ouvir o texto. Abra o painel Actions
        para ver os eventos.
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
    texto: {
      control: "text",
      description: "Texto disparado ao clicar em Falar.",
    },
    rate: {
      control: { type: "range", min: 0.5, max: 2, step: 0.1 },
      description: "Velocidade da fala. Padrão: `1.4`.",
    },
    pitch: {
      control: { type: "range", min: 0, max: 2, step: 0.1 },
      description: "Tom da voz. Padrão: `0.8`.",
    },
    volume: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description: "Volume da fala. Padrão: `1`.",
    },
    voice: {
      control: "text",
      description:
        'Nome da voz do speechSynthesis. Padrão: `"Google português do Brasil"`.',
    },
    defaultNotifyType: {
      control: "select",
      options: ["info", "success", "warning", "error", "default"],
      description: 'Tipo padrão da notificação. Padrão: `"success"`.',
    },
    exibirNotificacao: {
      control: "boolean",
      description: "Simula `onNotify` com feedback visual na story.",
    },
  },
  args: {
    texto: "Operação concluída com sucesso.",
    rate: DEFAULT_SAY_RATE,
    pitch: DEFAULT_SAY_PITCH,
    volume: DEFAULT_SAY_VOLUME,
    voice: DEFAULT_SAY_VOICE,
    defaultNotifyType: "success",
    exibirNotificacao: true,
  },
} satisfies Meta<typeof SayAmostra>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {};

export const SemNotificacao: Story = {
  args: {
    exibirNotificacao: false,
    texto: "Apenas fala, sem notificação visual.",
  },
};

export const Aviso: Story = {
  args: {
    defaultNotifyType: "warning",
    texto: "Atenção: verifique os dados antes de continuar.",
  },
};

export const Erro: Story = {
  args: {
    defaultNotifyType: "error",
    texto: "Não foi possível concluir a operação.",
  },
};

export const Livre: Story = {
  args: {
    texto: "Texto livre para testar voz, velocidade e notificação.",
  },
};
