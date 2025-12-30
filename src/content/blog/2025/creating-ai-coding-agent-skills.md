---
title: |
  Creating AI Coding Agent Skills
pubDate: 2025-12-29
description: |
  A short walkthrough of creating a Codex Agent Skill to generate Astro
  blog frontmatter.
tags: ['codex', 'agent-skills', 'astro', 'coding-agents', 'ai-agents']
---

Recently Codex was updated to also leverage [Agent
Skills](https://developers.openai.com/codex/skills), established by
[Anthropic](https://github.com/anthropics/skills).

One friction point I have with this blog is creating the Astro frontmatter for the blog posts. I
decided this would be a good skill for Codex.

To create the skill I added a new directory for the skill: `.codex/skills/blog-template`. Then added
these instructions to a `SKILL.md` file in the directory's root.

```md title="SKILL.md"
---
name: blog-template
description: Add or complete Astro Markdown frontmatter for blog posts (title, pubDate, description, tags) by inferring values from the post content. Use when asked to add headers/frontmatter to Markdown in src/content/blog, ensuring only these fields are present and only missing ones are filled.
---

# Blog Template

## Overview
- Add or complete an Astro frontmatter block for a blog post while leaving the body untouched.
- Only include `title`, `pubDate`, `description`, and `tags`; ignore other fields.
- If frontmatter already exists, preserve existing values and only fill missing fields.

## Workflow
1. Detect existing frontmatter at the top of the file. Keep provided values for the four allowed fields; drop any other keys from the new block.
2. Derive field values from the post content:
   - **title**: Prefer the first level-1 heading or the clearest inferred title; use sensible title case and avoid trailing punctuation.
   - **pubDate**: Keep existing value if present; otherwise set to today in `YYYY-MM-DD`.
   - **description**: Write a concise 1–2 sentence summary (often one line is enough). Multi-line is allowed using `|` but keep it brief and accurate.
   - **tags**: Infer key topics/subjects from the post. Rules: lowercase; hyphenate spaces; no punctuation; cap at 6; unique; required even if guessed. Prefer specific nouns over generic filler.
3. Emit a single frontmatter block at the very top in this form, then the untouched body:
   ```yaml
   ---
   title: |
     Example Title
   pubDate: 2025-12-01
   description: |
     One-sentence summary of the post.
   tags: ['topic-one', 'topic-two']
   ---
   ```

## Tag selection hints
- Choose the main themes, people, places, or technologies mentioned.
- Skip redundant variants; prefer one canonical form (e.g., `ai`, not both `ai` and `artificial-intelligence`).
- If content is thin, still provide tags that best match the subject matter.
```

So far I've been very happy with the results. I often lightly edit what it generates, but it gets me
close.

A future enhancement is to have Codex first generate a list of existing blog post tags, and then use
he list as a reference when generating tags for the new post.
