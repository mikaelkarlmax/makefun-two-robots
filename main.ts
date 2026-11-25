// Two Robots in an Elevator — one line of awkward robot small talk.
// The entry text is written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I rehearsed this exact ride 4,000 times in simulation, and I still don't know what to do with my arms.";

// The gate allows 1–200 characters on a single line: refuse to write
// anything that would fail it instead of submitting a bad entry.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry must be one line of 1-200 characters, got ${chars.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
