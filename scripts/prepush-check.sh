#!/usr/bin/env bash
# Pre-push guard: block a push that would fail the Cloudflare build.
# 1) Fast: parse every content-collection markdown frontmatter as YAML
#    (catches the class of bug that broke the build on 2026-08-05: an
#    unquoted colon in a description).
# 2) Full: if the dev container is up, run the real `astro build`.
# Bypass in a genuine emergency with:  git push --no-verify
set -uo pipefail
REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO" || exit 1
fail=0

echo "[pre-push] validating content frontmatter…"
python3 - "$REPO" <<'PY'
import sys, glob, os
root = sys.argv[1]
try:
    import yaml
except Exception:
    print("[pre-push] pyyaml missing; skipping YAML parse (build step still runs)")
    sys.exit(0)
bad = []
for f in glob.glob(os.path.join(root, "src/content/**/*.md"), recursive=True) + \
         glob.glob(os.path.join(root, "src/content/**/*.mdx"), recursive=True):
    s = open(f, encoding="utf-8").read()
    if s.startswith("---"):
        fm = s.split("---", 2)[1]
        try:
            yaml.safe_load(fm)
        except Exception as e:
            bad.append((os.path.relpath(f, root), str(e).splitlines()[0]))
if bad:
    print("[pre-push] FRONTMATTER YAML ERRORS:")
    for f, e in bad:
        print(f"   {f}: {e}")
    sys.exit(1)
print("[pre-push] frontmatter OK")
PY
[ $? -ne 0 ] && fail=1

# Full astro build via the dev container if it's running.
if docker ps --format '{{.Names}}' 2>/dev/null | grep -q '^ryantmoore-dev-1$'; then
    echo "[pre-push] running full astro build in container…"
    if ! docker exec ryantmoore-dev-1 sh -c "cd /app && npm run build" >/tmp/ryantmoore-prepush-build.log 2>&1; then
        echo "[pre-push] BUILD FAILED — last lines:"
        tail -15 /tmp/ryantmoore-prepush-build.log
        fail=1
    else
        echo "[pre-push] build OK"
    fi
else
    echo "[pre-push] dev container not running; ran frontmatter check only."
fi

if [ "$fail" -ne 0 ]; then
    echo "[pre-push] BLOCKED. Fix the above, or bypass with: git push --no-verify"
    exit 1
fi
echo "[pre-push] all checks passed."
