# Tasks: Archive Page

**Input**: Design documents from `/specs/001-create-an-archive/`

## Phase 3.1: Core Implementation
- [x] T001 Create a new page at `src/pages/archive.astro`.
- [x] T002 In `src/pages/archive.astro`, fetch all blog posts using `getCollection('blog')`.
- [x] T003 In `src/pages/archive.astro`, group the fetched blog posts by year.
- [x] T004 In `src/pages/archive.astro`, render the grouped blog posts. The posts should be sorted in reverse chronological order within each year.
- [x] T005 In `src/pages/archive.astro`, ensure each blog post title links to the correct blog post page.

## Phase 3.2: Integration
- [x] T006 In `src/layouts/Layout.astro`, add a link to the archive page in the footer.
- [ ] T007 In `src/layouts/Layout.astro`, conditionally render the archive link. It should only be displayed if there are blog posts.

## Dependencies
- T002 depends on T001.
- T003 depends on T002.
- T004 depends on T003.
- T005 depends on T004.
- T007 depends on T006.