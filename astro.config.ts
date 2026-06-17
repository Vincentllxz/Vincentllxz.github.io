import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import vercel from '@astrojs/vercel'
import AstroPureIntegration from 'astro-pure'
import { defineConfig } from 'astro/config'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// Local integrations
// Local rehype & remark plugins
import rehypeAutolinkHeadings from './src/plugins/rehype-auto-link-headings.ts'
import rehypeLazyImages from './src/plugins/rehype-lazy-images.ts'
// Shiki
import {
  addCopyButton,
  addLanguage,
  addTitle,
  toggleLineNumbers,
  transformerNotationDiff,
  transformerNotationHighlight,
  updateStyle
} from './src/plugins/shiki-transformers.ts'
import config from './src/site.config.ts'

// https://astro.build/config
export default defineConfig({
  // Top-Level Options
  site: 'https://vinsong.csie.org',
  // Deploy to a sub path; See https://astro-pure.js.org/docs/setup/deployment#platform-with-base-path
  // base: '/astro-pure/',
  trailingSlash: 'never',
  build: { format: 'file' },
  // /note merged into /notes; static build emits a meta-refresh page Google
  // treats as a permanent redirect (GitHub Pages can't serve real 301s).
  redirects: { '/note': '/notes' },

  // Adapter
  // https://docs.astro.build/en/guides/deploy/
  // 1. Vercel (serverless)
  // adapter: vercel(),
  // output: 'server',
  // 2. Vercel (static)
  // adapter: vercelStatic(),
  // 3. Local (standalone)
  // adapter: node({ mode: 'standalone' }),
  // output: 'server',
  // ---

  image: {
    responsiveStyles: true,
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },

  integrations: [
    // astro-pure will automatically add sitemap, mdx & unocss
    // sitemap(),
    // mdx(),
    AstroPureIntegration(config)
    // @playform/compress have potential build issue with this template
    // (await import('@playform/compress')).default({ SVG: false, Exclude: ['index.*.js'] })

    // Temporary fix vercel adapter
    // static build method is not needed
  ],
  // root: './my-project-directory',

  // Prefetch Options
  prefetch: true,
  // Server Options
  server: {
    host: true
  },
  // Markdown Options
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeKatex, {}],
      rehypeHeadingIds,
      rehypeLazyImages,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: { className: ['anchor'] },
          content: { type: 'text', value: '#' }
        }
      ]
    ],
    // https://docs.astro.build/en/guides/syntax-highlighting/
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      },
      transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        updateStyle(),
        addTitle(),
        addLanguage(),
        addCopyButton(2000),
        toggleLineNumbers()
      ]
    }
  },
  experimental: {
    contentIntellisense: true
  }
})
