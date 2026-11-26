// The one line that could have replaced the whole meeting.
// Keep it under 200 characters: no context, no setup, just the sentence.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "We're pushing the deadline to next Friday — nothing changes until then, so this meeting was the only thing standing in the way.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
