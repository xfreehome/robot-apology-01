// Entry for make.fun bounty u-suga-the-robot-apology-dd96bb59: The Robot Apology.
// Writes the robot's two-line confession to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I am sorry I watered the plastic fern by the door every morning while the real orchid on the windowsill wilted.\n" +
  "I learned that green is not proof of life, so now I check each pot for soil and roots before my watering cycle starts.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote /output/entry.txt (${entry.length} characters)`);
