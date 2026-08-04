# Ascend AI — Design System

## What is Ascend AI

Ascend AI is positioned as **infrastructure for D2C (direct-to-consumer) brand operations** — not an "AI agency," a set of tools/agents that keep customer ops running: syncing commerce/marketing channels, catching ad-decay before it wastes spend, running voice agents for customer conversations, and enforcing data hygiene across a brand's stack (Shopify, Klaviyo, ad platforms, Anthropic's API, Latenode, etc.).

**Sources for this system:** no codebase, Figma file, or slide deck was attached for this project. Everything here is built directly from the brand brief pasted into the task ("Trunk-style" reference doc, adapted for Ascend AI) — a written specification of color system, typography, component inventory, layout patterns, and 7-page architecture (Home, About, Process, Solutions, Work With Us, Price, Contact). If a Figma file, codebase, or additional brand assets exist, attach them and this system should be reconciled against them — right now every visual decision traces back to that brief, not to a real product surface.

## Visual direction

Monochrome-first "engineered software product" aesthetic (inspired by dev-tool SaaS sites like Trunk) — black/white/gray with one restrained amber accent, heavy geometric sans headlines at dramatic scale over small gray body copy, a signature monospace eyebrow-label motif (`/audit /build /scale`), and real-looking terminal/log/chart mockups standing in for actual product screenshots. Alternating light/dark section rhythm; a single signature line-art illustration (not yet supplied — see Assets below) threading down the hero/left edge.

## Index

- `styles.css` — root stylesheet, `@import`s everything in `tokens/`
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`
- `components/core/` — Button, Badge, Card, EyebrowLabel, StatusIndicator
- `components/navigation/` — Nav, Footer
- `components/marketing/` — OverlayCard, LogoRow, TwoPanelSection, IntegrationIconRow, TestimonialCard, ClosingCTA
- `components/mockups/` — TerminalCard, BarChartCard (the "real artifact" UI mockups)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand rhythm) shown in the Design System tab
- `ui_kits/marketing-site/` — full click-through recreation: Home + Process pages
- `assets/` — icon usage notes (see Iconography); no logo or illustration files supplied
- `SKILL.md` — portable skill file for using this system in Claude Code

## Components

Core: **Button**, **Badge**, **Card**, **EyebrowLabel**, **StatusIndicator**
Navigation: **Nav**, **Footer**
Marketing: **OverlayCard**, **LogoRow**, **TwoPanelSection**, **IntegrationIconRow**, **TestimonialCard**, **ClosingCTA**
Mockups: **TerminalCard**, **BarChartCard**

**Intentional additions** beyond the brief's literal inventory: `Card` (generic bordered container factored out of the testimonial/pricing card pattern the brief describes but doesn't name), `StatusIndicator` (the footer's "All systems operational" detail, reusable on Contact), `IntegrationIconRow` monogram fallback (real tool logos not supplied — see Iconography).

## Content fundamentals

- **Voice**: direct, infrastructure-flavored, low-hype. Sentences read like product documentation more than ad copy — "Sync every channel," "Catch decay before it costs you," "Enforce data rules automatically." Verb-first micro-headlines, one-line supporting description, no exclamation points.
- **Person**: second person for benefit statements aimed at the reader's ops ("your systems," "your stack"); first-person plural sparingly for the company's own claims.
- **Casing**: sentence case throughout — headlines, buttons, nav links. No all-caps except the tiny mono eyebrow tags, which are lowercase with a leading slash (`/audit`, not `/AUDIT`).
- **Numbers**: plain static figures for stats (no animated counters) — restraint over gimmick.
- **Emoji**: never used. This is a monochrome, engineered-feeling brand; emoji would undercut it immediately.
- **CTA phrasing**: two-tier — a concrete primary action ("Get Started," "Get clean, automated operations in one strategy call") paired with a lower-commitment secondary ("See How It Works," "Learn More," "Talk to Us").
- **Terminal/log copy**: written like real CLI/system output — `✓ synced 4 channels`, `✗ decay threshold exceeded: campaign #4471`, `action: pause_and_flag` — never decorative fake code, always plausible operational text.

## Visual foundations

