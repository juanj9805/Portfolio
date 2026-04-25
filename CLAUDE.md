# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the project

No build tools or package manager. Serve the root directory with any static file server:

```bash
python -m http.server 8080
# or
npx http-server .
```

Open `index.html` directly in a browser also works, but fetch() calls to JSON files require a server (CORS).

## Architecture

Vanilla HTML/CSS/JS — no framework, no bundler.

**Files:**
- `index.html` — all markup; sections are: nav, hero, about, kepler, projects (activity + moodle + final tests), footer
- `style.css` — all styles; design tokens live in `:root` CSS variables (`--color-main`, `--color-accent`, `--body-font`, etc.)
- `app.js` — all logic; loaded with `defer`
- `m1.json`, `m2.json`, `m3.json` — project card data, one file per training module

**Dynamic content flow:**

On `DOMContentLoaded`, `app.js` calls three render functions targeting three section IDs:
- `renderCardsActivitie("robinProjects", "<module>.json")` — reads `cardsActivity[]`
- `renderCardsMoodle("moodleProjects", "<module>.json")` — reads `cardsMoodle[]`
- `renderTest("finalTests", "<module>.json")` — reads `finalTests[]`

Clicking a module icon (`#m1`, `#m2`, `#m3`) clears those containers and re-renders from the corresponding JSON file.

**JSON card schema** (all three arrays share the same shape):
```json
{
  "gitHref": "string",
  "title": "string",
  "description": "string (optional in cardsMoodle)",
  "technology": "path to logo",
  "technology1": "path to logo (optional)",
  "technology2": "path to logo (optional)",
  "gitLogo": "path to logo"
}
```

**Known bug:** In the module click handlers, `finalTests` is cleared via a bare `innerHTML = ""` (missing `finalTests.innerHTML`), so the Final Tests section is never cleared when switching modules.

## Conventions

- Navigation uses anchor hash links (`#home-id`, `#about-id`, etc.) — no JS router.
- Assets follow the pattern `assets/<category>/<filename>` (draws, logos, backgorund, decorations).
- The CV PDF filename contains accented characters — reference it exactly: `Juan José Barrera Upegui - Full-Stack Developer CV.pdf`.
