import { Elysia } from "elysia";
import { nanoid } from "nanoid";
import { redis } from "@/lib/redis.js";

const ROOM_TTL_SECONDS = 60 * 10;

export const room = new Elysia({ prefix: "/room" }).post(
  "/create",
  async () => {
    const roomId = nanoid();

    await redis.set(`meta:${roomId}`, {
      connected: [],
      createdAt: Date.now(),
    });

    await redis.expire(`meta:${roomId}`, ROOM_TTL_SECONDS);

    return { roomId };
  }
);
