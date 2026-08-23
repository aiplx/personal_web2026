# Personal Website Design System

## Design intent

- Present the site as a quiet electrical field notebook, not a marketing landing page.
- Use real evidence from completed study work: screenshots, measurements, diagrams, and troubleshooting records.
- Keep unfinished project plans and private career planning out of public-facing copy.
- Let mystery come from restraint, depth, and a thin mist layer. Do not add decorative blobs, generic AI imagery, or heavy effects.

## Typography

- Display and editorial headings: `Newsreader`, regular or medium weight.
- Interface text, metadata, and body copy: `IBM Plex Sans`.
- Chinese copy: `Noto Sans SC` with the same visual hierarchy as English.
- Letter spacing is always `0`.
- Hero-scale text is reserved for the homepage name. Interior page and card headings stay compact.

## Color

- Core dark: `--ink` and `--ink-soft`.
- Reading surfaces: `--paper` and `--paper-bright`.
- Functional accents: field green, signal yellow, technical blue, and restrained rust.
- Avoid a one-hue palette. Accent colors communicate hierarchy; they are not decorative fills.
- Fog overlays must preserve readable contrast and must never obscure technical images.

## Layout and spacing

- Use the shared `.container` for the 1200px content measure.
- Base spacing comes from `--space-*` tokens. Prefer 8, 12, 16, 24, 32, 48, 72, and 96px.
- Sections are full-width bands with unframed inner layouts. Do not place page sections inside cards.
- Cards are reserved for repeated content or framed tools, with radius no larger than `--radius-sm`.
- Stable media uses explicit aspect ratios. Controls have stable dimensions so labels and hover states do not shift layout.

## Components

- Header: compact brand at left, essential navigation at right, language in a small dropdown.
- Text links: underlined command labels with a restrained northeast arrow.
- Notes: numbered editorial rows with metadata, summary, outcome, and tools.
- Images: use actual work, keep borders thin, and add captions that identify the evidence.
- Focus states must be visible. The skip link stays fully hidden until keyboard focus.

## Motion and atmosphere

- Motion is slow and ambient only. Use opacity or transform; avoid layout animation.
- Respect `prefers-reduced-motion`.
- The mist is a broad translucent layer, never a group of orbs or bokeh shapes.

## Responsive behavior

- Desktop designs start at 1440px with a 1200px inner measure.
- At tablet sizes, reduce columns before reducing text legibility.
- At mobile sizes, stack editorial grids, keep tap targets at least 40px high, and ensure every long title wraps without overflow.
- Verify English and Chinese pages at desktop and mobile widths before publishing.
