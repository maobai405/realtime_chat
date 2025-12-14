import { Elysia } from "elysia";
import { nanoid } from "nanoid";
import { redis } from "@/lib/redis";

const ROOM_TTL = 60 * 10;

const rooms = new Elysia({ prefix: "/rooms" }).post("/create", async () => {
  const roomId = nanoid();

  await redis.hset(`meta:${roomId}`, {
    connected: [],
    reatedAt: Date.now(),
  });

  await redis.expire(`meta:${roomId}`, ROOM_TTL);

  return { roomId };
});

const app = new Elysia({ prefix: "/api" }).use(rooms);

export type App = typeof app;

export const GET = app.fetch;
export const POST = app.fetch;
