# AI Agent Instructions for LGBTQ+ Counselling Site

This document serves as an `AGENTS.md` (and `HANDOVER.md`) for any AI coding assistant (e.g., Claude Code, Cursor, Antigravity) working on this repository. Please read these instructions carefully to ensure seamless updates and maintenance.

## 1. Site Architecture, Framework, and Hosting/Deployment Flow
- **Architecture & Framework:** This is a purely static website. There is no frontend framework (like React, Vue, or Svelte) and no build step (no Webpack, Vite, or Node.js).
- **Tech Stack:** Vanilla HTML5, CSS3 (using CSS variables for design tokens), and vanilla JavaScript.
- **Hosting/Deployment Flow:** The site is designed to be hosted on any static file server (e.g., GitHub Pages, Netlify, Vercel, or a traditional web host). Deployment simply involves uploading the raw HTML/CSS/JS/image files to the server. Since there is no build step, whatever is committed to the main branch is what gets deployed.

## 2. Exact Commands to Install, Build, Preview, and Deploy
- **Install:** No installation required (no `npm install` or equivalent).
- **Build:** No build step required (no `npm run build`).
- **Preview:** To preview the site locally, start a local HTTP server in the root directory.
  - Using Python 3: `python3 -m http.server 8000` (or `python -m http.server 8000`)
  - Using Node (if `serve` is installed): `npx serve .`
  - Access the site at `http://localhost:8000` (or the port specified by the tool).
- **Deploy:** Deploy by copying the directory contents to your web host via FTP/SFTP, or by pushing to a configured continuous deployment service (e.g., Netlify/Vercel connected to the Git repository). No specific deploy scripts exist in this repository.

## 3. Required Environment Variables
- There are **no required environment variables** for the local preview or build process, as it is a completely static site.
- (If external tracking, analytics, or dynamic integrations are ever added via third-party scripts, their keys would be placed directly in the HTML or managed via the hosting provider, but none are currently configured as environment variables.)

## 4. How Content/Pages are Structured and Updated
- **Content Structure:**
  - Each page is a standalone `.html` file in the root directory (e.g., `index.html`, `about.html`, `contact.html`, `counselling.html`, `legal.html`, `professionals.html`).
  - **CSS:** Stored in `css/styles.css`. It uses standard CSS variables defined in the `:root` scope for colors and typography.
  - **JS:** Stored in `js/script.js`. It contains lightweight logic (primarily for the mobile navigation menu toggle).
  - **Images:** Stored in the `images/` directory.
- **Updating Content:** To update text or layout on a page, you must edit the respective `.html` file directly.
- **Important:** Because this is a static site without a templating engine (like Eleventy, Hugo, or PHP), the `<header>` (navigation), `<footer>`, and `<head>` metadata are **duplicated** across all HTML files. If you add a new navigation link or change the footer text, you **must** update it in *every* HTML file.

## 5. Recurring Quirks or Conventions
- **Duplicated Elements:** As mentioned, headers, footers, and head tags are duplicated across all `.html` files. Always do a repository-wide search-and-replace or ensure you manually touch every file when updating site-wide elements.
- **Booking Widget Integration:** The `counselling.html` page contains a third-party booking widget ("Book Like A Boss"). It is embedded using a `<script>` tag and a target `<div>` with `id="blab-widget-4141"` inside a `.booking-embed-container`. Be careful not to alter this embed code unless explicitly requested, as it controls the live booking flow.
- **Design Tokens:** All colors, fonts, and spacing are controlled via CSS variables in `css/styles.css` (e.g., `--brand-indigo`, `--brand-gold`, `--space-m`). Do not hardcode values in the HTML using `style` attributes; always use or create appropriate CSS classes referencing these variables.
- **Responsive Navigation:** The mobile menu toggle logic expects specific classes (`nav-toggle`, `is-open`) on specific elements (the toggle button and `#main-nav`). Do not change these IDs or classes without also updating `js/script.js`.
- **Accessibility:** The site uses `aria-expanded` attributes (toggled by JavaScript) and semantic HTML tags (`<header>`, `<main>`, `<footer>`, `<section>`). Maintain these conventions when adding new content.
