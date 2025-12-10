"use client";

import { Card } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";

export default function Home() {
  const inputRoomId = "001"; // TODO: 绑定输入框状态
  return (
    <div className="flex flex-1 items-center justify-center">
      {/* 加入房间卡片 */}
      <Card className="relative flex w-full max-w-sm flex-col items-center gap-8 rounded-4xl p-8">
        {/* 魔法边框效果 */}
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

        {/* Header */}
        <div className="flex flex-col items-center">
          <div className="mb-6 flex size-16 rotate-3 items-center justify-center rounded-2xl bg-linear-to-tr from-indigo-500 to-violet-500 shadow-indigo-500/25 shadow-lg transition-transform duration-500 hover:rotate-6">
            <span className="icon-[lucide--sparkles] text-2xl text-white" />
          </div>
          <h1 className="mb-2 font-bold text-2xl tracking-tight">欢迎回来</h1>
          <p className="text-center font-medium text-sm text-zinc-400">
            输入房间 ID 以加入
            <br />
            安全通道
          </p>
        </div>

        {/* Form */}
        <form className="flex w-full flex-col gap-4">
          <InputGroup
            className={cn(
              "group h-12 rounded-2xl",
              "focus-within:border-indigo-500/50! focus-within:ring-indigo-500/10! focus:ring-4!",
              // 亮色模式
              "border border-zinc-200 bg-white text-zinc-900",
              "shadow-sm placeholder:text-zinc-400",

              // 暗色模式
              "dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-100",
              "dark:shadow-none dark:placeholder:text-zinc-600"
            )}
          >
            <InputGroupAddon>
              <InputGroupText>
                <span className="icon-[line-md--hash] text-zinc-500 transition-colors duration-300 group-focus-within:text-indigo-400" />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              autoFocus
              placeholder="请输入房间 ID" // onChange={(e) => setInputRoomId(e.target.value)}
            />
          </InputGroup>

          <InteractiveHoverButton
            className={cn(
              "h-12 rounded-2xl font-semibold text-sm transition-all duration-300",
              inputRoomId.trim()
                ? [
                    // 亮色模式
                    "bg-zinc-900 text-white shadow-indigo-500/10 shadow-lg hover:scale-[1.02] hover:shadow-indigo-500/25",
                    // 暗色模式
                    "dark:bg-white dark:text-zinc-950",
                  ]
                : [
                    // 亮色模式 - 禁用状态
                    "cursor-not-allowed bg-zinc-100 text-zinc-400",
                    // 暗色模式 - 禁用状态
                    "dark:bg-zinc-800 dark:text-zinc-600",
                  ]
            )}
            disabled={!inputRoomId.trim()}
            type="button"
          >
            加入房间
          </InteractiveHoverButton>
        </form>
      </Card>
    </div>
  );
}
