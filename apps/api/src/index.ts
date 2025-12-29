import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";
import { room } from "./mudules/room/index.js";

const app = new Elysia().use(cors()).use(room).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

// 导出类型供 Eden 客户端使用
export type ApiTypes = typeof app;