- **Color**: ~95% black (`--black #0A0A0A`) / near-black / white / off-white / gray. One accent, `--accent #F5A623` (amber), reserved for "NEW" badges and 2–3 small highlights per page — never a background fill for a large area. Code/terminal cards get their own small syntax palette (green/red/blue/purple) used only inside those mockups.
- **Type**: dramatic heading-to-body contrast is the signature move — H1 is a huge, tight-tracked, heavy-weight jump from the page's body copy, not an incremental step. Headings: Inter Tight, 600–800 weight, `tracking-tight` (-0.03em). Body: Inter, regular weight, generous 1.6–1.65 line-height, gray-1. Mono (JetBrains Mono) is reserved exclusively for the eyebrow-label breadcrumb pattern and terminal-card content — never used for body or headings, so it stays a deliberate signal.
- **Backgrounds**: flat solid fills only — no gradients, no photographic imagery, no textures/grain. The one exception is the hero's signature line-art illustration (not yet supplied). Sections alternate white → black → white in a strict rhythm; never two dark or two light sections back to back (except the hero, which is light with dark UI floating on it).
- **Animation**: minimal and functional only — hover opacity fades (~0.15s ease), no bounce/spring easing, no decorative looping animation. This is an engineered-tool aesthetic, not a playful one.
- **Hover states**: primary/secondary buttons and nav links fade to ~80% opacity on hover. No color inversion, no scale/shrink.
- **Press states**: not specified in the brief; recommend a subtle opacity dip (~0.65) consistent with the hover language rather than a shrink/scale effect, to keep interactions quiet.
- **Borders**: thin 1px hairlines only — `--border-light` (#E5E5E3) on light surfaces, `--gray-3` (#2A2A2A) on dark. No heavy strokes, no colored borders, no left-border accent bars.
- **Shadows**: quiet and rare. Bordered cards (testimonials, pricing) use border only, no shadow. The one deliberate shadow is the hero's floating white overlay card (`--shadow-overlay-card`) — meant to visibly lift off the illustration behind it.
- **Corner radii**: 8px (small controls) / 12px (cards, chart/terminal mockups) / 16px (larger cards, overlay card) / pill (999px, all buttons and small tag/badge pills).
- **Transparency/blur**: not used. Nav sits directly on the hero art with no glass/blur treatment — just transparent background.
- **Imagery color vibe**: not established — no photography is used in this brief's reference; all "imagery" is either flat illustration (hero) or literal UI mockups (terminal/chart cards). If real product screenshots or photography are added later, keep them cool-neutral and desaturated to match the monochrome system, not warm/golden.
- **Layout**: centered content column, `--container-max: 1200px`. Left-list / right-mockup two-panel pattern is the single repeating content device — mono eyebrow → bold H2 → optional one-line subcopy → panels. No sticky/fixed nav specified; treat nav as sitting inline at the top of the hero only.
- **Cards**: two distinct card languages by context — (1) bordered white "quiet" cards (testimonials, pricing, overlay card) with a thin hairline border and minimal/no shadow; (2) dark near-black "artifact" cards (terminal, chart) with a thin `--code-border` hairline, no shadow, mono type inside.

## Iconography

- No icon font, SVG sprite, or icon set was supplied with the brief. The brief's own component inventory is explicitly **text-only** for feature lists ("no icons") — icons are reserved for a few specific spots: nav dropdown carets, button trailing arrows, and the integration-badge row.
- For those spots this system links **Lucide** static SVGs from CDN (`unpkg.com/lucide-static`) as the closest neutral, stroke-based icon set matching the brief's plain, unbranded aesthetic. This is a substitution, not a supplied asset — flagging per instructions. If the real product has its own icon set, swap the CDN references in `Button`, `Nav`, and `IntegrationIconRow`.
- Real integration logos (Shopify, Klaviyo, Anthropic, Latenode, etc.) were not supplied, so `IntegrationIconRow` currently renders two-letter monogram circles as a placeholder — swap in real logo marks (SVG/PNG) into `assets/` and the component's `items` prop as soon as they're available.
- Emoji: never used (see Content fundamentals).
- Unicode glyphs: used sparingly and functionally inside terminal-mockup copy only (`✓` / `✗` for success/error lines) — not as general-purpose icons elsewhere.

## Assets — gaps to flag

- **Logo**: no logo/wordmark file was supplied. Every place a mark would go (Nav, Footer, favicon) currently renders the plain text "Ascend AI" in heading type. Do not invent a logo — attach a real one and it will be dropped in.
- **Hero illustration**: the brief calls for one signature commissioned illustration (a data-pipeline/node-graph motif) reused as a vertical thread down the page edge. No such illustration was supplied, and this system does not generate illustration artwork — the Home UI kit uses a plain abstract dot/line CSS pattern as a neutral stand-in. Replace with the real commissioned asset when available.
- **Fonts**: no font files were supplied. Headings use **Inter Tight** (closest open match to the brief's suggested Söhne/General Sans feel), body uses **Inter**, mono uses **JetBrains Mono** — all loaded live from Google Fonts inside `tokens/fonts.css`. Confirm these are acceptable substitutes, or supply licensed font files (e.g. actual Söhne) to self-host instead.

## Templates

None yet — ask if you'd like a reusable page template (e.g. a two-panel feature section or full landing-page shell) extracted into `templates/`.
