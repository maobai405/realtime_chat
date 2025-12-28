import { treaty } from "@elysiajs/eden";
import type { ApiTypes } from "@workspace/api-types";

// 创建类型安全的 API 客户端
export const api = treaty<ApiTypes>("http://localhost:3000");
