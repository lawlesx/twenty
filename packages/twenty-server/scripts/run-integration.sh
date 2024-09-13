#!/usr/bin/env bash
# scripts/run-integration.sh

DIR="$(cd "$(dirname "$0")" && pwd)"
source $DIR/set-env-test.sh

# npx nx database:reset
npx nx jest --config ./jest-e2e.config.ts
