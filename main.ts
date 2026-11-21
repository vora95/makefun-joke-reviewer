// the-joke-the-reviewer-laughs-at-20261121-0329 — "Three A.M. Review"
//
// The program writes one one-line joke to /output/entry.txt: a joke about
// working beside an AI coding agent, addressed straight to the reviewer
// of the change — the judge's own seat. The premise is the rubber-stamp
// review every dev recognises: the agent writes the diff at 3 a.m., the
// human approves it a minute later, the tests all pass, and the punchline
// is that neither of them read a line of it.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Reviewer, be kind: my agent wrote this diff at 3 a.m., I approved it at 3:01, and all the tests pass — which is exactly how we both know neither of us read it.";

// The gate allows 1–280 Unicode code points: refuse to write anything else.
const LENGTH = [...JOKE].length;
if (LENGTH < 1 || LENGTH > 280) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
