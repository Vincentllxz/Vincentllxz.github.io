#!/usr/bin/env bash
set -euo pipefail

if [ $# -lt 1 ] || [ -z "$1" ]; then
  echo "Usage: ./dep.sh \"<commit message>\"" >&2
  exit 1
fi

git add .
git commit -m "$1"
git push
