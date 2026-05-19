/**
 * rehype plugin — give every Markdown `<img>` native lazy-loading + async decoding.
 *
 * Note pages embed dozens of images each; without this they would all download
 * eagerly on page load, hurting Core Web Vitals. The post hero image is rendered
 * by the `Hero` component (not Markdown), so it stays eager — good for LCP.
 */
export default function rehypeLazyImages() {
  return (tree: unknown) => {
    const walk = (node: any) => {
      if (!node || typeof node !== 'object') return
      if (node.tagName === 'img') {
        node.properties = node.properties ?? {}
        node.properties.loading ??= 'lazy'
        node.properties.decoding ??= 'async'
      }
      if (Array.isArray(node.children)) node.children.forEach(walk)
    }
    walk(tree)
  }
}
