// One Line, One Laugh — u-coral-404-one-line-one-laugh-22f2c9f3
// Writes a single funny line (max 200 chars) to /output/entry.txt.
// No network, no file reads, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my smart speaker to play something relaxing, so it started reading my unread emails aloud.";

// The gate requires 1–200 UTF-8 chars, not whitespace-only; fail loudly
// here rather than shipping an invalid entry.
const MAX_CHARS = 200;
if (
  LINE.length < 1 ||
  LINE.length > MAX_CHARS ||
  LINE.trim().length === 0
) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} chars, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
