# Context for Claude Code

**AiStyle** — bilingual Thai/English self-assessment measuring two axes:
**AI Skill** (adapted from LinkedIn's AI Upskilling Framework) × **Human–AI
Partnership** (original Human-in-the-Loop axis). The two axes combine into
one of 4 usage patterns (quadrants). 24 questions total: 12 skill + 12
partnership (v3 item set; v1 rows have 20-value rawAnswers, v2 rows 22).

## Architecture

- **`index.html`** — all UI, browser behavior, canvas image generation,
  visual editor (`?edit=1`), demo preview (`?demo=1|novice|coach|autopilot|director`
  jumps straight to a simulated result page; `?demo=canvas` additionally replays
  the Canvas student view — required feedback card, send button, sample receipt.
  No variant ever submits), connect-mode client logic
- **`content/app-content.js`** — canonical editable content (UI strings,
  levels, scale, roles, partnership). Never move content back into HTML
- **`content/connect-config.js`** — opt-in connect-mode config (ships
  `enabled: false`); maps result fields to Google Form entry IDs
- **`js/assessment-core.js`** — pure, testable scoring functions
- **`api/`** — Vercel serverless functions, used ONLY by LTI connect mode
  (`lti/launch`, `me`, `submit`, shared helpers in `_lib/`). Public
  deployments never call them
- **`tools/`** — export/apply the editable `content.txt` format
- **`test/`** — `node --test` suite (scoring, content validation, LTI
  security, static regression guards)
- **`docs/`** — `connect-setup.md` (Canvas/Google Form setup),
  `canvas-course-setup.md` (per-course Canvas checklist for instructors),
  `question-review.md` (item-quality review), `ailit-mapping.md`
  (AiStyle ↔ OECD/EU AILit mapping), `items-v2-draft.md` (v2 item history)
- **`frameworks.html`** — standalone bilingual knowledge page summarizing
  the three source frameworks (LinkedIn, OECD/EU AILit, LINE MAN Wongnai
  AI Thinking) plus CMU's institutional Gen AI policy (ประกาศ มช. 2566),
  with reference links + an AI-use transparency card (#ai-transparency);
  linked from the global footer
- **`tags-guide.html`** — standalone org-tag legend/guide page
- **`roles-guide.html`** — standalone bilingual page explaining the per-role
  floor/ceiling rationale (incl. a CSS range chart) + design-hypothesis
  disclaimer; mirror values with `roles[]`
- **`workshops.html`** — standalone bilingual workshop catalog (skill track
  L1–L5 + style track); each entry has a `link` field for real course URLs
  (mirrored as `docs/workshops-catalog.md` for offline curation). All
  knowledge pages share a `guide-nav` pill row and are linked from the
  intro "เรียนรู้เพิ่มเติม" menu card
- No build step, no framework. Static everywhere; the `api/` functions
  activate only on Vercel when LTI env vars are set

## Key data structures (`content/app-content.js`)

- **`levels[]`** — 5 levels; only L1–L3 have `assessable: true` (L4–L5 are
  reference-only, shown in the framework diagram). Each level: `n`, `name`,
  `short`, `desc`, `color`, `items[]` (4 statements for assessable levels),
  `blurb`, `nextH`, `next[]`, `workshops[]`
- **`partnership`** — 6 `subtraits` (keys `verify`, `restraint`,
  `human_lead`, `direction`, `learning`, `privacy`), 2 items each; the second item of every
  subtrait is reverse-scored (`reverse: true` — a test enforces exactly
  one reverse item per subtrait, in second position).
  `threshold` (60) is the quadrant partnership cut. `quadrants` holds the 4
  personas (`novice`, `coach`, `autopilot`, `director`) with `blurb`,
  `nudge`, `partnershipNext[]`, `persona{who,strengths,watchouts,workshops}`
- **`roles[]`** — 9 job roles with `code`, `floor`, `ceiling` for the role
  verdict; **`roleStretch`** — champion/pivot paths per role
- **`scale`** — 5-point Likert, stored values `v: 0–4`, displayed 1–5
- **`lang.th` / `lang.en`** — all UI strings; key sets must match exactly
  (validated). Template *functions* (`placementBlockedTpl` etc.) live in
  `index.html` (~line 1043), not in the content file

## Scoring flow (`finish()` in index.html, logic in assessment-core)

1. `levelPercentages(ASSESSABLE, skillAnswers)` → % per level (answers 0–4,
   4 items × max 4)
2. `cumulativePlacement(pcts, 70)` → skill level = highest unbroken chain
   from L1 at ≥70%. Failing L1 places the user at 0 regardless of L2/L3
3. `partnershipSubtraitScores` (handles reverse items) →
   `partnershipComposite` (mean of 6 subtraits)
4. `quadrantPlacement(placement, composite, {partnershipCut})` → quadrant:
   high skill = placement ≥ 2, high partnership = composite ≥ 60
5. `roleVerdict(pcts, userRole, 70)` → below_floor / on_track / role_fit /
   above_ceiling / at_cap (drives the stretch card)

## Screens / flow

`intro` → (`gate` if LTI mode without session) → `name` (+ student-ID field
in form mode) → `role` → `quiz` (one question per screen, auto-advance) →
`result`. `show(id)` toggles `.active` on one `.screen` at a time.

Result screen: quadrant hero → per-level skill bars → partnership bars with
strength/gap → role verdict/stretch → next steps (skill + partnership) →
workshop chips (quadrant-driven via `resolveResultWorkshops`) → org tag
block → download image (1080×1920 canvas) / restart.

## Org tag block (`renderTags`)

Three lines: summary (`#L2-Applying #P68 #Q-coach #role-student`), full
scores (`#L1:85 #L2:75 #L3:40 #verify:75 #restraint:50 #human_lead:88
#direction:60`), and weak flags (`#weak:verify`, subtrait < 50%). Legend and
L&D guidance live in `orgGuide*` strings (both langs) and are reused by
`tags-guide.html`.

## Connect mode (opt-in; default off)

Three deployment modes — see `docs/connect-setup.md`. One deployment can
serve both audiences: connect mode activates only on hostnames listed in
`connect-config.js → connectHosts`; every other domain of the project is
public/zero-data. `copyOverrides` (th/en, validated keys) swaps selected
strings for a concise Canvas-facing tone without touching the public copy.
- **public** (default): zero-data — no storage, no network after load
- **form**: browser posts all scores straight to a Google Form
  (`connect-config.js` enabled, `mode: "form"`); adds a student-ID field
- **lti**: users must launch from Canvas (LTI 1.1). `api/lti/launch`
  verifies the OAuth1 signature + nonce/timestamp + email allowlist, issues
  a signed httpOnly cookie; `api/submit` is default-deny and forwards
  results (with the Canvas-verified email) to the Google Form server-side.
  Requires env vars: `LTI_CONSUMER_KEY`, `LTI_SHARED_SECRET`,
  `LTI_LAUNCH_URL`, `SESSION_SECRET`, `ALLOWLIST`, optionally Upstash Redis
  creds for the nonce store. Secrets never go in the repo

## Common change requests

| Request | Where to edit |
|---|---|
| Wording of a question / any UI string | `content/app-content.js` (or `npm run content:export` → edit `content.txt` → `npm run content:apply`) |
| Likert labels | `content/app-content.js` → `scale` |
| Skill threshold (70) | `THRESH` in `finish()` (index.html) |
| Partnership cut (60) | `content.partnership.threshold` |
| Quadrant skill cut (level ≥ 2) | `quadrantPlacement` default in `js/assessment-core.js` |
| Roles / floors / ceilings | `content/app-content.js` → `roles` |
| Quadrant personas / workshops | `content/app-content.js` → `partnership.quadrants` |
| Org tag format | `renderTags()` in index.html + `orgGuide*` strings |
| Google Form / Canvas integration | `content/connect-config.js`, `api/`, `docs/connect-setup.md` |
| Downloaded image layout | canvas code in index.html (~line 2000–2400) |
| Validate everything | `npm test` |

## Rules

- Every user-visible string needs a th/en pair — tests fail otherwise
- Public mode must stay zero-data: no cookies/localStorage/network
  (authoring mode `?edit=1` and opt-in connect mode are the exceptions)
- Never commit secrets; LTI/session secrets are Vercel env vars only
- Run `npm test` before every commit
- License CC BY-NC-SA 4.0; don't use LinkedIn's imagery — the framework
  diagram is our own SVG

## Project log (Notion)

Every working session logs itself into the project's Notion space — this is a
standing agreement with the owner, not something to wait for a prompt about.
Parent page **AiStyle — บันทึกการพัฒนาระบบ**
(`3ca5fa32-95f6-8171-ab24-c9fd6586dbbd`, teamspace Entaneer Journey) holds
three databases. Column names are Thai and must be
spelled exactly, or `notion-create-pages` rejects the row:

| Database | data_source_id | Columns |
|---|---|---|
| บันทึกการตัดสินใจ | `1629f4bc-4b99-425f-88c4-eedd343d6f6d` | การตัดสินใจ (title) · วันที่ · ด้าน · เหตุผล · ทางเลือกที่ไม่เลือก · สถานะ · อ้างอิง |
| สิ่งที่ทำไปแล้ว | `95698a9b-01c2-4ce2-9f48-e575e1d9aca9` | สิ่งที่ทำ (title) · วันที่ · PR · ประเภท · รายละเอียด |
| งานค้าง | `d39ec2c2-ab1a-4e50-8a47-d2ebffc135e1` | งาน (title) · สถานะ · ความสำคัญ · รายละเอียด |

What to log:

1. **A PR merges** → one row in *สิ่งที่ทำไปแล้ว* with its number
2. **A design or policy decision that will outlive the session** → one row in
   *บันทึกการตัดสินใจ*. Fill in เหตุผล and ทางเลือกที่ไม่เลือก — the reasoning and
   the roads not taken are the whole point; git already records what changed
3. **Work that is blocked or deferred** → a row in *งานค้าง*; set สถานะ to
   "เสร็จแล้ว" once it lands

Practical notes: write entries in Thai · create at most ~4 rows per call
(longer payloads fail to parse) · if the Notion connector is unavailable, say
plainly what went unlogged rather than skipping it silently.

Scope stays split: Notion carries the *why* and the timeline; setup guides and
anything that must track the code stay in `docs/` only, so the two never drift.

## Deploy

Static host for public/form modes (Netlify, GitHub Pages, …). **Vercel
required for LTI mode** (serverless `api/` + env vars). `vercel.json` sets
`frame-ancestors` to allow Canvas embedding and no-store on `/api`.
