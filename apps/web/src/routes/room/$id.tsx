import { createFileRoute } from "@tanstack/react-router";
import { Room } from "@/features/room";

export const Route = createFileRoute("/room/$id")({
  component: Room,
  loader: ({ params }) => {
    console.log("params", params);
  },
});
