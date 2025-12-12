"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }: React.PropsWithChildren) {
  // useQueryClient 实例
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
