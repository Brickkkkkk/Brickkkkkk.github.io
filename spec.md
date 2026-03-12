# Specification: Geek Style Personal Blog & Portfolio

## 1. Overview
Create a personalized, "Geek/Hacker" styled personal website hosted on GitHub Pages. The site will serve as both a technical blog and a personal portfolio/resume. The design will draw inspiration from command-line interfaces (CLI), IDEs, and cyberpunk aesthetics, focusing on minimalism, performance, and a developer-centric user experience.

**Refinement:** The "Geek" style should be subtle.
**Refinement 2:** The hero section text will feature a **Daily Chinese Poem** to add a cultural touch to the tech aesthetic.

## 2. Design Concept: "The Terminal"
*   **Visual Style**:
    *   **Background**: Deep dark grey/black (`#0d1117` or `#1e1e1e`).
    *   **Accent Colors**: Terminal Green (`#00ff00`), Cyan (`#00ffff`), or Amber (`#ffb000`) for highlights.
    *   **Typography**: Strictly Monospace fonts (e.g., 'Fira Code', 'Courier New', 'JetBrains Mono').
    *   **Decorations**: Blinking cursors, ASCII art, scanlines (optional), "code rain" subtle effects.
*   **User Interface**:
    *   **Navigation**: Styled like a shell prompt (e.g., `user@home:~$ cd /blog`).
    *   **Interactivity**: Hover effects that mimic text selection or block cursors.
    *   **Layout**: Clean, single-column for reading, responsive for mobile.

## 3. Tech Stack
*   **Platform**: GitHub Pages (Static Site Hosting).
*   **Engine**: Jekyll (Native support by GitHub Pages).
*   **Languages**:
    *   HTML5 (Semantic).
    *   SCSS/CSS3 (Custom styling, no heavy frameworks like Bootstrap).
    *   JavaScript (Vanilla, for typing effects and simple interactions).
    *   Liquid (Jekyll templating).
    *   Markdown (For blog content).
    *   **Math**: MathJax (for rendering LaTeX formulas).

## 4. Page Structure

### 4.1 Home (`/` or `index.html`)
*   **Header**: ASCII Art of the text "BRICK".
*   **Hero Section**:
    *   **Daily Poem**: Replaces the "Hello World" text. Displays a selected Chinese ancient poem that changes every 24 hours.
    *   **Typing Effect**: The poem is typed out character by character.
    *   Brief bio/elevator pitch (in English).
*   **Quick Links**: Social media (GitHub, Email) presented as command outputs.
*   **Latest Posts**: A preview of the latest 3 blog posts (styled like a file list `ls -l`).

### 4.2 Blog Archive (`/blog` or `archive.html`)
*   List of all posts grouped by year/month.
*   Search/Filter functionality (simple JS-based filtering by tag).

### 4.3 Post Layout (`_layouts/post.html`)
*   **Metadata**: Title, Date, Tags, Reading time.
*   **Content**: Markdown rendered content with syntax highlighting (Rouge) and Math support (MathJax).
*   **Navigation**: Previous/Next post links.

### 4.4 About/Resume (`/about` or inline in Home)
*   **Skills**: Presented as a JSON object or a skill bar chart styled as terminal progress bars.
*   **Experience**: Timeline view.

## 5. Functional Requirements
*   **Responsiveness**: Must look good on mobile devices (terminal text wraps correctly).
*   **Code Highlighting**: Syntax highlighting for code blocks is essential for a tech blog.
*   **Math Support**: Enable MathJax for rendering LaTeX equations (e.g., `$E=mc^2$`).
*   **Daily Content**: JavaScript logic to select a poem from a predefined list based on the current date.
*   **SEO**: Basic meta tags, sitemap.xml.
*   **Performance**: Minimal external requests, fast loading.

## 6. Directory Structure (Proposed)
```
/
├── _config.yml         # Site configuration
├── _layouts/           # Page templates
│   ├── default.html    # Base HTML wrapper
│   ├── post.html       # Blog post layout
│   └── home.html       # Homepage layout
├── _posts/             # Blog articles
├── _sass/              # SCSS partials
├── assets/
│   ├── css/            # Compiled CSS
│   ├── js/             # Scripts
│   └── images/         # Static images
├── index.html          # Entry point
└── about.md            # About page
```
