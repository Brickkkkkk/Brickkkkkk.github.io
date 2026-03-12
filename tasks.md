# Implementation Tasks

## Phase 1: Foundation & Configuration
- [ ] **Clean up**: Remove or backup existing `index.html`.
- [ ] **Config**: Update `_config.yml` with site metadata (title, author, email, theme settings) and enable necessary plugins (e.g., `jekyll-seo-tag`).
- [ ] **Assets Structure**: Create directories: `_layouts`, `_includes`, `_sass`, `assets/css`, `assets/js`, `assets/images`.

## Phase 2: Core Layouts & Styling
- [ ] **Base Layout**: Create `_layouts/default.html` with HTML5 boilerplate, linking CSS/JS.
- [ ] **CSS Setup**: Create `assets/css/style.scss` and `_sass/main.scss`.
- [ ] **Typography & Colors**: Define CSS variables for the "Geek" theme (dark mode, monospace fonts, accent colors).
- [ ] **Header/Nav**: Implement a terminal-style navigation bar.
- [ ] **Footer**: Simple footer with copyright and social links.

## Phase 3: Homepage (Personal Profile)
- [ ] **Home Layout**: Create `_layouts/home.html`.
- [ ] **Typing Effect**: Write a vanilla JS script for the typewriter intro effect.
- [ ] **Profile Section**: Add HTML structure for ASCII art, bio, and social links.
- [ ] **Skills Section**: Add a styled skills list (progress bars or command output style).

## Phase 4: Blog Functionality
- [ ] **Post Layout**: Create `_layouts/post.html` with title, date, and content area.
- [ ] **Syntax Highlighting**: Configure Rouge in `_config.yml` and add a base code syntax theme (e.g., Monokai or custom dark).
- [ ] **Blog Index**: Create `blog.md` or update Home to list recent posts.
- [ ] **Sample Content**: Create a "Hello World" blog post in `_posts/YYYY-MM-DD-welcome.md` to test rendering.

## Phase 5: Polish & Deploy
- [ ] **Responsiveness**: Test and fix CSS for mobile screens.
- [ ] **404 Page**: Create a custom "System Error" 404 page.
- [ ] **Final Review**: Check all links and styles.
- [ ] **Git Push**: Commit all changes and push to GitHub to trigger the build.
