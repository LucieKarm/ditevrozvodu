import type { CollectionEntry } from "astro:content";
import { statSync } from "node:fs";
import { fileURLToPath } from "node:url";

function parseDateMs(pubDate?: string): number | null {
    if (!pubDate) return null;
    const ms = new Date(pubDate).getTime();
    return Number.isFinite(ms) ? ms : null;
}

function entryFileMtimeMs(entry: CollectionEntry<"blog">): number | null {
    try {
        // Content entry ids are the source filenames inside the collection folder.
        // Example: `konflikt-ublizuje-vic-nez-rozvod.md`
        const url = new URL(`../content/blog/${entry.id}`, import.meta.url);
        return statSync(fileURLToPath(url)).mtimeMs;
    } catch {
        return null;
    }
}

export function sortBlogNewestFirst(entries: CollectionEntry<"blog">[]) {
    return [...entries].sort((a, b) => {
        const aMs = parseDateMs(a.data.pubDate) ?? entryFileMtimeMs(a) ?? 0;
        const bMs = parseDateMs(b.data.pubDate) ?? entryFileMtimeMs(b) ?? 0;

        if (bMs !== aMs) return bMs - aMs;
        return b.slug.localeCompare(a.slug);
    });
}

