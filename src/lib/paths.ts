export function withBase(path: string): string {
  if (!path || path.startsWith("http")) return path;

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (path === "/") return `${base}/`;

  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
}
