import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { ViteReactSSGOptions } from 'vite-react-ssg'
import path from 'path'
import fs from 'fs'

const blogDir = path.resolve(__dirname, './src/data/blog-posts')
const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.json'))
const blogSlugs = blogFiles.map(f => {
  const data = JSON.parse(fs.readFileSync(path.join(blogDir, f), 'utf-8'))
  return `/blog/${data.slug}`
})

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) return 'firebase';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('react-dom') || id.includes('react-router')) return 'vendor';
          }
        },
      },
    },
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  ssgOptions: {
    dirStyle: 'nested',
    includedRoutes: () => [
      '/', '/about-us', '/services', '/portfolio', '/pricing',
      '/testimonials', '/faqs', '/contact', '/blog',
      '/web-development', '/mobile-app-development', '/seo-services',
      '/branding', '/ui-ux-design', '/business-consultation',
      '/digital-marketing', '/digital-tools', '/ai-services',
      '/ai-builder-academy', '/academy/register',
      '/ship-it-right',
      ...blogSlugs,
    ],
  },
})
