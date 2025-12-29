import { cn } from "@workspace/ui/lib/utils";

type SpinnerProps = React.HTMLAttributes<HTMLSpanElement>;

function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <span
      className={cn("icon-[line-md--loading-twotone-loop]", className)}
      {...props}
    />
  );
}

export { Spinner };
