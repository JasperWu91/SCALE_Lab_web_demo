
# EECS Lab Website — Publication page restored + pseudo data

## Pages
- `index.html` (Home; full-screen scroll-snap; About → Highlights → Contact)
- `research.html`
- `advisor.html` (no publications section)
- `publication.html` (**new standalone**, sorted by year only; pseudo entries included)
- `people.html` (pseudo members included; filter/search demo)
- `contact.html`
- `admin.html` (static editor for `assets/site-data.json`)

## Content source
All dynamic lists read from `assets/site-data.json`. Pseudo data has been pre-filled for People and Publications to showcase UI behavior.

## Update data
1) Open `/admin.html` and unlock (default key `lab123`, change inside file).
2) Edit JSON as needed.
3) Click **Download JSON** and replace `/assets/site-data.json` on your host.

Note: This is a static site; use a local server or deploy to avoid `file://` JSON fetch issues.
