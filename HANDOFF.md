# Fauzi Sahawi portfolio — owner handoff

## Update content
- `data/portfolio.ts`: profile and biography, contact links, projects, experience, expertise, approach.
- `public/images/`: optimized local artwork and photographs. Replace images and update descriptive alt text in data/components.
- `app/page.tsx`: homepage section order and hero text.
- `app/work/[slug]/page.tsx`: reusable project overview template; entries in the projects array create routes automatically.
- `components/portfolio/`: Header, SectionHeading, ProjectCard, Timeline, Contact and Footer.
- `app/globals.css`: shared palette, local Poppins fonts, layout, breakpoints and reduced-motion styles.
- `app/layout.tsx`: default page metadata, Open Graph and favicon. Each project has its own title/description metadata.

## Sources checked on 22 September 2026
1. https://www.fauzisahawi.com/ — retrieved successfully as HTML. Main biography, current experience, project summaries, and WhatsApp source. Search fetch was unavailable but direct retrieval succeeded.
2. https://www.linkedin.com/in/fauzi-sahawi-b42999184/ — supplied by owner, indexed positioning corroborates fintech and learning. Full profile unavailable; no additional dates/employers inferred.
3. https://fauzi1017.github.io/Portfolio2024/ — owner's earlier portfolio identified in supplied account context. Source for original portrait, project image assets, project years and email. The current primary website corroborates the same project names and activities.
4. All four owner-supplied reference images were viewed and interpreted as inspiration, not used as page screenshots.

## Asset provenance
- Portrait: earlier portfolio `/assets/img/test.jpg`, optimized to `public/images/fauzi.webp`; original graduation photo, no synthetic identity edits.
- Trigo: earlier portfolio `/assets/img/portfolio/7.png`, optimized to `public/images/trigo.webp`.
- JNA Express: earlier portfolio `/assets/img/portfolio/8.png`, optimized to `public/images/jna.webp`.
- Donorun: earlier portfolio `/assets/img/portfolio/4.jpg`, optimized to `public/images/donorun.webp`.
- Current primary site's image URLs returned 403; original portfolio assets used instead.
- `public/images/designer.webp`: one built-in imagegen conceptual illustration, not a portrait or a project deliverable. Prompt: conceptual male product designer at desk sketching wireframes beside laptop, landscape 3:2, minimal irregular black ink, warm #FAF9F6 background, tiny #C1343A accents, no text/logos/badges.
- Poppins downloaded from Google Fonts and served locally.

## Content still needed
- A current downloadable CV PDF. The primary site's `/cv` resolves to a wrapper with an iCloud link, not a verified PDF. The old Google Drive CV could not be read. No CV button is shown.
- Detailed project constraints, documented outcomes, and retrospective learnings if fuller case studies are desired. Current pages deliberately remain concise project overviews.
- Any approved original testimonials with attribution. No testimonials included.
- Optional current professional portrait to replace the verified graduation photograph.
- Confirm employer naming and title: current bio says 'UI/UX Analyst' / 'Maybank Sekuritas Indonesia'; its experience section says 'Analyst, UI/UX designer' / 'Maybank Securities Indonesia'. Display follows the experience section; no extra seniority implied.
- Confirm current status of 2022–Present experience entries when updating the source portfolio. Dates are reproduced from the primary website.
- Domain mapping before adding canonical URLs. No existing production domain is claimed or changed.

## Editorial decisions
Donorun is identified as a hackathon project, Trigo as a university thesis, JNA as an application redesign. No invented business impact, numerical skill ratings, awards, testimonials or research findings. Indmira is omitted from selected work because accessible imagery was insufficient. Web development skills come from the owner's supplied project context and brief. The primary positioning remains UI/UX & Product Design.

## Running locally
Use the retained project package manager and `pnpm dev` (or the Sites managed preview workflow in the managed environment). Build with `pnpm build`. No additional backend, CMS, login, or database is required by the portfolio.

## Verification
- Production build and route metadata checked during delivery.
- Responsive CSS covers 360px, 768px and 1440px layouts, semantic headings, keyboard focus, mobile menu Escape/close behavior, 44px controls, local optimized images and prefers-reduced-motion.
- Browser connection recovered after correcting an unsupported icon import. Verified home at 360/768/1440 iframe viewports: document widths 345/753/1425 (scrollbar excluded), each matching scrollWidth, so no horizontal overflow. Desktop and mobile screenshots inspected.
- Mobile menu opened by Enter and closed after About selection. About lands below the sticky header (110px offset). All three project routes, next-project links, Back to Work and per-project page titles were exercised.
- Original images and supporting illustration loaded successfully when scrolled into view. No application error was observed; browser extension metadata warnings are unrelated to the Site.
- TypeScript noEmit and production build passed. Reduced-motion behavior checked in CSS. Color contrast: primary/white 5.50:1; secondary text/background 5.79:1; main text/background 16.70:1.
- External social destinations are verified source links; no message was sent. Email uses the address published in the owner's earlier portfolio.
