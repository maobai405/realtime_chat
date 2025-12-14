import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { TypingAnimation } from "./ui/typing-animation";

/**
 * Header组件
 */
export function Header() {
  return (
    <div className="flex h-14 w-full items-center justify-between">
      <div className="flex h-full items-center gap-2">
        <AnimatedGradientText className="font-bold text-2xl">
          <TypingAnimation>{">_RealtimeChat"}</TypingAnimation>
        </AnimatedGradientText>
      </div>

      <AnimatedThemeToggler className="cursor-pointer" />
    </div>
  );
}
