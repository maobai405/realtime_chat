# shadcn/ui 单体仓库

## 使用说明

```fish
bunx --bun shadcn@latest init
```

## 添加组件

要向应用添加组件，请在 `web` 应用的根目录下运行以下命令：

```fish
bunx --bun shadcn@latest add button -c apps/web
```

这会将 UI 组件放置在 `packages/ui/src/components` 目录中。

## Tailwind

您的 `globals-css` 已设置为使用 `ui` 包中的组件。

## 使用组件

要在应用中使用这些组件，请从 `ui` 包中导入它们：

```tsx
import { Button } from "@workspace/ui/components/button"
```
