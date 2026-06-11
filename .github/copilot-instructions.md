<!-- Copilot instructions for AI coding agents -->
# Repository-specific guidance for AI coding agents

This is a small, single-page JavaScript exercise repository. The guidance below is concise and focused on patterns, developer workflows, and constraints that are discoverable from the code.

**Big Picture**
- **Project type:** static JS exercises (no bundler, no tests, no server). Files live at repository root (e.g. `index.html`, `script.js`, `Task2.js`..`Task5.js`).
- **Runtime:** browser-first. `index.html` loads a single script via a `<script src="...">` tag. Example: `index.html` currently loads `Task5.js`.

**How this repo is used (developer workflows)**
- **Open in browser:** double-click `index.html` or serve the folder and open in a browser to execute tasks that use `prompt`, `alert`, or `document` APIs.
- **Run with Node:** possible for files that only use `console.log` and no browser APIs. On Windows PowerShell use: `node Task5.js` (note the filename and extension must match exactly). Many files call `prompt()` / `alert()` / `document.writeln()` and will throw under Node — adapt or stub those calls if you need CLI testing.
- **Switching tasks:** change the `<script src="..."></script>` in `index.html` to point to the task file you want to run (e.g., `Task3.js`). Do not rename existing task files unless requested.

**Project-specific conventions & patterns**
- **File layout:** each `TaskN.js` is a self-contained file of many small exercises. Prefer minimal, surgical edits that keep examples intact.
- **I/O style:** output uses `console.log`. Interactive inputs use `prompt()` and `confirm()` (browser-only). When converting to Node, replace `prompt()` with `process.argv` or a simple `readline` stub.
- **Naming:** files use `TaskN.js` and `script.js`. Keep casing consistent (Windows is case-insensitive but other environments may be case-sensitive).

**Editing rules for AI agents**
- **Keep changes minimal:** modify only the target `Task*.js` unless the user asks for broader refactors.
- **Preserve style and comments:** these files are educational — keep existing console comments and examples intact.
- **When adding code:** avoid introducing new external dependencies; create small helper functions inline if needed.
- **Testing edits:** prefer running the code in the browser for interactive tasks. For non-interactive code, run `node <Filename>.js` from the repo root in PowerShell.

**Key files to reference**
- `index.html` — script selector; change `src` to run a different task.
- `Task5.js`, `Task4.js`, `Task3.js`, `Task2.js`, `script.js` — core exercise files; inspect for `prompt`, `alert`, `document` usage.

Ask the user before doing any of the following:
- Converting interactive tasks to Node-friendly scripts.
- Renaming or reorganizing `Task*.js` files.
- Introducing a build system or test harness.

If you need more context or want me to convert a specific task to a Node-compatible script or add a simple README, tell me which file and I will proceed.
