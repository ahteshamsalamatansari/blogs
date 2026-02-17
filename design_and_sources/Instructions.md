# Blog Website Development Instructions

Build a complete personal blog website using:

* Next.js (latest App Router)
* MDX for blog content
* Tailwind CSS
* Vercel deployment

The website should feel visually similar to Medium.com in terms of reading experience and content presentation.

## Important Project Files

Please review and use the following files before implementation:

* `design.md`

  * Contains overall website structure, layout direction, sections, and styling guidance.

* Stitch design files

  * Use them as the primary visual reference for UI implementation and responsiveness.

* `resume.pdf`

  * Use this to extract my:

    * personal details
    * experience
    * projects
    * social links
    * bio/about information
    * skills

Populate the portfolio/blog sections using information from the resume.

---

# Website Goals

The website should serve as:

* Personal brand website
* Technical AI engineering blog
* Portfolio
* Writing platform
* Authority-building website

The site must look modern, minimal, clean, and highly readable.

---

# Frontend Style Requirements

The blog reading experience should resemble Medium.com:

## Typography

* Large readable titles
* Clean subtitles
* Excellent paragraph spacing
* Comfortable reading width
* Elegant heading hierarchy
* Beautiful quote blocks
* Proper inline code formatting
* Clean code blocks with syntax highlighting

## Content Presentation

Support:

* Hero images
* Inline images
* Pull quotes
* Tables
* Bullet lists
* Callout blocks
* Embedded tweets/videos (optional)
* Reading time
* Table of contents
* Author section

## Layout Feel

The UI should feel:

* Minimal
* Premium
* Editorial
* Reading-focused
* Fast
* Modern

Avoid:

* clutter
* excessive gradients
* flashy animations
* dashboard-like UI
* template-looking designs

---

# Core Features

## Blog System

Use MDX-based blog architecture.

Each blog should support frontmatter:

```md
---
title:
subtitle:
date:
excerpt:
tags:
coverImage:
---
```

Generate blog pages dynamically from MDX files.

---

# Required Pages

## Home Page

Include:

* All Blogs in card style
* Navigation Bar (Archive, About)
* Footer (Github, Linkeidn with logos)

## Blog Listing Page

* Search/filter support
* Tags/categories
* Responsive card layout

## Individual Blog Page

Must support:

* Medium-like reading layout
* Sticky table of contents
* Syntax highlighting
* Reading progress indicator
* Responsive typography
* Social sharing section
* Related posts

## About Page

Generate from resume details.

---

# Technical Requirements

## Stack

* Next.js
* Tailwind CSS
* TypeScript
* MDX
* Vercel

## SEO

Implement:

* Metadata
* OpenGraph tags
* Sitemap
* robots.txt
* Canonical URLs
* Structured data

## Performance

* Image optimization
* Lazy loading
* Good Lighthouse score
* Fast page loads

## Responsive Design

Must work properly on:

* desktop
* tablet
* mobile

---

# Suggested Folder Structure

```txt
/app
/components
/content/blog
/lib
/public
/styles
```

---

# Recommended Features

## Blog Features

* Reading time
* Syntax highlighting
* Copy code button
* Table of contents
* Related articles
* Tag pages

## Integrations

* Analytics
* Newsletter integration
* Comments system (optional)

---

# Deployment

Deploy using Vercel.

The final setup should support this workflow:

1. Add new `.mdx` file
2. Push to GitHub
3. Vercel auto-deploys
4. Blog becomes live automatically

---

# Design Priority

The highest priority is:

* excellent reading experience
* clean typography
* strong visual hierarchy
* modern editorial feel

This should not feel like a generic developer template.

The site should feel polished enough that:

* clients trust the engineering quality
* recruiters see technical credibility
* readers enjoy long-form content