# imnavanath portfolio

A React-based personal portfolio site at https://imnavanath.github.io/, deployed via gh-pages.

## Tech Stack
- React 18 (functional components + hooks)
- Webpack 5 + Babel (no Vite, no Next.js)
- Tailwind CSS 3 + DaisyUI 2
- Headless UI (Tab, Disclosure)
- react-icons (Di, Ai, Si, Fa, Md, Gr, Ri, Fa sets)
- gh-pages for deploy

## Commands
- npm install                     -> Install dependencies
- npm start                       -> Webpack dev server (port 8080)
- npm run build                   -> Production build (outputs to dist/)
- npm run deploy                  -> Push dist/ to gh-pages branch

## Project Structure
src/
  index.js                        -> Entry point
  App.js                          -> Root wrapper, renders <Profile config={...} />
  profile.config.js               -> SINGLE SOURCE OF TRUTH for projects, skills, tools, experience, education, social
  style.css                       -> Tailwind directives + minimal custom CSS
  components/
    Profile.js                    -> Orchestrator: fetches GitHub data, lays out sidebar + main column
    index.js                      -> Barrel exports
    avatar.js, theme.js, details.js, aboutMe.js, experience.js, education.js
    skill.js, tools.js
    professionalProjects.js       -> Org projects grid (uses isPrivate flag for "Visit -> " CTA)
    personalProjects.js           -> Personal repos grid (data from GitHub API)
    miscProjects.js               -> Misc repos grid (data from GitHub API)
    projectsTabs.js               -> Headless UI Tab.Group wrapping the 3 above
  helper/
    index.js                      -> sanitizeConfig, getInitialTheme, languageColor, classNames, renderCustomProjects
    icons.js                      -> Custom SVG icons (folder, react animation, theme caret)
    colors.json                   -> GitHub language -> color hex map

## Coding Standards
- ESLint defaults (no custom config currently)
- Indentation: tabs (matches existing files)
- Functional components with PropTypes — never class components
- One component per file, default export, kebab-or-camelCase filename matches the export
- DaisyUI utility classes preferred over custom CSS (keep style.css minimal)

## Patterns
- All portfolio data lives in `src/profile.config.js` — never hardcode in components
- GitHub data is fetched at runtime in `Profile.js` via the public GitHub API (no auth, rate-limited)
- Repos are bucketed into `personal` / `misc` by name lookup against config arrays
- Professional projects come straight from config (mix of public repos and private products with `isPrivate: true`)
- Theme switching is handled via DaisyUI `data-theme` attribute on `<html>`, persisted in localStorage

## Testing
- No test suite wired up. Verification is manual via `npm start` + browser inspection.
- For UI/UX changes use the preview MCP (preview_start, preview_eval, preview_screenshot) on port 8080.

## Gotchas
- The GitHub API is unauthenticated — hitting it too often during dev (e.g. rapid HMR reloads) returns 403 rate-limit. Wait a few minutes or proxy through a token if needed.
- `Profile.js` only renders when `professionlProjects && miscProjects` are both populated — empty arrays from a failed API call leave the page blank.
- Webpack is configured to output to `dist/` but `npm run deploy` pushes from `build/` — verify output paths if changing the build pipeline.
- DaisyUI version is pinned at 2.x; some component classes (`stats`, `tabs-boxed`, etc.) differ in DaisyUI 3+.
- `react-icons/si` (Simple Icons) is required for Node.js, TypeScript, and Sass tech-stack icons — keep that import alongside `react-icons/di`.

## Deployment
- `npm run deploy` publishes the `build/` (or `dist/`) output to the `gh-pages` branch on origin.
- Live site: https://imnavanath.github.io/
- Stats numbers in `src/components/aboutMe.js` (PRs merged / Reviews given / Active repos) are hard-coded from ClickHouse `github_analytics` queries; refresh manually each quarter.

## Current Focus
Working on: keeping projects, tech stack, role, and stats current as work shifts across SureProducts (SureRank, SureCookie, SureDash, SureMembers) + Astra + Spectra.
Next up: refresh stats numbers on a quarterly cadence; consider replacing manual stats with a proxied ClickHouse fetch if that becomes useful.

## Imports
<!-- Org standards loaded via plugin: /plugin install bsf-developers -->
<!-- React, JS, accessibility rules + auto-activating skills (react-context, testing-context) -->
