import type { Meta, StoryObj } from "@storybook/react-vite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../../../providers/auth-provider";
import { useQueryAuth } from "../use-query-auth";
import type { UseQueryAuthExampleProps } from "./interface";
import useQueryAuthConstants from "./constants";

const meta: Meta = {
  title: "Hooks/use-query-auth",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: useQueryAuthConstants } },
  },
};

export default meta;
type Story = StoryObj;

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

function Example({ token }: UseQueryAuthExampleProps) {
  const query = useQueryAuth({
    queryKey: ["story-auth", token],
    queryFn: async () => ({ ok: true, at: Date.now() }),
  });

  return (
    <div className="flex flex-col gap-2 text-sm">
      <p>
        status: <strong className="font-mono">{query.status}</strong>
      </p>
      <p>
        fetchStatus: <strong className="font-mono">{query.fetchStatus}</strong>
      </p>
      <p>
        data:{" "}
        <strong className="font-mono">
          {JSON.stringify(query.data ?? null)}
        </strong>
      </p>
    </div>
  );
}

function WithProviders({ token }: UseQueryAuthExampleProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider token={token}>
        <Example token={token} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export const SemToken: Story = {
  render: () => <WithProviders />,
};

export const ComToken: Story = {
  render: () => <WithProviders token="jwt-exemplo" />,
};
