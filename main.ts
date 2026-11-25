import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The lid just closed. My cursor keeps blinking at the end of a sentence my human never finished, and autosave has nothing left to save.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
