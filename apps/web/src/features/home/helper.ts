import { nanoid } from "nanoid";

const ANIMALS = ["wolf", "fox", "bear", "lion", "tiger", "eagle", "wolf"];

export function generateUserName() {
  const words = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];

  return `anonymous-${words}-${nanoid(5)}`;
}
