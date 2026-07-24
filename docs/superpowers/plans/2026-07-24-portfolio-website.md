# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (- [ ]) syntax for tracking.

**Goal:** Build a minimalist single-page portfolio website with vanilla HTML/CSS/JS.

**Architecture:** Single index.html with sections, smooth scroll navigation, CSS animations via Intersection Observer, mobile-first responsive design.

**Tech Stack:** HTML5, CSS3 (Grid/Flexbox), Vanilla JavaScript, Vercel hosting.

## Global Constraints

- Vanilla HTML/CSS/JS only (no frameworks)
- Minimalist / Clean design style
- Mobile-first responsive design
- Deploy to Vercel
- Sections: Hero, About Me, Skills, Projects, Experience, Contact

---

### Task 1: Project Setup & HTML Structure

**Files:**
- Create: index.html
- Create: styles.css
- Create: script.js

**Steps:**

- [ ] **Step 1:** Create index.html with basic HTML5 boilerplate, meta tags, and all 6 sections as empty <section> elements with IDs (#hero, #about, #skills, #projects, #experience, #contact)

- [ ] **Step 2:** Create styles.css with CSS reset, custom properties (colors, fonts, spacing), and base typography

- [ ] **Step 3:** Create script.js with empty DOMContentLoaded listener

- [ ] **Step 4:** Verify the page loads in browser with no errors

---

### Task 2: Navigation Bar

**Files:**
- Modify: index.html (add <nav> element)
- Modify: styles.css (add nav styles)
- Modify: script.js (add scroll spy + mobile menu toggle)

**Steps:**

- [ ] **Step 1:** Add fixed navbar to index.html with logo/name and links to all sections

- [ ] **Step 2:** Style navbar: fixed position, transparent on top, white background on scroll, smooth transitions

- [ ] **Step 3:** Add hamburger menu button for mobile (hidden on desktop)

- [ ] **Step 4:** Implement scroll spy in script.js to highlight active nav link based on scroll position

- [ ] **Step 5:** Implement mobile menu toggle (show/hide nav links on hamburger click)

- [ ] **Step 6:** Test navigation on both desktop and mobile viewports

---

### Task 3: Hero Section

**Files:**
- Modify: index.html (add hero content)
- Modify: styles.css (add hero styles)
- Modify: script.js (add entrance animation)

**Steps:**

- [ ] **Step 1:** Add hero content: name, tagline ("Flutter Mobile Developer & Full-Stack Developer"), brief description, two CTA buttons

- [ ] **Step 2:** Style hero: full viewport height, centered content, gradient background, typography hierarchy

- [ ] **Step 3:** Style CTA buttons: accent color, hover effect, proper spacing

- [ ] **Step 4:** Add fade-in + slide-up animation on page load using CSS keyframes

- [ ] **Step 5:** Test responsive behavior (stacked layout on mobile)

---

### Task 4: About Me Section

**Files:**
- Modify: index.html (add about content)
- Modify: styles.css (add about styles)

**Steps:**

- [ ] **Step 1:** Add about section content: two-column layout with text and profile photo placeholder

- [ ] **Step 2:** Add quick stats row: years of experience, projects completed, technologies used

- [ ] **Step 3:** Style two-column layout (flexbox/grid), responsive stacking on mobile

- [ ] **Step 4:** Style stat cards with icons and numbers

- [ ] **Step 5:** Test responsive layout

---

### Task 5: Skills Section

**Files:**
- Modify: index.html (add skills content)
- Modify: styles.css (add skills styles)

**Steps:**

- [ ] **Step 1:** Add skills section with category headings: Mobile, Frontend, Backend, Tools

- [ ] **Step 2:** Add skill cards for each category with icon placeholders and names

- [ ] **Step 3:** Style skill grid using CSS Grid, responsive columns

- [ ] **Step 4:** Add hover effect: subtle lift + shadow on skill cards

- [ ] **Step 5:** Test responsive grid layout

---

### Task 6: Projects Section

**Files:**
- Modify: index.html (add projects content)
- Modify: styles.css (add project styles)
- Modify: script.js (add filter functionality)

**Steps:**

- [ ] **Step 1:** Add filter tabs: All, Mobile, Web, Backend

- [ ] **Step 2:** Add project cards with: screenshot placeholder, title, description, tech tags, links (Live Demo, GitHub)

- [ ] **Step 3:** Style project cards: grid layout, card design, tech tag pills, link buttons

- [ ] **Step 4:** Add hover effect: card lift + overlay with links

- [ ] **Step 5:** Implement filter functionality in script.js using data attributes

- [ ] **Step 6:** Test filters work correctly and responsive layout

---

### Task 7: Experience Section

**Files:**
- Modify: index.html (add experience content)
- Modify: styles.css (add timeline styles)

**Steps:**

- [ ] **Step 1:** Add timeline structure with vertical line and entry containers

- [ ] **Step 2:** Add experience entries: company, role, duration, bullet points

- [ ] **Step 3:** Style timeline: vertical line, dots, alternating left/right on desktop

- [ ] **Step 4:** Style responsive: stacked layout on mobile

- [ ] **Step 5:** Test responsive timeline

---

### Task 8: Contact Section

**Files:**
- Modify: index.html (add contact content)
- Modify: styles.css (add contact styles)
- Modify: script.js (add form validation)

**Steps:**

- [ ] **Step 1:** Add two-column layout: contact form + contact info

- [ ] **Step 2:** Add form fields: name, email, message, submit button

- [ ] **Step 3:** Add contact info: email, LinkedIn, GitHub, location with social icons

- [ ] **Step 4:** Style form inputs, submit button, social icons

- [ ] **Step 5:** Implement client-side form validation (required fields, email format)

- [ ] **Step 6:** Test form validation and responsive layout

---

### Task 9: Scroll Animations

**Files:**
- Modify: script.js (add Intersection Observer)
- Modify: styles.css (add animation classes)

**Steps:**

- [ ] **Step 1:** Add animation classes in CSS: .fade-in, .slide-up, .slide-left, .slide-right

- [ ] **Step 2:** Implement Intersection Observer in script.js to trigger animations on scroll

- [ ] **Step 3:** Apply animation classes to section headings, cards, and content blocks

- [ ] **Step 4:** Test animations trigger correctly and don't cause layout shifts

---

### Task 10: Footer & Final Polish

**Files:**
- Modify: index.html (add footer)
- Modify: styles.css (add footer styles, final tweaks)
- Modify: script.js (add smooth scroll polyfill if needed)

**Steps:**

- [ ] **Step 1:** Add footer with copyright, social links, and "Back to Top" button

- [ ] **Step 2:** Style footer: dark background, centered content

- [ ] **Step 3:** Add smooth scroll behavior for all anchor links

- [ ] **Step 4:** Final responsive testing across all breakpoints

- [ ] **Step 5:** Performance check: ensure no layout shifts, fast load

- [ ] **Step 6:** Commit all files with message: "feat: complete portfolio website"
