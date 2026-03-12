# Implementation Tasks

## Phase 1: Foundation & Configuration
- [x] **Clean up**: Remove or backup existing `index.html`.
- [x] **Config**: Update `_config.yml` with site metadata (title, author, email, theme settings) and enable necessary plugins (e.g., `jekyll-seo-tag`).
- [x] **Assets Structure**: Create directories: `_layouts`, `_includes`, `_sass`, `assets/css`, `assets/js`, `assets/images`.

## Phase 2: Core Layouts & Styling
- [x] **Base Layout**: Create `_layouts/default.html` with HTML5 boilerplate, linking CSS/JS.
- [x] **CSS Setup**: Create `assets/css/style.scss` and `_sass/main.scss`.
- [x] **Typography & Colors**: Define CSS variables for the "Geek" theme (dark mode, monospace fonts, accent colors).
- [x] **Header/Nav**: Implement a terminal-style navigation bar.
- [x] **Footer**: Simple footer with copyright and social links.
- [x] **Syntax Highlighting**: Add GitHub Dark theme CSS for code blocks.

## Phase 3: Homepage (Personal Profile) - REFINEMENT
- [ ] **ASCII Art Update**: Change the ASCII art in `index.html` to display "BRICK".
- [ ] **Content Update**: Remove "Geek" references from text, focus on technical identity.
- [x] **Typing Effect**: Write a vanilla JS script for the typewriter intro effect.
- [x] **Profile Section**: Add HTML structure for ASCII art, bio, and social links.
- [ ] **Skills Section**: Add a styled skills list (progress bars or command output style).

## Phase 4: Blog Functionality - REFINEMENT
- [x] **Post Layout**: Create `_layouts/post.html` with title, date, and content area.
- [x] **Blog Index**: Create `blog.md` or update Home to list recent posts.
- [ ] **Math Support**: Add MathJax CDN to `_layouts/default.html` or `_layouts/post.html` and configure it.
- [ ] **Sample Content Update**: Update the sample post to include a Math formula example.

## Phase 5: Polish & Deploy
- [ ] **Responsiveness**: Test and fix CSS for mobile screens.
- [ ] **404 Page**: Create a custom "System Error" 404 page.
- [ ] **Final Review**: Check all links and styles.
- [ ] **Git Push**: Commit all changes and push to GitHub to trigger the build.
