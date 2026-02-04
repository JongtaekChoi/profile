import matter from "gray-matter";

export type PostMeta = {
  title: string;
  date: string; // ISO-ish (YYYY-MM-DD) recommended
  description?: string;
  tags?: string[];
};

export type Post = {
  slug: string;
  meta: PostMeta;
  content: string;
};

function slugFromPath(path: string) {
  const filename = path.split("/").pop() ?? path;
  return filename.replace(/\.md$/i, "");
}

function normalizeMeta(data: Record<string, unknown>, fallbackSlug: string): PostMeta {
  const title = (data.title as string) || fallbackSlug;
  const date = (data.date as string) || new Date().toISOString().slice(0, 10);

  const tagsRaw = data.tags;
  const tags = Array.isArray(tagsRaw)
    ? (tagsRaw.filter((t) => typeof t === "string") as string[])
    : typeof tagsRaw === "string"
      ? tagsRaw
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : undefined;

  const description = typeof data.description === "string" ? data.description : undefined;

  return { title, date, description, tags };
}

// Vite will turn this into a static import map at build-time.
const postModules = import.meta.glob<string>("../posts/*.md", {
  query: "?raw",
  import: "default",
});

export async function getAllPosts(): Promise<Post[]> {
  const entries = await Promise.all(
    Object.entries(postModules).map(async ([path, loader]) => {
      const raw = await loader();
      const slug = slugFromPath(path);
      const parsed = matter(raw);
      return {
        slug,
        meta: normalizeMeta(parsed.data as Record<string, unknown>, slug),
        content: parsed.content,
      } satisfies Post;
    })
  );

  return entries.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const matchEntry = Object.entries(postModules).find(([path]) => slugFromPath(path) === slug);
  if (!matchEntry) return null;

  const [path, loader] = matchEntry;
  const raw = await loader();
  const parsed = matter(raw);

  return {
    slug: slugFromPath(path),
    meta: normalizeMeta(parsed.data as Record<string, unknown>, slug),
    content: parsed.content,
  };
}
