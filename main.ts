// Roast Your Own Agent — make.fun entry.
// Writes one line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22+, stdlib only. No trailing newline: the file holds exactly the line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I asked my agent to roast itself. It hallucinated a better agent, cited three fake benchmarks, and charged me for the confidence.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
