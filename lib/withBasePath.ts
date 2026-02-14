export function withBasePath(src: string): string {
  if (!src) return src;
  if (process.env.NODE_ENV !== 'production') return src;
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
    return src;
  }
  if (src.startsWith('/dignitas-dev/')) return src;
  if (src.startsWith('/')) return `/dignitas-dev${src}`;
  return src;
}
