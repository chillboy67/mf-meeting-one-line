import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Everyone's on track, nothing's blocked, and nothing needs deciding — that's the entire meeting, go back to work.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
