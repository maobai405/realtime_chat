import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

/**
 * Header组件
 */
export function Header() {
  return (
    <div className="flex h-14 w-full items-center justify-between">
      <div className="flex h-full items-center gap-2 text-green-500">
        <span className="icon-[eos-icons--atom-electron]" />
        <span className="font-bold text-2xl">RealtimeChat</span>
      </div>

      <AnimatedThemeToggler className="cursor-pointer" />
    </div>
  );
}
