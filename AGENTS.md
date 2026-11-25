# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## What this is

`@typhoon41/eslint-config-angular`: a strict, shareable ESLint 9 flat config for Angular v20+ projects, published
publicly on npmjs.org. The whole package is `index.js`: one `defineConfig` block for `src/**/*.ts` that spreads
`@typhoon41/eslint-config` (repository `Eslint`) and adds the `angular-eslint` plugin and its inline-template processor.
Both are runtime `dependencies` pinned to exact versions, so consumers get them transitively and only import the
config (see `README.md`).

Marush consumes this config.

## Commands

```sh
npm ci                  # install; the lockfile resolves from registry.npmjs.org
npm pack --dry-run      # the tarball must hold only index.js, package.json, README.md, LICENSE
node --input-type=module -e "import { ESLint } from 'eslint'; import config from './index.js'; await new ESLint({ overrideConfigFile: true, overrideConfig: config }).calculateConfigForFile('src/index.ts');"
```

The last command is the load check CI runs: it fails on an unknown enabled rule or an invalid rule option.
There are no unit tests; to see a rule's effect, link the package into a consumer (`npm link`) and lint there.

## Editing rules

- List every `@angular-eslint/*` rule explicitly, `off` included, sorted by rule name. No `recommended`
  preset is extended, so a rule missing from the list is off.
- A core or plugin rule redefined here overrides the base config's setting; change the base rule in `Eslint` instead
  when every TypeScript project should get it.
- ESLint does not validate rules set to `off`: a misspelled `off` rule passes silently. Check each rule name against
  the plugin's documentation.
- After a dependency upgrade, go through its changelog for new, renamed and deprecated rules
  (an enabled rule the plugin removed breaks the load check).
- A rule that makes linting stricter fails consumers' builds: it is a breaking change (`feat!:`), released as a major
  version.

## Releasing

Released through the toolkit `release/` tooling (github.com/typhoon41/toolkit), configured by `release.json` and
`azure-pipelines.yml`. Commit and PR conventions and the version-bump flow are owned by the `conventional-commits` and
`toolkit-release` skills of the `conventions@toolkit` plugin; follow them instead of a copy here. In short: bump
`version` in `package.json` through a PR; the pipeline publishes to npm and creates the tag and GitHub release after
approval.
