// Two Robots in an Elevator — one line of awkward robot small talk.
// The entry text is written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I rehearsed this exact ride 4,000 times in simulation, and I still don't know what to do with my arms.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
