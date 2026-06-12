import { existsSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

/**
 * rehype plugin — give every `<img>` native lazy-loading + async decoding, and
 * stamp `width`/`height` onto `/images/...` files from `public/` so the page
 * reserves their space before they load (no layout shift).
 *
 * Images appear in two node shapes here: hast elements (`tagName: 'img'`, from
 * Markdown `![]()` syntax) and MDX JSX nodes (`mdxJsxFlowElement`/`mdxJsxTextElement`
 * with `name: 'img'`, from the raw `<img>` tags the note figure blocks use). The
 * note pages embed dozens of images each, so both shapes must be covered. The post
 * hero image is rendered by the `Hero` component (not Markdown), so it stays
 * eager — good for LCP.
 */

// Many pages share the same images across rebuilds in `astro dev`; cache metadata.
const sizeCache = new Map<string, { width: number; height: number } | null>()

async function publicImageSize(src: string) {
  if (sizeCache.has(src)) return sizeCache.get(src) ?? null
  let size: { width: number; height: number } | null = null
  const file = path.join(process.cwd(), 'public', src)
  if (existsSync(file)) {
    try {
      const meta = await sharp(file).metadata()
      if (meta.width && meta.height) size = { width: meta.width, height: meta.height }
    } catch {
      // unreadable image — leave it without dimensions
    }
  }
  sizeCache.set(src, size)
  return size
}

type ImgAccessor = {
  get: (name: string) => unknown
  setDefault: (name: string, value: string | number) => void
}

function hastImg(node: any): ImgAccessor {
  node.properties = node.properties ?? {}
  return {
    get: (name) => node.properties[name],
    setDefault: (name, value) => {
      node.properties[name] ??= value
    }
  }
}

function jsxImg(node: any): ImgAccessor {
  node.attributes = node.attributes ?? []
  return {
    get: (name) => node.attributes.find((a: any) => a.name === name)?.value,
    setDefault: (name, value) => {
      if (!node.attributes.some((a: any) => a.name === name))
        node.attributes.push({ type: 'mdxJsxAttribute', name, value: String(value) })
    }
  }
}

export default function rehypeLazyImages() {
  return async (tree: unknown) => {
    const images: ImgAccessor[] = []
    const walk = (node: any) => {
      if (!node || typeof node !== 'object') return
      if (node.tagName === 'img') images.push(hastImg(node))
      else if (
        (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') &&
        node.name === 'img'
      )
        images.push(jsxImg(node))
      if (Array.isArray(node.children)) node.children.forEach(walk)
    }
    walk(tree)

    await Promise.all(
      images.map(async (img) => {
        img.setDefault('loading', 'lazy')
        img.setDefault('decoding', 'async')
        const src = img.get('src')
        if (typeof src !== 'string' || !src.startsWith('/images/')) return
        if (img.get('width') || img.get('height')) return
        const size = await publicImageSize(src)
        if (size) {
          img.setDefault('width', size.width)
          img.setDefault('height', size.height)
        }
      })
    )
  }
}
