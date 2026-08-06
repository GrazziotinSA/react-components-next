import { AuthProvider, useAuth } from "../auth-provider";
import type { Meta, StoryObj } from "@storybook/react-vite";
import authProviderConstants from "./auth-provider.constants";
import type { AuthProviderExampleProps } from "./auth-provider.interface";

const meta: Meta = {
  title: "Providers/AuthProvider",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: authProviderConstants } },
  },
};

export default meta;
type Story = StoryObj;

function Example({ token }: AuthProviderExampleProps) {
  const auth = useAuth();

  return (
    <div className="flex flex-col gap-2 text-sm">
      <p>
        isAuthenticated:{" "}
        <strong className="font-mono">{String(auth.isAuthenticated)}</strong>
      </p>
      <p>
        token:{" "}
        <strong className="font-mono">{JSON.stringify(auth.token)}</strong>
      </p>
      <p className="text-gray-500">prop token: {JSON.stringify(token)}</p>
    </div>
  );
}

export const SemToken: Story = {
  render: () => (
    <AuthProvider>
      <Example />
    </AuthProvider>
  ),
};

export const ComToken: Story = {
  render: () => (
    <AuthProvider token="jwt-exemplo">
      <Example token="jwt-exemplo" />
    </AuthProvider>
  ),
};
