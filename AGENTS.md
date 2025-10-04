# Project Overview

This is a personal blog built with [Astro](https://astro.build/). It uses [Tailwind
CSS](https://tailwindcss.com/) for styling and has an RSS feed. The content is managed through
Markdown files in the `src/content/blog` directory.

## Building and Running

To work with this project, you need to have [Node.js](https://nodejs.org/) and
[npm](https://www.npmjs.com/) installed.

**Key Commands:**

*   `npm install`: Installs the project dependencies.
*   `npm run dev`: Starts the local development server at `http://localhost:4321`.
*   `npm run build`: Builds the production site to the `./dist/` directory.
*   `npm run preview`: Previews the built site locally.

## Development Conventions

*   **Content:** Blog posts are written in Markdown and located in `src/content/blog`.
*   **Styling:** The project uses Tailwind CSS. Utility classes are preferred.
*   **Configuration:** The main configuration file is `astro.config.mjs`.
*   **Content Schema:** The structure of blog post metadata is defined in `src/content/config.ts`.
