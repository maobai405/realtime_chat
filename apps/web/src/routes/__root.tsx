import { TanStackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { DotPattern } from "@workspace/ui/components/dot-pattern";
import { cn } from "@workspace/ui/lib/utils";
import globalsCss from "@workspace/ui/styles/globals.css?url";
import { GeneralError } from "@/features/components/errors/general-error";
import { Header } from "@/features/components/header";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "TanStack Start Starter" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: globalsCss,
      },
    ],
  }),
  component: RootLayout,
  errorComponent: GeneralError,
});

function RootLayout() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <main className="flex min-h-screen flex-1 flex-col px-8">
          {/* 主体背景 */}
          <DotPattern
            className={cn(
              "mask-[radial-gradient(800px_circle_at_center,white,transparent)]"
            )}
          />

          <Header />

          <Outlet />
        </main>

        {import.meta.env.MODE === "development" && (
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Query",
                render: <ReactQueryDevtoolsPanel />,
              },
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}

        <Scripts />
      </body>
    </html>
  );
}
