import { cn } from "@workspace/ui/lib/utils";

type GeneralErrorProps = React.HTMLAttributes<HTMLDivElement>;

export function GeneralError({ className }: GeneralErrorProps) {
  return (
    <div className={cn("h-svh w-full", className)}>
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <span>通用错误页面</span>
      </div>
    </div>
  );
}
