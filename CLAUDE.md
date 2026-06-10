# Context for Claude Code

This is a bilingual Thai/English AI Literacy self-assessment, based on
LinkedIn's AI Upskilling Framework (5 levels: Understanding → Applying →
Building → Training & Maintaining → Deeply Specializing).

## Architecture

- **`index.html`** contains the UI and browser behavior
- **`content/app-content.js`** is the canonical editable content source
- **`js/assessment-core.js`** contains testable scoring functions
- **`tools/`** exports and applies the editable `content.txt` format
- No build step, no framework, no backend
- Pure static — deployable anywhere

## Key data structures

- **`LEVELS`** — loaded from `content/app-content.js`. Each level has:
  - `n`, `name`, `short`, `desc`, `color`
  - `items[]` — the 4 self-assessment statements for that level
  - `blurb` — result hero text when this is the user's placement level
  - `nextH`, `next[]` — next-step recommendations
  - `workshops[]` — recommended workshop chips
- **`SCALE`** — the bilingual 5-point Likert scale
- **`QS`** — flat list of all 20 questions, built from `LEVELS`
- **`answers[]`** — user responses (length = 20)

## Scoring logic

- `CORE.levelPercentages(levels, answers)` — percentage for each level using
  the current number of questions in that level
- Threshold for "passing" a level: **70%**
- **Cumulative placement**: user's overall level = highest unbroken chain
  starting from level 1. If they hit 70% on L1 and L2 but not L3, placement = 2.
  Even if they score high on L4, they're still placed at L2.

## Design language

- Warm paper aesthetic — cream background (`--paper`), teal primary
  (`--teal`), amber accent (`--amber`)
- Fonts: **Chakra Petch** (display, Latin-only) + **IBM Plex Sans Thai** (body)
- Grain + radial gradient atmosphere on body
- Mobile-first; single column; max-width 680px

## Three screens

1. `#intro` — landing with level overview
2. `#quiz` — one question per screen, auto-advances on choice
3. `#result` — hero placement card + per-level bars + strengths/growth +
   next-steps card + workshop chips + copy/print/restart actions

Switching screens: `show(id)` adds `.active` to one `.screen` at a time

## Common change requests

| Request | Where to edit |
|---|---|
| Change wording of a question | Update `content.txt`, then run `npm run content:apply` |
| Change Likert labels | `content/app-content.js` → `scale` |
| Change threshold (e.g. 70 → 60) | `THRESH` constant inside `finish()` |
| Change next-step suggestions | `LEVELS[i].next` |
| Change workshop chips | `content/app-content.js` → `levels[i].workshops` |
| Add a new level | Append to `LEVELS` (also update intro count and copy) |
| Add a result-submission backend | `finish()` — POST `answers` and `pcts` |
| Validate all content and scoring | `npm test` |

## Deploy targets

This is plain static HTML — Netlify, Vercel, GitHub Pages, Cloudflare Pages,
or any web host. No env vars, no secrets, no API keys.
