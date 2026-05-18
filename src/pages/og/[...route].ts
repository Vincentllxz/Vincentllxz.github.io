import type { OGImageOptions } from 'astro-og-canvas'

import { getBlogCollection } from 'astro-pure/server'
import { OGImageRoute } from 'astro-og-canvas'

export const prerender = true

// Auto-generate an OpenGraph card for every blog post and course-note page.
// Output paths: `/og/blog/<id>.png` and `/og/notes/<id>.png`.
const blogEntries = await getBlogCollection('blog')
const noteEntries = await getBlogCollection('notes')

type PageData = { title: string; description: string }

const entries: [string, PageData][] = [
  ...blogEntries.map(
    (entry): [string, PageData] => [
      `blog/${entry.id}`,
      { title: entry.data.title, description: entry.data.description }
    ]
  ),
  ...noteEntries.map(
    (entry): [string, PageData] => [
      `notes/${entry.id}`,
      { title: entry.data.title, description: entry.data.description }
    ]
  )
]

const pages: Record<string, PageData> = Object.fromEntries(entries)

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page): OGImageOptions => ({
    title: page.title,
    description: page.description,
    logo: {
      path: './src/assets/avatar.png',
      size: [104]
    },
    bgGradient: [
      [13, 16, 27],
      [26, 32, 52]
    ],
    border: { color: [91, 188, 214], width: 8, side: 'block-end' },
    padding: 72,
    fonts: ['./src/assets/og/NotoSansTC-Medium.otf'],
    font: {
      title: {
        families: ['Noto Sans TC'],
        weight: 'Medium',
        color: [238, 241, 248],
        size: 66,
        lineHeight: 1.3
      },
      description: {
        families: ['Noto Sans TC'],
        weight: 'Medium',
        color: [150, 161, 183],
        size: 32,
        lineHeight: 1.45
      }
    }
  })
})
