import { useMutation } from "@tanstack/react-query";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group";
import { ShineBorder } from "@workspace/ui/components/shine-border";
import { cn } from "@workspace/ui/lib/utils";
import { atom, useAtom } from "jotai";
import { nanoid } from "nanoid";

const inputRoomIdAtom = atom("");

export default function Home() {
  const [inputRoomId, setInputRoomId] = useAtom(inputRoomIdAtom);
  // const router = useRouter();

  const { mutate: createRoom } = useMutation({
    mutationFn: async () => {
      // const response = await api.rooms.create.post();
      // if (response.status === 200) {
      // router.push(`/room/${response.data?.roomId}`);
      // }
    },
  });

  const handleClickRoom = () => {
    console.log("nanoid", nanoid());
  };

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
              onChange={(e) => setInputRoomId(e.target.value.trim())}
              placeholder="请输入房间 ID"
            />
          </InputGroup>

          <Button
            className={cn(
              "h-12 rounded-2xl font-semibold text-sm transition-all duration-300",
              inputRoomId
                ? [
                    // 亮色模式
                    "bg-indigo-500 text-white shadow-indigo-500/20 shadow-lg hover:scale-[1.02] hover:bg-indigo-600 hover:shadow-indigo-500/30",
                    // 暗色模式
                    "dark:bg-indigo-400 dark:text-white",
                  ]
                : [
                    // 亮色模式 - 禁用状态
                    "cursor-not-allowed bg-zinc-200 text-zinc-500",
                    // 暗色模式 - 禁用状态
                    "dark:bg-zinc-700 dark:text-zinc-500",
                  ]
            )}
            disabled={!inputRoomId}
            onClick={handleClickRoom}
            type="button"
          >
            加入房间
          </Button>

          <div className="text-center">or</div>

          <Button
            className={cn(
              "h-12 rounded-2xl font-semibold text-sm transition-all duration-300",
              [
                // 亮色模式
                "bg-indigo-500 text-white shadow-indigo-500/20 shadow-lg hover:scale-[1.02] hover:bg-indigo-600 hover:shadow-indigo-500/30",
                // 暗色模式
                "dark:bg-indigo-400 dark:text-white",
              ]
            )}
            onClick={() => createRoom()}
            type="button"
          >
            创建房间
          </Button>
        </form>
      </Card>
    </div>
  );
}
