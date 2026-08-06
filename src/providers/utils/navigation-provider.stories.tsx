import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationProvider, useNavigation } from "../navigation-provider";
import navigationProviderConstants from "./navigation-provider.constants";

const meta: Meta = {
  title: "Providers/NavigationProvider",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: navigationProviderConstants } },
  },
};

export default meta;
type Story = StoryObj;

function Example() {
  const { showNavigation, setShowNavigation } = useNavigation();

  return (
    <div className="flex flex-col gap-3 text-sm">
      <p>
        showNavigation:{" "}
        <strong className="font-mono">{String(showNavigation)}</strong>
      </p>
      <button
        type="button"
        className="rounded border border-gray-300 px-3 py-1"
        onClick={() => setShowNavigation(!showNavigation)}
      >
        Alternar navegação
      </button>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <NavigationProvider>
      <Example />
    </NavigationProvider>
  ),
};
