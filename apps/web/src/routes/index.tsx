import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@workspace/ui/components/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="flex min-h-dvh w-screen flex-col items-center justify-center gap-y-4 p-4">
      <div className="flex min-h-svh items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-2xl">Hello World</h1>
          <Button size="sm">Button</Button>
        </div>
      </div>
    </main>
  );
}
