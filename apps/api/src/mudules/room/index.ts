import { Elysia } from "elysia";

export const room = new Elysia({ prefix: "/room" }).post(
  "/create",
  () => "Hello Elysia"
);
