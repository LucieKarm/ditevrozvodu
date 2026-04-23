---
description: How to create a new article for the ditevrozvodu.cz website
---

## Process for creating a new article

1. **Analyze published articles** — Read all articles with `published: true` in `src/content/blog/` to match the established tone: warm, direct, professionally grounded (as a psychotherapist/social worker with legal knowledge), supportive, practically oriented.

2. **Write the article** — Create a new `.md` file in `src/content/blog/` with proper frontmatter (title, description, category, image, published: true). Rewrite the user's draft to match the site's tone and structure. Use `##` headings, bold key phrases, blockquote tip/warning boxes, bullet lists.

3. **User reviews the article** — Present the article file for user review. Wait for feedback.

4. **Rewrite based on feedback** — Apply the user's feedback and rewrite as needed. Repeat review if necessary.

5. **User makes final edits** — The user makes their own last changes directly in the markdown file.

6. **Add contextual CTA bridge** — At the very end of the article (after a `---` horizontal rule), add a tailored italicized paragraph that connects the article's specific topic to a concrete benefit of the online course ["Jak mluvit s dětmi o rozpadu rodiny"](https://spondea.thinkific.com/courses/jakmluvitsdetmi). The CTA should feel like a natural continuation of the article, not an ad. See existing articles for examples of the format and tone.

7. **Commit and push** — Once the user confirms they are done editing, commit and push all changes (including any other pending changes like footer updates).
// turbo
7. Run `git add -A && git commit -m "<descriptive message>" && git push` from the project root.
