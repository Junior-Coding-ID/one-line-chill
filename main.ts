import * as fs from "fs";
import * as path from "path";

const entry =
  "My building's elevator has started announcing who will get off on each floor, and today it said my name at a floor the building doesn't have.";

const outputDir = process.env.MAKEFUN_OUTPUT || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), entry + "\n");
console.log(`Wrote entry (${entry.length} characters) to ${path.join(outputDir, "entry.txt")}`);
