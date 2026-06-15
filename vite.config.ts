import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { ViteReactSSGOptions } from 'vite-react-ssg'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
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
    ],
  },
})
