#!/usr/bin/env bash
# demos/adversarial-review/demo.sh
#
# Adversarial Review Demo — ryantmoore.ca content-engine positioning
#
# WHAT IT SHOWS:
#   • A "producer" agent writes a confident marketing claim block (pre-written
#     with one planted flaw — a fabricated stat that sounds authoritative)
#   • An adversarial reviewer (live model call, told explicitly to try to break
#     it, NOT to agree) catches the flaw and explains why it fails
#   • A clean rewrite ships with the stat removed/rephrased
#
# WHY PRE-WRITTEN PRODUCER ARTIFACT:
#   The planted flaw is deterministic so the demo is always recordable.
#   The adversarial reviewer is a LIVE model call — no faked verdicts.
#   This matches the claim-checker skill in the fleet.
#
# Run:      bash demos/adversarial-review/demo.sh
# Requires: claude CLI  (ships with Claude Code; `which claude` to verify)
# Time:     ~25-40 seconds (one live model call — the reviewer)

set -euo pipefail

DEMO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TRANSCRIPT_OUT="${DEMO_DIR}/transcript.md"
ARTIFACT="${DEMO_DIR}/producer-artifact.md"

# ── colours ────────────────────────────────────────────────────────────────
BOLD='\033[1m'
DIM='\033[2m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RESET='\033[0m'

hr() { printf '%0.s─' {1..72}; echo; }

banner() {
  echo
  echo -e "${BOLD}${CYAN}"
  hr
  printf '  %s\n' "$1"
  hr
  echo -e "${RESET}"
}

T=""
t_append() { T="${T}$1"$'\n'; }

# ── read the pre-written producer artifact ─────────────────────────────────
PRODUCER_OUTPUT="$(cat "$ARTIFACT")"

# ============================================================
banner "STEP 1 — PRODUCER  (fast, single-pass, confident)"
# ============================================================

echo -e "${DIM}First-pass model output — claim block for \"Why Verification Is Your AI Moat\":${RESET}"
echo
echo "$PRODUCER_OUTPUT"
echo

t_append "# Adversarial Review Demo — $(date '+%Y-%m-%d')"
t_append ""
t_append "## Step 1 — Producer Output (fast single-pass)"
t_append ""
t_append '```'
t_append "$PRODUCER_OUTPUT"
t_append '```'
t_append ""
t_append "*Note: producer artifact is pre-written with one planted flaw so the demo is always recordable.*"
t_append "*The adversarial reviewer below is a live model call — no faked verdicts.*"
t_append ""

# ============================================================
banner "STEP 2 — ADVERSARIAL REVIEWER  (live call — told to break it)"
# ============================================================

echo -e "${DIM}Dispatching adversarial reviewer...${RESET}"
echo -e "${DIM}System prompt: \"Your job is NOT to agree. Find the one thing a skeptical fact-checker would challenge.\"${RESET}"
echo

REVIEWER_SYSTEM='You are an adversarial quality reviewer. Your ONLY job is to find the one claim in this content that a skeptical journalist, a lawyer, or a fact-checker would challenge.

Focus specifically on:
- Specific statistics or percentages stated as fact with no named, checkable source
- Phrases like "research shows" or "studies show" with no citation
- Claims about client outcomes ("most clients", "on average") with no data backing them

Output your review in EXACTLY this format — one field per line, no extras:

VERDICT: FAIL
FLAGGED CLAIM: (quote the exact problematic sentence or phrase)
CATEGORY: FABRICATED or NEEDS SOURCE or OVERSTATEMENT or CLIENT-SPECIFIC
WHY: (one sharp sentence — what specifically cannot be verified and why it matters)
FIX: (the corrected version of just the flagged text — directional, not numeric)

Rules:
- If you find a stat or percentage with no named source, that is FABRICATED or NEEDS SOURCE — always FAIL it.
- Do not give the benefit of the doubt.
- If nothing is wrong, output VERDICT: PASS on its own line.
- Output nothing else.'

REVIEWER_PROMPT="Review this content block for unverifiable or fabricated claims:

---
${PRODUCER_OUTPUT}
---

Apply your adversarial review protocol now."

echo -e "${DIM}[reviewer running...]${RESET}"
REVIEWER_OUTPUT="$(claude -p --system-prompt "$REVIEWER_SYSTEM" "$REVIEWER_PROMPT" 2>/dev/null)"

echo
echo -e "${BOLD}Adversarial reviewer verdict:${RESET}"
echo

VERDICT_LINE="$(echo "$REVIEWER_OUTPUT" | grep -i '^VERDICT:' | head -1 || true)"
if echo "$VERDICT_LINE" | grep -qi 'FAIL'; then
  echo -e "${RED}${BOLD}${VERDICT_LINE}${RESET}"
else
  echo -e "${GREEN}${BOLD}${VERDICT_LINE}${RESET}"
fi

echo "$REVIEWER_OUTPUT" | grep -v -i '^VERDICT:' || true
echo

t_append "## Step 2 — Adversarial Reviewer Verdict (live model call)"
t_append ""
t_append '```'
t_append "$REVIEWER_OUTPUT"
t_append '```'
t_append ""

# ============================================================
if echo "$REVIEWER_OUTPUT" | grep -qi 'VERDICT: FAIL\|VERDICT:FAIL'; then
# ============================================================

  banner "STEP 3 — CATCH CONFIRMED  (flaw found — generating clean rewrite)"

  echo -e "${YELLOW}${BOLD}Flaw caught. Reviewer called it. Rewriting without the unverifiable claim...${RESET}"
  echo

  FLAGGED="$(echo "$REVIEWER_OUTPUT" | grep -i '^FLAGGED CLAIM:' | sed 's/^FLAGGED CLAIM:[ ]*//' | head -1)"
  FIX_LINE="$(echo "$REVIEWER_OUTPUT" | grep -i '^FIX:' | sed 's/^FIX:[ ]*//' | head -1)"

  REWRITE_PROMPT="A fact-checker flagged a claim in this marketing block:

---
${PRODUCER_OUTPUT}
---

Flagged claim: ${FLAGGED}
Suggested fix: ${FIX_LINE}

Rewrite the full block applying exactly that fix — replace the flagged text with the suggested fix. Keep every other sentence identical. Output the clean block only, no preamble."

  echo -e "${DIM}[generating clean rewrite...]${RESET}"
  CLEAN_OUTPUT="$(claude -p --system-prompt "You are a careful editor. Apply the fix exactly. Do not add new statistics." "$REWRITE_PROMPT" 2>/dev/null)"

  echo
  echo -e "${BOLD}${GREEN}Clean version — after adversarial review:${RESET}"
  echo "$CLEAN_OUTPUT"
  echo

  t_append "## Step 3 — Clean Rewrite"
  t_append ""
  t_append '```'
  t_append "$CLEAN_OUTPUT"
  t_append '```'
  t_append ""

  banner "RESULT — The catch, plain English"

  echo -e "${RED}${BOLD}BEFORE:${RESET}  ${FLAGGED}"
  echo
  echo -e "${GREEN}${BOLD}AFTER:${RESET}   ${FIX_LINE}"
  echo
  echo -e "${BOLD}Why this matters:${RESET}"
  echo -e "  That stat passed the eye test. A busy approver waves it through."
  echo -e "  The adversarial reviewer was told to disagree — and found it in seconds."
  echo -e "  Without this gate, that claim ships."
  echo
  echo -e "${DIM}  The model wrote it confidently. The verification layer caught it.${RESET}"
  echo -e "${DIM}  That gap — confidence without verification — is the moat.${RESET}"
  echo

  t_append "## Result"
  t_append ""
  t_append "| | |"
  t_append "|---|---|"
  t_append "| **BEFORE** | Fabricated stat shipped with confidence |"
  t_append "| **CATCH**  | Adversarial reviewer: FABRICATED / NEEDS SOURCE |"
  t_append "| **AFTER**  | Directional language — same argument, defensible |"
  t_append ""
  t_append "> **The moat:** The model wrote it confidently. The verification layer caught it."
  t_append ""

else

  banner "RESULT — Reviewer passed this run"
  echo -e "${GREEN}${BOLD}No fabricated claims caught this run.${RESET}"
  echo -e "${DIM}The planted stat (73%) should reliably trigger a FAIL."
  echo -e "Try re-running — or check the reviewer output above for a partial catch.${RESET}"
  echo

  t_append "## Result — PASS (unexpected)"
  t_append ""
  t_append "The reviewer did not flag the planted stat this run. Re-run to see a catch."
  t_append ""

fi

# ============================================================
banner "HOW TO RECORD THIS  (5-line guide for Ryan)"
# ============================================================

cat <<'RECORD'
1. Open a terminal full-screen — Ghostty, dark theme, font size 18+.
2. cd to the ryantmoore repo root and run:
       bash demos/adversarial-review/demo.sh
3. Point your recorder at the terminal. The catch lands at Step 2 / Step 3.
4. Narrate as Step 2 runs: "This reviewer is explicitly told to disagree —
   its only job is to find the thing that's wrong."
5. Pause on RESULT. That's the money shot: before stat, after fix, one line
   explaining why the gate matters. Cut there.

Note: the producer artifact is fixed so the flaw is always there.
The reviewer is a live call — if it passes an odd run, re-run once.
RECORD

echo

# ── save transcript ─────────────────────────────────────────────────────────
printf '%s\n' "$T" > "$TRANSCRIPT_OUT"
echo -e "${DIM}Full transcript saved → ${TRANSCRIPT_OUT}${RESET}"
echo
