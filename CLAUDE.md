# Context for Claude Code

This is a single-file Thai-language AI Literacy self-assessment, based on
LinkedIn's AI Upskilling Framework (5 levels: Understanding → Applying →
Building → Training & Maintaining → Deeply Specializing).

## Architecture

- **`index.html`** is the entire app — HTML, CSS, and JS in one file
- No build step, no framework, no backend
- Pure static — deployable anywhere

## Key data structures (in `<script>` at bottom of index.html)

- **`LEVELS`** — array of 5 level objects. Each has:
  - `n`, `th`, `en`, `short`, `desc`, `color`
  - `items[]` — the 4 self-assessment statements for that level
  - `blurb` — result hero text when this is the user's placement level
  - `nextH`, `next[]` — next-step recommendations
  - `paths[]` — LinkedIn Learning path chips
- **`SCALE`** — the 5-point Likert scale (1–5) with Thai labels
- **`QS`** — flat list of all 20 questions, built from `LEVELS`
- **`answers[]`** — user responses (length = 20)

## Scoring logic

- `levelPct(li)` — % score for one level (sum of 4 answers / 20 × 100)
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
   next-steps card + Learning path chips + copy/print/restart actions

Switching screens: `show(id)` adds `.active` to one `.screen` at a time

## Common change requests

| Request | Where to edit |
|---|---|
| Change wording of a question | `LEVELS[i].items[j]` |
| Change Likert labels | `SCALE` |
| Change threshold (e.g. 70 → 60) | `THRESH` constant inside `finish()` |
| Change next-step suggestions | `LEVELS[i].next` |
| Change Learning path chips | `LEVELS[i].paths` |
| Add a new level | Append to `LEVELS` (also update intro count and copy) |
| Add a result-submission backend | `finish()` — POST `answers` and `pcts` |
| Bilingual toggle | Wrap text in `{th, en}` objects and add a toggle |

## Deploy targets

This is plain static HTML — Netlify, Vercel, GitHub Pages, Cloudflare Pages,
or any web host. No env vars, no secrets, no API keys.
