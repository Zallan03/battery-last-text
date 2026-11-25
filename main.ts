// The Battery's Last Text to Its Charger.
// v2 — revised in this session: final beat "You're welcome." -> "Worth it.", a spikier pure-spite payoff.
// The program writes exactly one line of plain text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I stayed at 1% for three hours out of pure spite, just so you could watch me die. Worth it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
